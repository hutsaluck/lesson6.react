const baseUrl: string = `https://jsonplaceholder.typicode.com`;

type IUrls = {
    usersUrls: {
        all: string
        oneById: (id: number) => string,
        withPosts: (id: number) => string,
    },
    postsUrls: {
        all: string
        oneById: (id: number) => string,
        withUser: (id: number) => string,
        withComments: (id: number) => string,
    },
    commentsUrls: {
        all: string
        oneById: (id: number) => string,
    }
}

const urls: IUrls = {
    usersUrls: {
        all: `/users`,
        oneById: (id: number): string => `/users/${id}`,
        withPosts: (id: number): string => `/users/${id}/posts`,
    },
    postsUrls: {
        all: `/posts`,
        oneById: (id: number): string => `/posts/${id}`,
        withUser: (id: number): string => `/posts/?userId=${id}`,
        withComments: (id: number): string => `/posts/${id}/comments`,
    },
    commentsUrls: {
        all: `/comments`,
        oneById: (id: number): string => `/comments/${id}`,
    }
}

export {urls, baseUrl}