import React from "react";
import ItemCard from "./ItemCard";
import CategoryFilter from "./CategoryFilter";

interface Props {
    id: string
    title: string
    slug: string
}

const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <div>
      <CategoryFilter />
      {posts.map((post: Props) => {
        return <ItemCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default BlogPosts;
