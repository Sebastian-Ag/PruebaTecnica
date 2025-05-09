
import { create } from 'zustand';
import axios from 'axios';

const useUserStore = create((set)=>({
    Users: [],
    fetchUsers: async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        set({ Users: res.data });
    },
    deleteUser: (id) => {
        set((state) => ({
          Users: state.Users.filter((user) => user.id !== id), 
        }));
      },
      editUser: (id, updatedUser) => {
        set((state) => ({
          Users: state.Users.map((user) =>
            user.id === id ? { ...user, ...updatedUser } : user
          ),
        }));
    },
}));
export default useUserStore;