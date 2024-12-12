import { Hero } from '../sections/hero.section';
import { Why } from '../sections/why.section';

export const Home = () => {
    return (
        <section className="home">
            <Hero />
            <Why />
        </section>
    );
}