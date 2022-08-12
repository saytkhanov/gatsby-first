interface Params {
    data: {
        posts: {
            nodes: Props[]
        }
    }
}

interface ItemCardProps {
    post: {
        id: string
        slug: string
        title: string
    }
}

interface Props {
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
    featured: boolean;
    coverImage: {
        url: string;
    }
}

interface BlogPostsProps {
    posts: {
        id: string;
        title: string;
        category: {
            name: string;
        };
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
        }
    } []
}