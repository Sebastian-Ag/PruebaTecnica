import React from "react";
import noImage from "../assets/no_image.svg";

export default function PhotoModal({ photos, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-gray-900/50 flex items-center justify-center p-4"onClick={onClose}>
      <div className="bg-white text-black p-6 rounded shadow-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end">
          <button onClick={onClose} className="text-2xl font-semibold group hover:font-bold">&times;</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {photos.map((photo) => (
            <div key={photo.id} className="flex flex-col items-center">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-auto object-cover rounded shadow"
                onError={(e) => {
                  e.target.src = noImage;
                }}
              />
               <p className="text-sm text-center mt-2">{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
