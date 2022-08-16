import { GatsbyNode } from "gatsby";
import { TypeCategory, TypePost } from "./src/utils/types";
const path = require("path");

const postTemplate = path.resolve("./src/templates/single-post.tsx");
const categoryTemplate = path.resolve("./src/templates/category-page.tsx");

type SingleResultData = {
  posts: {
    nodes: TypePost[]
  };
  categories: TypeCategory[]
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const result = await graphql<SingleResultData>(`
    query PostQuery {
      posts: allDatoCmsPost {
        nodes {
          category {
            id
            name
          }
          slug
          body
          coverImage {
            gatsbyImageData(
              width: 640
              placeholder: BLURRED
              forceBlurhash: false
              imgixParams: { invert: false }
            )
            url
          }
          featured
          id
          meta {
            createdAt
          }
          title
          typeofpost {
            name
          }
        }
      }
      categories: allDatoCmsCategory {
        nodes {
          id
          name
        }
      }
    }
  `);

  const { posts, categories }: any = result.data;

  posts.nodes.forEach((post: { slug: string }) => {
    createPage({
      path: `${post.slug}`,
      component: postTemplate,
      context: {
        slug: post.slug,
      },
    });
  });

  categories.nodes.forEach((category: { name: string }) => {
    const postsForCategory = posts.nodes.filter((post: TypePost) =>
      post.category.some(
        (categories: TypeCategory) => categories.name === category.name
      )
    );
    createPage({
      path: `/categories/${category.name.toLowerCase()}`,
      component: categoryTemplate,
      context: {
        postsForCategory,
      },
    });
  });
};
