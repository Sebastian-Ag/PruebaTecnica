import React from "react";
import UseAlbumStore from "../store/useAlbumStore";

const AlbumCard = ({ album }) => {
    const { fetchPhotos } = UseAlbumStore();
  return (
    <div
      className="bg-gradient-to-br from-white via-gray-200 to-purple-200 shadow-md hover:shadow-xl rounded-xl p-5 flex flex-col items-center justify-center border-l-5  border-purple-950 group cursor-pointer min-h-[200px] transition-all transform hover:scale-105"
      onClick={() => fetchPhotos(album.id)}
    >
      <h3 className="text-lg font-bold text-gray-800 group-hover:text-black text-center transition-colors duration-300">
        {album.title}
      </h3>
      <p className="text-gray-600 text-sm group-hover:text-gray-700 mt-1 transition-colors">
        Creado por usuario {album.userId}
      </p>
      <span className="text-base font-semibold text-purple-800 mt-2 group-hover:text-purple-950 transition-colors duration-300">
        {album.id} Álbumes
      </span>
    </div>
  );
};

export default AlbumCard;
