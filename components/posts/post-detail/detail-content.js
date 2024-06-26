import ReactMarkdown from 'react-markdown';

import classes from './detail-content.module.css';
import DetailHeader from './detail-header.js';

export default function DetailContent({post}) {
    
    const imgPath = `/images/posts/${post.image}`;
    
    return (
        <article className={classes.content}>
            <DetailHeader title={post.title} image={imgPath} />
            <ReactMarkdown>
                {post.content}
            </ReactMarkdown>
        </article>
    );
}