import React from 'react';
import { graphql, useStaticQuery, Link } from "gatsby";

interface CategoryProps {
    name: string
    originalId: string
}

const Header = () => {
  const result = useStaticQuery(graphql`
    query CategoryQuery {
      allDatoCmsCategory {
        nodes {
          name
          originalId
        }
      }
    }
  `);

  return (
    <div>
      {/*{result.allDatoCmsCategory.nodes.map((category: CategoryProps) => (*/}
      {/*  <Link to={`/${category.name}`} key={category.originalId}>*/}
      {/*    {category.name}*/}
      {/*  </Link>*/}
      {/*))}*/}
    </div>
  );
};



export default Header;