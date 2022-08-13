import React from "react";
import ItemCard from "./ItemCard";
import CategoryFilter from "./CategoryFilter";
import { TypePost } from "../utils/types";

interface BlogPostsProps {
  posts: TypePost[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {

  return (
    <div>
      <CategoryFilter />
      {posts.map((post) => {
        return <ItemCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default BlogPosts;
