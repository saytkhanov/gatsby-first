import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { TypePost } from "../utils/types";

const getCategories = (posts: TypePost[]) => {
  return posts.map((post) => post.category).flat();
};

const CategoryFilter = () => {
  const { posts } = useStaticQuery(graphql`
    query {
      posts: allDatoCmsPost {
        nodes {
          category {
            originalId
            name
          }
        }
      }
    }
  `);

  const categories = getCategories(posts.nodes);

  return (
    <div>
      <ul className="flex">
        {categories.map((item: any) => {
          return (
            <Link key={item.originalId} to={`/categories/${item.name.toLowerCase()}`}>
              <li className="mr-4">{item.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryFilter;
