import React, { useState } from 'react'
import usePostStore from '../store/usePostStore';

export default function PostForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { addPost } = usePostStore();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!title || !body) return;
        addPost({ title, body });
        setTitle('');
        setBody('');
        setIsOpen(false);
    }
  return (
    <>
        <button
            onClick={() => setIsOpen(true)}
            className="bg-black hover:bg-violet-950 text-white font-bold py-2 px-4 rounded-lg transition cursor-pointer mb-2"
        >
        + Añadir
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
          >
            &times;
          </button>
          <h2 className="text-xl font-bold mb-4">Crear Post</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
            <label className="block text-sm font-medium text-gray-700">Título*</label>
            <input
              className="w-full border border-gray-400 rounded-md px-3 py-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Contenido*</label>
                <textarea
                    className="w-full border border-gray-400 rounded-md px-3 py-2"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Contenido"
                />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-black hover:bg-violet-950 text-white px-4 py-2 rounded-md"
              >
                Guardar
              </button>
            </div>
            
            
          </form>
        </div>
      </div>
      )}
    </>
  )
}
