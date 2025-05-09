import { useEffect, useState } from 'react';
import useStore from '../store/useUserStore';
import UserTable from '../components/userTable';
import { HiOutlineSearch } from "react-icons/hi";
import ModalDelete from '../components/modalDelete';
import ModalEdit from '../components/modalEdit';
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
    <div className="max-w-md mx-auto">
      <div className="relative mb-0">
        <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="w-full pl-10 pr-3 py-2 rounded-2xl border border-gray-700 bg-black text-white placeholder-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
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

