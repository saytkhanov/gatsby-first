import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { TypeCategory } from "../utils/types";

const CategoryFilter = () => {
  const { categories } = useStaticQuery(graphql`
    query {
      categories: allDatoCmsCategory {
        nodes {
          id
          name
        }
      }
    }
  `);

  return (
    <div>
      <ul className="flex">
        {categories.nodes.map((item: TypeCategory) => {
          return (
            <Link key={item.id} to={`/categories/${item.name.toLowerCase()}`}>
              <li className="mr-4">{item.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryFilter;
