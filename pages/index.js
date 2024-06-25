import FeaturedPosts from "../components/home-page/featured-posts.js";
import Hero from "../components/home-page/hero.js";

export default function HomePage() {
    const DUMMY_POSTS = [
        {
            slug: 'getting started with NextJS-1',
            title: 'Getting started with NextJS',
            image: 'getting-started-nextjs.png',
            date: '2024-06.25',
            excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ship with built-in SSR.'
        },
        {
            slug: 'getting started with NextJS-2',
            title: 'Getting started with NextJS',
            image: 'getting-started-nextjs.png',
            date: '2024-06.25',
            excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ship with built-in SSR.'
        },
        {
            slug: 'getting started with NextJS-3',
            title: 'Getting started with NextJS',
            image: 'getting-started-nextjs.png',
            date: '2024-06.25',
            excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ship with built-in SSR.'
        },
        {
            slug: 'getting started with NextJS-4',
            title: 'Getting started with NextJS',
            image: 'getting-started-nextjs.png',
            date: '2024-06.25',
            excerpt: 'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ship with built-in SSR.'
        }
    ];
    // TODO: resolve problem with prop drilling
    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </>
    );
}