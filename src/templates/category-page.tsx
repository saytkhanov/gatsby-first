import React from "react";
import Layout from "../components/Layout";
import BlogPosts from "../components/BlogPosts";
import { TypeCategory, TypePost } from "../utils/types";

interface SinglePostProps {
  pageContext: {
    categoryTitle: string;
    posts: {
      nodes: TypePost[];
    };
  };
}

const SinglePost = (props: SinglePostProps): React.ReactElement => {
  const { pageContext } = props;
  const { categoryTitle, posts } = pageContext;

  const postsForCategory = posts.nodes.filter((post: TypePost) =>
    post.category.some(
      (category: TypeCategory) => category.name === categoryTitle
    )
  );

  return (
    <Layout>
      <BlogPosts posts={postsForCategory} />
    </Layout>
  );
};

export default SinglePost;
