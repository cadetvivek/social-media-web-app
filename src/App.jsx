import React, { useState, useEffect } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';

const App = () => {
  const [posts, setPosts] =    useState(JSON.parse(localStorage.getItem('posts'))||[]);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const addComment = (postId, comment) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    ));
  };

  return (
    <div className="App">
      <h1>Social Media App</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} addComment={addComment} />
    </div>
  );
};


export default App;
