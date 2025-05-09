import React from 'react';
import { HiUsers, HiDocumentText, HiCollection } from 'react-icons/hi';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard({ users, posts, albums }) {
    const postCountByUser = users.map(user =>{
        const userPosts = posts.filter(p => p.userId === user.id).length;
        return { name: user.name.split(' ')[0], posts: userPosts };
    });
  return (
    <div className="min-h-screen  text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard General</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center gap-4">
          <HiUsers className="text-4xl text-purple-400" />
          <div>
            <p className="text-sm">Usuarios</p>
            <p className="text-2xl font-bold">{users.length}</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center gap-4">
          <HiDocumentText className="text-4xl text-green-400" />
          <div>
            <p className="text-sm">Publicaciones</p>
            <p className="text-2xl font-bold">{posts.length}</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center gap-4">
          <HiCollection className="text-4xl text-blue-400" />
          <div>
            <p className="text-sm">Álbumes</p>
            <p className="text-2xl font-bold">{albums.length}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Publicaciones por Usuario</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={postCountByUser}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="posts" fill="#6d28d9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
