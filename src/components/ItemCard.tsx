import React from "react";
import { Link } from "gatsby";
import { ItemCardProps } from "../utils/types";



const ItemCard = (props: ItemCardProps) => {
  const { post } = props;

  return (
    <Link to={`/${post.slug}`}>
      <div>
        <h3>{post.title}</h3>
      </div>
    </Link>
  );
};

export default ItemCard;
