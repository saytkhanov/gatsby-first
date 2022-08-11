import * as React from "react"
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";


interface Param {
    id: string;
    title: string;
    category: {
        name: string;
    }
    typeofpost: {
        name: string;
    }
    slug: string
    meta: {
        createdAt: string
    }
}

interface P {
    data: {
        posts: {
            nodes: Param[]
        }
    }
}

const Home = ({data}: P): React.ReactElement => {
    const { nodes } = data.posts;

    return (
        <Layout>
            <div>
                {nodes.map((post) => {
                    const { category, slug, meta, id } = post;
                    return(
                        <Link key={id} to={`/${category.name}/${slug}`}>
                            <h1>{meta.createdAt}</h1>
                        </Link>
                    )
                })}
            </div>
         </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        posts: allDatoCmsPost {
            nodes {
                id
                title
                category {
                    name
                }
                typeofpost {
                    name
                }
                slug
                meta {
                    createdAt
                }
            }
        }
    }
`

export default Home;
