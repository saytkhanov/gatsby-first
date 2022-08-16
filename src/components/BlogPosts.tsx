import React from "react";
import ItemCard from "./ItemCard";
import { TypePost } from "../utils/types";

interface BlogPostsProps {
  posts: TypePost[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {

  return (
    <div className="grid-columns">
      {posts.map((post) => {
        return <ItemCard key={post.originalId} post={post} />;
      })}
    </div>
  );
};

export default BlogPosts;
