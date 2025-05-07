
import { create } from 'zustand';
import axios from 'axios';

const useUserStore = create((set)=>({
    Users: [],
    fetchUsers: async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        set({ Users: res.data });
    },
    deleteUser: async (id) =>{
        set((state)=>({
            users: state.Users.filter((user) => user.id !== id)
        }))
    },
    editUser: async (id, updatedUser) =>{
        set((state) => ({
            users: state.users.map((user) =>
              user.id === id ? { ...user, ...updatedUser } : user
            ),
          }));
    }
}));
export default useUserStore;