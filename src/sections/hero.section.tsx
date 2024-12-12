import bg from '../assets/hero-bg.jpg';
export const Hero = () => {
    return (
        <div className="hero-contain">
            <div className="hero-bg" style={{backgroundImage:`url(${bg})`}} ></div>
            <div className="hero">
                <div className="container">
                    <h4 className="service-list">
                        App Development | Web Development | Graphic Design | SEO
                    </h4>
                    <h1 className="hero-title">
                        Crafting Digital Solutions for Real-World Challenges.
                    </h1>
                    <p className="hero-subtitle">
                        We specialize in creating custom software that adapts to your 
                        unique business needs, streamlines processes, and delivers 
                        measurable results while prioritizing user experience and 
                        innovation.
                    </p>
                    <a href="/contact" className="btn">Get Started</a>
                </div>
            </div>
        </div>
    );
}