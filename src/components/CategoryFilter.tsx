import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const getCategories = (posts: any) => {
  return posts.map((post: any) => post.category).flat();
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
      <ul className='flex'>
      {categories.map((item: any) => {
        return (
          <Link key={item.id} to={`/categories/${item.name.toLowerCase()}`}>
                <li className='mr-4'>
                  {item.name}
                </li>
          </Link>
        );
      })}
      </ul>
    </div>
  );
};

export default CategoryFilter;
