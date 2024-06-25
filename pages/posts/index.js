import AllPosts from "../../components/posts/all.posts.js";
import { getAllPosts } from "../../lib/posts-util.js";

export default function AllPostsPage({ posts }) {
    return <AllPosts posts={posts} />
}

export async function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    };
}