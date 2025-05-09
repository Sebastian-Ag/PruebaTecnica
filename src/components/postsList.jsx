import React from 'react';
import PostForm from './postForm'
import { HiOutlineChatAlt } from "react-icons/hi";

export default function PostsList({posts}) {
  
  return (
    <div>
       <PostForm />
        {posts.map(post => (
          <div key={post.id} className="p-4 mb-2 bg-white text-black shadow-lg hover:shadow-2xl rounded-2xl transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-lg font-medium text-purple-950 flex items-center">
              <HiOutlineChatAlt className="mr-2 text-xl" />
                {post.title}
              </h2>
              <p className='text-black'>{post.body}</p>
              
          </div>
    ))}
  </div>
  );
}
