import { useEffect, useState } from 'react';
import reinaTopHead from '../images/reina-top-head.png';
import reinaBottomHead from '../images/reina-bottom-head.png';
import coding from '../images/coding.png';
import music from '../images/music.png';
import guitar from '../images/guitar.png';
import hike from '../images/hike.png';

const ideas = [
    { src: guitar, alt: 'Guitar', className: 'idea-card idea-card--one' },
    { src: coding, alt: 'Coding project', className: 'idea-card idea-card--two' },
    { src: music, alt: 'Music project', className: 'idea-card idea-card--three' },
    { src: hike, alt: 'Hiking project', className: 'idea-card idea-card--four' },
];

const HeadAnimation = ({ className = '' }) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let timer;
        const startSequence = () => {
            timer = window.setTimeout(() => setIsReady(true), 1000);
        };

        if (document.readyState === 'complete') {
            startSequence();
        } else {
            window.addEventListener('load', startSequence, { once: true });
        }

        return () => {
            window.removeEventListener('load', startSequence);
            window.clearTimeout(timer);
        };
    }, []);

    return (
        <div className={`head-animation ${isReady ? 'head-animation--ready' : ''} ${className}`}>
            <span className="head-animation__prompt" aria-hidden="true">ideas inside</span>

            <div className="idea-stream" aria-hidden="true">
                {ideas.map((idea) => (
                    <img
                        key={idea.alt}
                        src={idea.src}
                        alt=""
                        className={idea.className}
                    />
                ))}
            </div>

            <img
                src={reinaBottomHead}
                alt="Reina Takahara smiling"
                className="head-animation__bottom"
            />
            <img
                src={reinaTopHead}
                alt=""
                className="head-animation__top"
            />
        </div>
    );
};

export default HeadAnimation;
