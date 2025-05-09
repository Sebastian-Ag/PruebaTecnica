import { create } from 'zustand';
import axios from 'axios';

const usePostStore = create((set)=>({
    posts: [],
    fetchPosts: async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        set({ posts: res.data });
    },
    addPost: (newPost) => 
        set((state) =>({
            posts:[
                {
                    ...newPost,
                    id: state.posts.length + 1,
                    userId: 1,
                },
                ...state.posts,
            ],
        })),
}))
export default usePostStore;