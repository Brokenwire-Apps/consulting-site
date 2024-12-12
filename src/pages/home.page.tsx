import { Hero } from '../sections/hero.section';
import { Why } from '../sections/why.section';
import { Story } from '../sections/story.section';

export const Home = () => {
    return (
        <section className="home">
            <Hero />
            <Why />
            <Story />
        </section>
    );
}