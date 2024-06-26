import Markdown from 'react-markdown';
import Image from 'next/image';

import DetailHeader from './detail-header.js';
import classes from './detail-content.module.css';

export default function DetailContent({ post }) {

    const imgPath = `/images/posts/${post.image}`;

    const customRenderers = {
        // img(image) {
        //     return <Image
        //         src={`/images/posts/${image}.src`}
        //         alt={image.alt}
        //         width={600}
        //         height={300}

        //     />
        // },

        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                )
            }

            return <p>{paragraph.children}</p>;
        },
      
    }

    return (
        <article className={classes.content} >
            <DetailHeader title={post.title} image={imgPath} />
            <Markdown components={customRenderers}>
                {post.content}
            </Markdown>
        </article >
    );
}