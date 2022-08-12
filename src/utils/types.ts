interface LayoutProps {
    children?: JSX.Element | JSX.Element[];
}

interface Params {
    data: {
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
    originalId: string;
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
        originalId: string;
        featured: boolean;
        coverImage: {
            url: string;
        }
    } []
}