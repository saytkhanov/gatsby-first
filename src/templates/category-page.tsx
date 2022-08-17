import React from "react";
import Layout from "../components/Layout";
import BlogPosts from "../components/BlogPosts";
import { TypePost } from "../utils/types";

interface SinglePostProps {
  pageContext: {
    postsForCategory: TypePost[];
  };
}

const SinglePost = (props: SinglePostProps): React.ReactElement => {
  const { pageContext } = props;
  const { postsForCategory } = pageContext;

  return (
    <Layout>
      <BlogPosts posts={postsForCategory} />
    </Layout>
  );
};

export default SinglePost;
