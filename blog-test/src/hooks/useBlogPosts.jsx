import { useState, useEffect } from 'react';
import { PUBLISHED_POSTS } from '../posts';

const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await Promise.all(
        Object.entries(PUBLISHED_POSTS).map(async ([fileName, post]) => {
          const response = await fetch(`/posts/${fileName}`);
          const blogContent = await response.text();

          return {
            blogTitle: post.title,
            blogContent,
            blogFileName: fileName,
            blogAbstraction: post.abstraction,
            blogPublishedAt: post.publishedAt,
          };
        })
      );

      setBlogPosts(posts);
    };

    getPosts();
  }, []);

  return blogPosts;
};

export default useBlogPosts;
