import React from 'react';
import Post from './Post';

const PostList = ({ posts, addComment }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} post={post} addComment={addComment} />
      ))}
    </div>
  );
};

export default PostList;
