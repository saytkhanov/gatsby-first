import { GatsbyNode } from "gatsby";
const path = require('path');


type ResultData = {
        allDatoCmsPost: {
            nodes: {
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
                slug: string
            } []
        }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { data } = await graphql<ResultData>(`
    query CreatePageQuery {
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
                meta {
                    createdAt
                }
                slug
            }
        }
}
  `)

    data?.allDatoCmsPost.nodes.forEach((post) => {
        const { slug, category } = post;
        actions.createPage({
            path: `/${category.name}/${slug}`,
            component: path.resolve('./src/templates/single-post.tsx'),
            context: {
                slug
            }
        })
    })

}