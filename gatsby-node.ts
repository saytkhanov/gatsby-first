import { GatsbyNode } from "gatsby";
const path = require('path');


type ResultData = {
    allDatoCmsCategory: {
        nodes: {
            name: string,
            url: string
        } []
    }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { data } = await graphql<ResultData>(`
    query CreatePageQuery {
       allDatoCmsCategory {
       nodes {
      name
      url
    }
  }
}
  `)
    data?.allDatoCmsCategory.nodes.map((category) => {
        const { url } = category;
        actions.createPage({
            path: `/${url}`,
            component: path.resolve('./src/templates/category-page.tsx'),
            context: {}
        })
    })

}