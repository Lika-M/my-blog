import PostsGrid from './posts-grid.js';
import classes from './all-posts.module.css';


export default function AllPosts({posts}) {
    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={posts}/>
        </section>
    );
}