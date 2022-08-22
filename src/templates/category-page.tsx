import React from "react";
import Layout from "../components/Layout";
import BlogPosts from "../components/BlogPosts";
import {TypeCategory, TypePost} from "../utils/types";
import {graphql} from "gatsby";

interface SinglePostProps {
  pageContext: {
    categoryTitle: string;
      posts: {
          nodes: TypePost[]
      }
  };
  data: {
      posts: {
          nodes: TypePost[]
      }
  }
}

const CategoryPage = (props: SinglePostProps): React.ReactElement => {
  const { pageContext, data } = props;
  const { categoryTitle, posts } = pageContext;

  const postsForCategory = posts.nodes.filter((post: TypePost) =>
      post.category.some(
          (categories) => categories.name === categoryTitle
      )
  );
  console.log(postsForCategory)
   return (
    <Layout>
      <BlogPosts posts={postsForCategory} />
    </Layout>
);
};

export const query = graphql`
    query {
        posts: allDatoCmsPost {
            nodes {
                body
                category {
                    name
                }
                id
                coverImage {
                    gatsbyImageData(
                        width: 640
                        placeholder: BLURRED
                        forceBlurhash: false
                        imgixParams: {invert: false}
                    )
                }
                slug
                title
                meta {
                    createdAt
                }
                typeofpost {
                    name
                }
            }
        }
    }
`;

export default CategoryPage;
