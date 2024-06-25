import Link from 'next/link';
import Image from 'next/image';

import classes from './post-item.module.css';

export default function PostItem({  slug , title, image, date, excerpt}) {
    const formattedDate = new Date(date).toLocaleDateString('bg-BG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const imgPath = `/images/posts/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={classes.post}>
        <Link href={linkPath}>
            <div className={classes.image}>
                <Image src={imgPath} alt={title} width={300} height={200} layout="responsive"/>
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <time>{formattedDate}</time>
                <p>{excerpt}</p>
            </div>
        </Link>
        </li>
    );
}