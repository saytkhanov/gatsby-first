import React from "react";
import ItemCard from "./ItemCard";
import { TypePost } from "../utils/types";

interface BlogPostsProps {
  posts: TypePost[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {

  return (
    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-9">
      {posts.map((post) => {
        return <ItemCard key={post.originalId} post={post} />;
      })}
    </div>
  );
};

export default BlogPosts;
