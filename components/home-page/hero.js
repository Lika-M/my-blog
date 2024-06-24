import Image from "next/image";

import classes from './hero.module.css';

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src={'/images/me.png'}
                    alt={'Me, as Helen of Troy.'}
                    width={500}
                    height={500}
                    priority={true}
                />
            </div>
            <h1>Hi, I'm Lika</h1>
            <p>This is my space to practice and showcase my new NextJS skills.</p>
        </section>
    );
}