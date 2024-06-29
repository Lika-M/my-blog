import Head from "next/head.js";

import AllPosts from "../../components/posts/all.posts.js";
import { getAllPosts } from "../../lib/posts-util.js";

export default function AllPostsPage({ posts }) {
    return (
        <>
        <Head>
            <title>All posts</title>
            <meta name="description" content="A list of all programming-related topics."/>
        </Head>
            <AllPosts posts={posts} />
        </>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    };
}