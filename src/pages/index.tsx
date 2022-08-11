import * as React from "react"
import {graphql} from "gatsby";
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
    return (
        <Layout>
            {data.posts.nodes.map((item) => <h1 key={item.id}>{item.meta.createdAt}</h1>)}
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        posts: allDatoCmsPost {
            nodes {
                title
                id
                category {
                    name
                }
                typeofpost {
                    name
                }
                meta {
                    createdAt
                }
            }
        }
    }
`

export default Home;
