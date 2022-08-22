import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import { TypePost } from "../utils/types";
import {GatsbyImage} from "gatsby-plugin-image";

interface Params {
    data: {
        posts: {
            nodes: TypePost[];
        };
    };
}

const FooterCards = (): React.ReactElement => {
    const { posts } = useStaticQuery(graphql`
        query {
            posts: allDatoCmsPost(limit: 8) {
                nodes {
                    body
                    category {
                        name
                        originalId
                    }
                    featured
                    id
                    meta {
                        createdAt(formatString: "MMMM D, YYYY")
                    }
                    title
                    slug
                    typeofpost {
                        name
                    }
                    coverImage {
                        url
                        gatsbyImageData(
                            width: 640
                            placeholder: BLURRED
                            forceBlurhash: false
                            imgixParams: { invert: false }
                        )
                    }
                }
            }
        }
    `);

   console.log(posts)
    return (
        <div className="w-[980px] mx-auto mt-16">
            <h1 className="text-2xl md:text-3xl md:text-4xl font-eina font-bold">
                 More from NewsRoom
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex-row mt-10">
                {posts.nodes.map((item: any) => {
                    return (
                        <div className="flex flex-col md:flex-row">
                           <div className="w-[132px]">
                               <GatsbyImage alt={item.title} image={item.coverImage.gatsbyImageData} />
                           </div>
                            <div>
                                {item.title}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default FooterCards;