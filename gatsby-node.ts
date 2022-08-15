import { GatsbyNode } from "gatsby";
import { TypeCategory } from "./src/utils/types";
const path = require("path");

const postTemplate = path.resolve("./src/templates/single-post.tsx");
const categoryTemplate = path.resolve("./src/templates/category-page.tsx");

type SingleResultData = {
  posts: {
    nodes: {
      category: TypeCategory[];
      slug: string;
    }[];
  };
  categories: {
    nodes: TypeCategory[];
  };
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
          body
          category {
            name
            originalId
          }
          featured
          originalId
          meta {
            createdAt(formatString: "MMMM D, YYYY")
          }
          title
          slug
          typeofpost {
            name
          }
          coverImage {
            url
            gatsbyImageData(
              width: 640
              placeholder: BLURRED
              forceBlurhash: false
              imgixParams: { invert: false }
            )
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
