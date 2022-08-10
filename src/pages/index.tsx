import * as React from "react"
import {graphql} from "gatsby";

type Params = {
    allDatoCmsPost: {
        nodes: Nodes[]
    }
}

interface Nodes {
    title: string;
    id: string;
    category: {
        name: string;
    }
    typeofpost: {
        name: string;
    }
    created: string;
}

const Home = (data: Params) => {
    return (
        <div>
            {data.allDatoCmsPost.nodes.map((item) => item.title)}
        </div>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsPost {
            nodes {
                title
                id
                category {
                    name
                }
                typeofpost {
                    name
                }
                created
            }
        }
    }
`

export default Home;
