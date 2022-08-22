import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BlogPosts from "../components/BlogPosts";
import {PaginationProps, TypePost} from "../utils/types";
import Carousel from "../components/Carousel";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import FooterCards from "../components/FooterCards";

interface Params {
    data: {
        posts: {
            nodes: TypePost[];
        };
    };
    pageContext: PaginationProps
}

const FrontPage = ({ data, pageContext}: Params): React.ReactElement => {

    return (
        <>
            <Layout>
                <CategoryFilter />
                <h1 className="text-2xl md:text-3xl md:text-4xl font-eina font-bold">
                    Latest News
                </h1>
                <div className="mt-4">
                    <BlogPosts posts={data.posts.nodes} />
                </div>
                <Pagination pageContext={pageContext} />
            </Layout>
            <div className='bg-black mt-16 h-[500px] md:h-[640px] lg:h-[846px]'>
                <Carousel />
            </div>
            <div>
                <FooterCards />
            </div>
        </>
    );
};

export const query = graphql`
    query($skip: Int = 0, $pageSize: Int = 9) {
        posts: allDatoCmsPost(limit: $pageSize, skip: $skip) {
            nodes {
                body
                category {
                    id
                    name
                }
                featured
                meta {
                    createdAt(formatString: "MMMM D, YYYY")
                }
                title
                slug
                typeofpost {
                    name
                }
                coverImage {
                    gatsbyImageData(
                        width: 640
                        placeholder: BLURRED
                        forceBlurhash: false
                        imgixParams: {invert: false}
                    )
                }
                id
            }
        }
    }
`;

export default FrontPage;