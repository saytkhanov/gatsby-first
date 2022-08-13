import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BlogPosts from "../components/BlogPosts";
import { TypePost } from "../utils/types";

interface Params {
  data: {
    posts: {
      nodes: TypePost[];
    };
  };
}

const Home = ({ data }: Params): React.ReactElement => {
  return (
    <Layout>
      <div>
        <BlogPosts posts={data.posts.nodes} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    posts: allDatoCmsPost {
      nodes {
        id
        title
        category {
          id
          name
        }
        typeofpost {
          name
        }
        slug
        meta {
          createdAt(formatString: "M MMM YYYY")
        }
        originalId
        featured
        body
        coverImage {
          url
        }
      }
    }
  }
`;

export default Home;
