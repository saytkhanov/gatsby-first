import React from 'react';
import {graphql} from "gatsby";

interface SinglePost {
    datoCmsPost: {
        id: string
        title: string,
        typeofpost: {
            name: string
        }
        meta: {
            createdAt: string
        }
        category: {
            name: string
        }
        slug: string
    }
}

const SinglePost = ({ datoCmsPost }: SinglePost): React.ReactElement => {
    console.log(datoCmsPost)
     return (
        <div>
            ;wddwdw
        </div>
    );
};

export const query = graphql`
    query SinglePostQuery($slug: String) {
        datoCmsPost(slug: {eq: $slug}) {
            title
            id
            meta {
                createdAt
            }
            category {
                name
            }
            typeofpost {
                name
            }
            slug
        }
    }
`;

export default SinglePost;