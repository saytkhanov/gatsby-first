import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { ItemCardProps } from "../utils/types";
import {GatsbyImage} from "gatsby-plugin-image";

interface SinglePostProps {
  data: ItemCardProps;
}

const SinglePost = ({ data }: SinglePostProps): React.ReactElement => {
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
  query SinglePostQuery($slug: String) {
    post: datoCmsPost(slug: { eq: $slug }) {
        body
        originalId
        featured
        category {
            originalId
            name
        }
        coverImage {
            url
            gatsbyImageData(
                width: 640
                placeholder: BLURRED
                forceBlurhash: false
                imgixParams: {invert: false}
            )
        }
        typeofpost {
            name
        }
        title
        slug
        meta {
            createdAt(formatString: "DD MMM YYYY")
        }
    }
  }
`;

export default SinglePost;
