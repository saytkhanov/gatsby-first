import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ItemCard from "../components/ItemCard";

interface SinglePostProps {
  data: {
    post: {
      id: string;
      title: string;
      typeofpost: {
        name: string;
      };
      body: string;
      meta: {
        createdAt: string;
      };
      category: {
        name: string;
      };
      slug: string;
      coverImage: {
        url: string;
      };
    };
  };
  pageContext: any;
}

const SinglePost = (props: SinglePostProps): React.ReactElement => {
  const { data, pageContext } = props;
  const { post } = data;

  const { previous, next } = pageContext;
  return (
    <Layout>
      <h4>{post.typeofpost.name}</h4>
      <h1>{post.title}</h1>
      <h5>{post.meta.createdAt}</h5>
      {previous && <ItemCard post={previous} />}
      {next && <ItemCard post={next} />}
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
        gatsbyImageData(width: 500, height: 300, aspectRatio: 1)
      }
      meta {
        createdAt
      }
      typeofpost {
        name
      }
      id
    }
  }
`;

export default SinglePost;
