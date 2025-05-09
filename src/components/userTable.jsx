import React from 'react';
import { HiEnvelope } from "react-icons/hi2";
import { BiTrash } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';

export default function TableUsers({ users, onDelete, onEdit }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 max-w-6xl mx-auto shadow-lg mt-3 overflow-x-auto border border-gray-800">
      <table className="min-w-[700px] w-full text-xs md:text-sm text-left table-fixed rounded-lg">
        <thead>
          <tr className="text-gray-300 text-[11px] md:text-xs uppercase border-b border-gray-600">
            <th className="py-2 px-2">Nombre</th>
            <th className="py-2 px-2 hidden md:table-cell">Empresa</th>
            <th className="py-2 px-2">Correo Electrónico</th>
            <th className="py-2 px-2 text-center">Acción</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {users.map((user) => (
            <tr key={user.id} className="group hover:bg-gray-900 transition-all text-gray-200">
              <td className="py-4 px-2 font-semibold group-hover:text-white whitespace-nowrap">
                {user.name}
              </td>
              <td className="py-4 px-2 hidden md:table-cell">{user.company.name}</td>
              <td className="py-4 px-2">
                <div className="flex items-center gap-2 flex-wrap">
                  {user.email}
                  <HiEnvelope title="Correo" className="text-md" />
                </div>
              </td>
              <td className="py-4 px-2 flex justify-center gap-4">
                <button onClick={() => onDelete(user)} className="text-red-500 hover:scale-115 transition-transform" title="Eliminar">
                  <BiTrash size={18} />
                </button>
                <button onClick={() => onEdit(user)} className="text-blue-600 hover:scale-120 transition-transform" title="Editar">
                  <AiOutlineEdit size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
