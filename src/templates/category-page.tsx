import React from "react";
import Layout from "../components/Layout";
import BlogPosts from "../components/BlogPosts";

interface SinglePostProps {
  data: {
    allDatoCmsPost: {
      nodes: {
        id: string;
        title: string;
        category: {
          name: string;
          id: string;
        }[];
        typeofpost: {
          name: string;
        };
        slug: string;
        meta: {
          createdAt: string;
        };
        body: string;
        originalId: string;
        featured: boolean;
        coverImage: {
          url: string;
        };
      }[];
    };
  };
  pageContext: {
    categoryTitle: string;
    posts: {
      nodes: {
        id: string;
        title: string;
        category: {
          name: string;
        }
        typeofpost: {
          name: string;
        }
        slug: string;
        meta: {
          createdAt: string;
        }
        body: string;
        originalId: string;
        featured: boolean;
        coverImage: {
          url: string;
        }
      }[]
    };
  };
}

const SinglePost = (props: SinglePostProps): React.ReactElement => {
  const { pageContext } = props;
  const { categoryTitle, posts } = pageContext;

  const postsForCategory = posts.nodes.filter((post: any) =>
    post.category.some((category: any) => category.name === categoryTitle)
  );

  return (
    <Layout>
      <BlogPosts posts={postsForCategory} />
    </Layout>
  );
};

export default SinglePost;
