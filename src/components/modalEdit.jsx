import { useEffect } from 'react';
import React, { useState } from 'react';
import EditIcon from '../icons/editIcon'; 

export default function ModalEdit({ isOpen, onClose, onConfirm, user }) {
  const [editedUser, setEditedUser] = useState(user);
  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = () => {
    onConfirm(editedUser);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-80 relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-400 hover:text-black text-xl"
        >
          &times;
        </button>
        <div className="bg-blue-600 rounded-full w-10 h-10 flex justify-center items-center mx-auto mb-4 text-white">
          <EditIcon />
        </div>
        <h2 className="text-lg font-semibold mb-4 text-center text-gray-800">
          Editar usuario
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-600">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-600">
            Correo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
