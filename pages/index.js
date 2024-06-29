import Head from 'next/head';

import FeaturedPosts from "../components/home-page/featured-posts.js";
import Hero from "../components/home-page/hero.js";
import { getFeaturedPosts } from "../lib/posts-util.js";

export default function HomePage({ posts }) {
    // TODO: resolve problem with prop drilling
    return (
        <>
            <Head>
                <title>Welcome to my blog!</title>
                <meta name="description" content="I post about my NextJS course." />
                <meta name="keywords" content="NextJS, React, Blog, JavaScript" />
                <meta name="author" content="Lika" />

                {/* <!-- Open Graph meta tags -->
                <meta property="og:title" content="Title of the content" />
                <meta property="og:description" content="Description of the content" />
                <meta property="og:image" content="http://example.com/image.jpg" />
                <meta property="og:url" content="http://example.com/page.html" />
                <meta property="og:type" content="website" />

                <!-- Twitter meta tags -->
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Title of the content" />
                <meta name="twitter:description" content="Description of the content" />
                <meta name="twitter:image" content="http://example.com/image.jpg" />
                <meta name="twitter:site" content="@yourusername" />
                <meta name="twitter:creator" content="@creatorusername" /> */}

            </Head>
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