import { useState, useEffect } from 'react';
import { PUBLISHED_POSTS } from '../posts';

const useBlogPost = (fileName) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const post = PUBLISHED_POSTS[fileName];

      const blogTitle = post.title;
      const blogFileName = fileName;
      const blogAbstraction = post.abstraction;
      const blogPublishedAt = post.publishedAt;
      const response = await fetch(`/posts/${blogFileName}`);
      const blogContent = await response.text();

      setPost({
        blogTitle,
        blogContent,
        blogFileName,
        blogAbstraction,
        blogPublishedAt,
      });
    };

    getPost();
  }, [fileName]);

  return post;
};

export default useBlogPost;
