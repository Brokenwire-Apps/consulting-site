import { faRightToLine } from '@awesome.me/kit-67f463dc1d/icons/sharp-duotone/solid';
import { Hero } from '../sections/hero.section';
import { Why } from '../sections/why.section';
import { Story } from '../sections/story.section';
import { Cta } from '../components/cta.component';

export const Home = () => {
    const CTAContent = {
        color: 'orange',
        title: 'Ready to get started?!',
        subtitle: 'Contact us and start your journey today.',
        link: '#',
        linkText: 'Contact Us!',
        linkIcon: faRightToLine
    };

    return (
        <section className="home">
            <Hero />
            <Why />
            <Story />
            <Cta {...CTAContent} />
        </section>
    );
}