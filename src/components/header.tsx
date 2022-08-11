import React from 'react';
import { graphql, useStaticQuery, Link } from "gatsby";

interface Category {
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
    `)

    return (
        <div>
            {result.allDatoCmsCategory.nodes.map((category: Category) => (
                <Link to={category.name} key={category.originalId}>
                    {category.name}
                </Link>
            ))}
        </div>
    );
};



export default Header;