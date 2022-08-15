import React from "react";
import { Link } from "gatsby";
import { ItemCardProps } from "../utils/types";
import { GatsbyImage } from "gatsby-plugin-image";

const ItemCard = ({ post }: ItemCardProps) => {

  return (
    <Link to={`/${post.slug}`} className="flex flex-col overflow-hidden w-full rounded-2xl">
            <div className="w-auto">
                <GatsbyImage className="w-full" alt={post.title} image={post.coverImage?.gatsbyImageData} />
            </div>
         <div className="w-full p-6 bg-white text-gray-800 flex flex-col justify-between grow">
             <p className="mb-2 text-sm text-gray-500 uppercase tracking-wide font-bold">{post.typeofpost?.name}</p>
             <h1 className="font-bold text-lg">{post?.title}</h1>
             <p className="text-sm text-gray-500 uppercase tracking-wide font-bold mt-2">
                 {post.meta?.createdAt}
             </p>
         </div>
    </Link>
  );
};

export default ItemCard;
