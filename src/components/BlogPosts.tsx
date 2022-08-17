import React from "react";
import ItemCard from "./ItemCard";
import { TypePost } from "../utils/types";

interface BlogPostsProps {
  posts: TypePost[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
      {posts.map((post) => {
        return <ItemCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default BlogPosts;
