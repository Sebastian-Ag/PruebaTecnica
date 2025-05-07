import { useEffect, useState } from 'react';
import useStore from '../store/useUserStore';
import UserTable from '../components/userTable';
import { HiOutlineSearch } from "react-icons/hi";
export default function Users() {
  const { Users, fetchUsers, removeUser, editUser } = useStore();
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetchUsers();
  }, []);
  const handleDelete = (id) => {
    removeUser(id);
  };
  const handleEdit = (user) => {
    const updated = {
      ...user,
      name: prompt("Nuevo nombre:", user.name) || user.name,
      email: prompt("Nuevo email:", user.email) || user.email,
    };
    editUser(user.id, updated);
  };
  const filteredUsers = Users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
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
    <UserTable users={filteredUsers} onDelete={handleDelete} onEdit={handleEdit} />
  </div>
  )
}

