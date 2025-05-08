import { create } from 'zustand';
import axios from 'axios';

const UseAlbumStore = create((set) =>({
    album:[],
    photos:[],
    selectedAlbumId: null,
    fetchAlbum: async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/albums');
        set({ album: res.data });
    },
    fetchPhotos: async (albumId) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
        set({ photos: res.data, selectedAlbumId: albumId });
    },
    clearSelectedAlbum: () => {
      set({ selectedAlbumId: null, photos: [] });
    }
}))
export default UseAlbumStore;