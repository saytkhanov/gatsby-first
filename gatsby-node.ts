import { Actions, GatsbyNode } from "gatsby";
import { ItemCardProps, TypeCategory, TypePost } from "./src/utils/types";
const path = require("path");

const postTemplate = path.resolve("./src/templates/single-post.tsx");
const categoryTemplate = path.resolve("./src/templates/category-page.tsx");
const frontTemplate = path.resolve("./src/templates/front-page.tsx");

// Posts pagination
const createPostsPagination = (
  createPage: Actions["createPage"],
  posts: { nodes: TypePost[] }
) => {
  const { nodes } = posts;

  // Create blog post list pages
  const postsPerPage = 9;
  const numPages = Math.ceil(nodes.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page/${i + 1}`,
      component: frontTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

type SingleResultData = {
  posts: {
    nodes: TypePost[];
  };
  categories: TypeCategory[];
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
            name
          }
          slug
        }
      }
      categories: allDatoCmsCategory {
        nodes {
          name
        }
      }
    }
  `);

  const { posts, categories }: any = result.data;

  posts.nodes.forEach((post: TypePost) => {
    createPage({
      path: `${post.slug}`,
      component: postTemplate,
      context: {
        slug: post.slug,
      },
    });
  });

  createPostsPagination(createPage, posts);

  categories.nodes.forEach((category: { name: string }) => {
    createPage({
      path: `/categories/${category.name.toLowerCase()}`,
      component: categoryTemplate,
      context: {
        categoryTitle: category.name,
        posts,
      },
    });
  });
};
