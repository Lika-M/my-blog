import classes from './detail-content.module.css';
import DetailHeader from './detail-header.js';

const DUMMY_POST = {
    slug: 'getting started with NextJS-1',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    date: '2024-06.25',
    content: '# This is a first post.'
};

export default function DetailContent() {
    const imgPath = `/images/posts/${DUMMY_POST.image}`
    return (
        <article className={classes.content}>
            <DetailHeader title={DUMMY_POST.title} image={imgPath} />
            {DUMMY_POST.content}
        </article>
    );
}