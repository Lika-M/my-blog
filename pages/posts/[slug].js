import Head from "next/head.js";

import DetailContent from "../../components/posts/post-detail/detail-content.js";
import { getAllPosts, getPostData } from "../../lib/posts-util.js";

export default function PostDetailPage({ post }) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Head>
            <DetailContent post={post} />
        </>
    );
}

export async function getStaticProps(context) {
    const { params } = context;
    const post = getPostData(params.slug);

    return {
        props: {
            post: post
        }
    }
}

export async function getStaticPaths() {
    const allPosts = getAllPosts();
    const paths = allPosts.map(post => ({
        params: {
            slug: post.slug
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}