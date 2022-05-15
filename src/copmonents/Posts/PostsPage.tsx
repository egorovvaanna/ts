import { FC, useState, useEffect } from "react";
import { IPost } from "../../types/types";
import List from "./../List";
import { fetchItems } from "./../../fetchAPI/fetch";
import { PostItem } from "./PostItem";
import { Loader } from "../Loader";


export const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const urlPosts = "https://jsonplaceholder.typicode.com/posts?_limit=10"

    useEffect(() => {
        fetchItems(urlPosts, setPosts)
    }, []);

    return !posts.length? <Loader/> :  (
        <List
            items={posts}
            renderItem={(post: IPost) => <PostItem post={post} key={post.id} />}
        />
    );
};
