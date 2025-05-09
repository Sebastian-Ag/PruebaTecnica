import { useEffect, useState } from 'react';
import PostsList from '../components/postsList';
import UsePostStore from '../store/usePostStore';
import UseUserStore from '../store/useUserStore';
import { HiOutlineSearch } from "react-icons/hi";
import SearchBar from '../components/searchBar';

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
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por nombre"
      />
      <PostsList posts={filteredPosts} />
    </div>
      
    </>
  );
}
