import React from "react";
import { Link } from "gatsby";

const ItemCard = (props: ItemCardProps) => {
  const { post } = props;
  return (
    <Link key={post.id} to={`/${post.slug}`}>
      {post.title}
    </Link>
  );
};

export default ItemCard;
