import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      imageUrl,
      description,
      comments: []
    };
    addPost(newPost);
    setImageUrl('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
