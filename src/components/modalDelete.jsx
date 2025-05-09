import React from 'react';
import TriangleIcon from '../icons/triangleicon';

export default function ModalDelete({ isOpen, onClose, onConfirm, user }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-400 hover:text-black text-xl"
        >
          &times;
        </button>
        <div className="bg-red-600 rounded-full w-10 h-10 flex justify-center items-center mx-auto mb-4 text-white">
          <TriangleIcon />
        </div>
        <h2 className="text-lg font-semibold mb-4 text-center text-gray-800">¿Eliminar elemento?</h2>
        <p className="mb-6 text-sm text-gray-600 text-center">
          ¿Seguro que desea eliminar este elemento? Esta acción no se puede deshacer.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => onConfirm(user.id)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Eliminar
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
