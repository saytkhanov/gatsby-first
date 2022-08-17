import React from "react";
import Layout from "../components/Layout";
import { TypePost } from "../utils/types";
import { GatsbyImage } from "gatsby-plugin-image";

interface SinglePostProps {
  pageContext: {
      post: TypePost,
      slug: string
  };
}

const SinglePost = ({ pageContext }: SinglePostProps): React.ReactElement => {
  const { post } = pageContext;

  return (
    <Layout>
      <h4>{post.typeofpost.name}</h4>
      <h1>{post.title}</h1>
      <h5>{post.meta.createdAt}</h5>
      <GatsbyImage alt={post.title} image={post.coverImage.gatsbyImageData} />
    </Layout>
  );
};

export default SinglePost;
