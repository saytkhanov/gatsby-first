import * as React from "react";
import { graphql } from "gatsby";
import { TypePost } from "../utils/types";

interface Params {
    data: {
        posts: {
            nodes: TypePost[];
        };
    };
}

const FooterCards = ({ data }: Params): React.ReactElement => {
    return (
        <div>

        </div>
    );
};

export const query = graphql`
    query CardsQuery {
        posts: allDatoCmsPost {
            nodes {
                body
                category {
                    name
                    originalId
                }
                featured
                originalId
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
`;

export default FooterCards;