import React from "react";
import useAlbumsStore  from "../store/useAlbumStore";
import AlbumCard from "./albumCard";

const AlbumList = () => {
  const { album } = useAlbumsStore();

  return (
    <div className="text-white grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {album.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};

export default AlbumList;