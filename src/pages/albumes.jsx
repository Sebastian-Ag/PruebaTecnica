import React, { useEffect } from "react";
import  useAlbumsStore  from "../store/useAlbumStore";
import AlbumList from "../components/albumList";
import PhotoModal from "../components/photoModal";
const Albumes = () => {
  const { fetchAlbum, photos, selectedAlbumId, clearSelectedAlbum } = useAlbumsStore();

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-2 ml-4 text-white">Álbumes</h2>
      <AlbumList />
      {selectedAlbumId && (
        <PhotoModal photos={photos} onClose={clearSelectedAlbum} />
      )}
    </div>
  );
};

export default Albumes;