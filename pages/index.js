import FeaturedPosts from "../components/home-page/featured-posts.js";
import Hero from "../components/home-page/hero.js";
import {  getFeaturedPosts } from "../lib/posts-util.js";

export default function HomePage({posts}) {
    // TODO: resolve problem with prop drilling
    return (
        <>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>
    );
}

export async function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    
    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 600
    }
}