import { useEffect, useState } from 'react';
import PostsList from '../components/postsList';
import UsePostStore from '../store/usePostStore';
import UseUserStore from '../store/useUserStore';
import { HiOutlineSearch } from "react-icons/hi";

export default function Posts() {
  const { posts, fetchPosts } = UsePostStore();
  const { Users, fetchUsers } = UseUserStore();
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);
  useEffect(()=>{
    if(!search.trim()){
      const postList = posts.map(post =>{
        const user = Users.find(u => u.id === post.userId);
        return {
          ...post,
          userName: user ? user.name : 'Unknown User',
        };
      });
      setFilteredPosts(postList);
      return;
    }
    const searchUser = Users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
    if (searchUser.length === 0) {
      const postList = posts.map(post => {
        const user = Users.find(u => u.id === post.userId);
        return {
          ...post,
          userName: user ? user.name : 'Unknown User',
        };
      });
      setFilteredPosts(postList);
      return;
    }
    const userIds = searchUser.map(user => user.id);
    const filtered = posts.filter(post => userIds.includes(post.userId)).map(post =>{
      const user = Users.find(u => u.id === post.userId);
      return {
        ...post,
        userName: user ? user.name : 'Unknown User',
      };
    });
    setFilteredPosts(filtered);
  },[posts, Users, search])
  
  return (
    <>
      <div className="px-2 sm:px-6 md:px-8">
          <div className="max-w-md mx-auto">
            <div className="relative mb-0">
              <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre"
                className="w-full pl-10 pr-3 py-2 rounded-2xl border border-gray-700 bg-black text-white placeholder-gray-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>          
          </div>
          <PostsList posts={filteredPosts}/>
        </div>
      
    </>
  );
}
