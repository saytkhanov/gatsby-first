import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { ItemCardProps } from "../utils/types";

interface SinglePostProps {
  data: ItemCardProps;
  pageContext: {
    slug: string;
  };
}

const SinglePost = (props: SinglePostProps): React.ReactElement => {
  const { data, pageContext } = props;
  const { post } = data;

  return (
    <Layout>
      <h4>{post.typeofpost.name}</h4>
      <h1>{post.title}</h1>
      <h5>{post.meta.createdAt}</h5>
    </Layout>
  );
};

export const query = graphql`
  query SinglePostQuery($slug: String) {
    post: datoCmsPost(slug: { eq: $slug }) {
      slug
      title
      category {
        name
      }
      body
      coverImage {
        url
      }
      meta {
        createdAt(formatString: "M MMM YYYY")
      }
      typeofpost {
        name
      }
      id
    }
  }
`;

export default SinglePost;
