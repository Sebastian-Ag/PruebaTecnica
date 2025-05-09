import React, {useEffect} from 'react'
import UseAlbumStore from '../store/useAlbumStore';
import UseUserStore from '../store/useUserStore';
import UsePostStore from '../store/usePostStore';
import Dashboard from '../components/dashboard';

export default function Home() {
  const { Users, fetchUsers } = UseUserStore();
  const { posts, fetchPosts } =   UsePostStore();
  const { album, fetchAlbum } = UseAlbumStore();
  useEffect(() => {
    if (Users.length === 0) fetchUsers();
    if (posts.length === 0) fetchPosts();
    if (album.length === 0) fetchAlbum();
  }, []);
  return (
      <Dashboard
        users={Users}
        posts={posts}
        albums={album}
      />
  )
}
