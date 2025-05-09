import { useEffect, useState } from 'react';
import useStore from '../store/useUserStore';
import UserTable from '../components/userTable';
import { HiOutlineSearch } from "react-icons/hi";
import ModalDelete from '../components/modalDelete';
import ModalEdit from '../components/modalEdit';
import SearchBar from '../components/searchBar';
export default function Users() {
  const { Users, fetchUsers, deleteUser, editUser } = useStore();
  const [search, setSearch] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  useEffect(() => {
    fetchUsers();
  }, []);
  const handleDelete = (id) => {
    deleteUser(id);
    setShowDeleteModal(false);
  };
  const handleEdit = (updatedUser) => {
    if (!updatedUser.id) return;
    editUser(updatedUser.id, updatedUser);
    setShowEditModal(false);
  };
  const filteredUsers = (() => {
    if (!search.trim()) return Users;
    const results = Users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    return results.length > 0 ? results : Users;
  })();
  return (
    <div className="px-2 sm:px-6 md:px-8">
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por nombre"
      />
    <UserTable
        users={filteredUsers}
        onDelete={(user) => {
          setSelectedUser(user);
          setShowDeleteModal(true);
        }}
        onEdit={(user) => {
          setSelectedUser(user);
          setShowEditModal(true);
        }}
    />
    <ModalDelete
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        user={selectedUser}
    />
    <ModalEdit
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onConfirm={handleEdit}
        user={selectedUser}
      />
  </div>
  )
}

