export interface TypePost {
  id: string;
  title: string;
  category: {
    id: string;
    name: string;
  }[];
  typeofpost: {
    name: string;
  };
  slug: string;
  meta: {
    createdAt: string;
  };
  body: string;
  featured: boolean;
  coverImage: {
    url: string;
  };
}

export interface TypeCategory {
  id: string;
  name: string;
}

export interface ItemCardProps {
  post: TypePost;
}
