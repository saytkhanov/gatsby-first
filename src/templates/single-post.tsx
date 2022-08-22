import React from "react";
import Layout from "../components/Layout";
import { TypePost } from "../utils/types";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

interface SinglePostProps {
  data: {
    post: TypePost;
  };
}

const SinglePost = (props: SinglePostProps): React.ReactElement => {
  const { data } = props;
  const { post } = data;

  return (
    <Layout>
      <h4>{post.typeofpost.name}</h4>
      <h1>{post.title}</h1>
      <h5>{post.meta.createdAt}</h5>
      <GatsbyImage alt={post.title} image={post.coverImage.gatsbyImageData} />
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    post: datoCmsPost(slug: { eq: $slug }) {
      body
      category {
        name
      }
      featured
      id
      meta {
        createdAt
      }
      slug
      title
      typeofpost {
        name
      }
      coverImage {
        gatsbyImageData(
          width: 640
          placeholder: BLURRED
          forceBlurhash: false
          imgixParams: { invert: false }
        )
      }
    }
  }
`;

export default SinglePost;
