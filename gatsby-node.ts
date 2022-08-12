import { GatsbyNode } from "gatsby";
const path = require("path");

const postTemplate = path.resolve("./src/templates/single-post.tsx");
const categoryTemplate = path.resolve("./src/templates/category-page.tsx");

type SingleResultData = {
  posts: {
    nodes: {
      // coverImage: {
      //   url: string;
      // };
      // body: string;
      category: {
        name: string;
        id: string;
      };
      slug: string;
      // title: string;
      // typeofpost: {
      //   name: string;
      // };
      // id: string;
      // meta: {
      //   createdAt: string;
      // };
    }[];
  };
  categories: {
    nodes: {
      name: string;
      id: string;
    }[];
  };
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  return graphql<SingleResultData>(`
    query PostQuery {
      posts: allDatoCmsPost {
        nodes {
          title
          slug
          category {
            id
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
  `).then((results) => {
    if (results.errors) {
      throw results.errors;
    }
    const { posts, categories }: any = results.data;

    posts.nodes.forEach((post: any, index: number) => {
      const previous =
        index === posts.nodes.length - 1 ? null : posts.nodes[index + 1];
      const next = index === 0 ? null : posts.nodes[index - 1];
      createPage({
        path: `${post.slug}`,
        component: postTemplate,
        context: {
          slug: post.slug,
          previous,
          next,
        },
      });
    });

    categories.nodes.forEach((category: any) => {
      createPage({
        path: `/categories/${category.name.toLowerCase()}`,
        component: categoryTemplate,
        context: {
          categoryTitle: category.name,
          posts,
        },
      });
    });
  });
};
