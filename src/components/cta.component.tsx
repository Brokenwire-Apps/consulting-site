import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CTAType } from "../types/cta.type";

export const Cta = ( content: CTAType ) => {
    
    return (
        <section className={`cta ${content.color}`}>
            <div className="cta-content">
                <h2>{content.title}</h2>
                <p>{content.subtitle}</p>
                <a href={content.link} className="btn">
                    <FontAwesomeIcon icon={content.linkIcon} />
                    {content.linkText}
                </a>
            </div>
        </section>
    );
}