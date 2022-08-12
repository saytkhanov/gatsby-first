import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const getCategories = (posts: any) => {
  const catCounts = posts.map((post: any) => post.category).flat();
  return catCounts;
};

const CategoryFilter = () => {
  const { posts } = useStaticQuery(graphql`
    query {
      posts: allDatoCmsPost {
        nodes {
          category {
            id
            name
          }
        }
      }
    }
  `);
  const categories = getCategories(posts.nodes);
  return (
    <div>
      {categories.map((item: any) => {
        return (
          <Link key={item.id} to={`/categories/${item.name.toLowerCase()}`}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
