
import { create } from 'zustand';
import axios from 'axios';

const useUserStore = create((set)=>({
    Users: [],
    fetchUsers: async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        set({ Users: res.data });
    },
}));
export default useUserStore;