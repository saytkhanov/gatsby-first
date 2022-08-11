import { GatsbyNode, PageProps } from "gatsby";


type ResultData = {
        allDatoCmsCategory: {
            nodes: {
                name: string,
                originalId: string,
                url: string
            } []
        }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { data } = await graphql<ResultData>(`
    query MyQuery {
  allDatoCmsCategory {
    nodes {
      name
      originalId
      url
    }
  }
}
  `)
    console.log(data.allDatoCmsCategory)
    data.allDatoCmsCategory.nodes.map((category) => {
        const { url } = category;
        actions.createPage({
            path: `/${url}`,
            component: require.resolve('./src/templates/category-page.js'),
            context: { url }
        })
    })

}
