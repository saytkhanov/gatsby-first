// import * as React from "react";
// import { graphql } from "gatsby";
// import Layout from "../components/Layout";
// import BlogPosts from "../components/BlogPosts";
// import { TypePost } from "../utils/types";
// import Carousel from "../components/Carousel";
// import CategoryFilter from "../components/CategoryFilter";
//
// interface Params {
//   data: {
//     posts: {
//       nodes: TypePost[];
//     };
//   };
// }
//
// const Home = ({ data }: Params): React.ReactElement => {
//
//   return (
//       <>
//     <Layout>
//       <CategoryFilter />
//       <h1 className="text-2xl md:text-3xl md:text-4xl font-eina font-bold">
//         Latest News
//       </h1>
//       <div className="mt-4">
//         <BlogPosts posts={data.posts.nodes} />
//       </div>
//     </Layout>
//         <div className='bg-black mt-16 md:h-[640px] lg:h-[846px]'>
//           <Carousel />
//         </div>
//         </>
//   );
// };
//
// export const query = graphql`
//   query MyQuery {
//     posts: allDatoCmsPost {
//       nodes {
//         body
//         category {
//           name
//           originalId
//         }
//         featured
//         originalId
//         meta {
//           createdAt(formatString: "MMMM D, YYYY")
//         }
//         title
//         slug
//         typeofpost {
//           name
//         }
//         coverImage {
//           url
//           gatsbyImageData(
//             width: 640
//             placeholder: BLURRED
//             forceBlurhash: false
//             imgixParams: { invert: false }
//           )
//         }
//       }
//     }
//   }
// `;
//
// export default Home;
