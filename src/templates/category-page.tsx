// import React from 'react';
// import Layout from "../components/layout";
// import {graphql} from "gatsby";
//
// interface Param {
//     id: string;
//     title: string;
//     category: {
//         name: string;
//     }
//     typeofpost: {
//         name: string;
//     }
//     meta: {
//         createdAt: string
//     }
// }
//
// interface P {
//     data: {
//         posts: {
//             nodes: Param[]
//         }
//     }
// }
//
// const CategoryPage = ({data}: P): React.ReactElement => {
//     return (
//         <Layout>
//             <div>{data.posts.nodes.map((item) => item.title)}</div>
//         </Layout>
//     );
// };
//
// export const query = graphql`
//     query PostQuery {
//         posts: allDatoCmsPost {
//             nodes {
//                 title
//                 id
//                 category {
//                     name
//                 }
//                 typeofpost {
//                     name
//                 }
//                 meta {
//                     createdAt
//                 }
//             }
//         }
//     }
// `
//
// export default CategoryPage;