import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo( () => {
        return (sort)
            ? [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
            : posts
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts, {sort, search}) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo( () => {
        return (search)
            ? sortedPosts.filter(post => 
                post.title.toLowerCase().includes(search) || post.body.toLowerCase().includes(search))
            : sortedPosts
    }, [search, sortedPosts]);
    return sortedAndSearchedPosts;
}