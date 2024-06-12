import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Post = ({ post, addComment }) => {
  return (
    <div className="post">
      <img src={post.imageUrl} alt="Post" />
      <p>{post.description}</p>
      <CommentForm postId={post.id} addComment={addComment} />
      <CommentList comments={post.comments} />
    </div>
  );
};

export default Post;
