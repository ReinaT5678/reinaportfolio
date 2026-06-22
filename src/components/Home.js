import { React } from 'react';
import { motion } from 'framer-motion';
import me1 from '../images/me1.jpeg';
import me2 from '../images/me2.jpeg';
import me3 from '../images/me3.jpg';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="home-container">
                <div className="animation-stage" aria-label="Portrait animation area">
                    <div className="animation-frame" />
                </div>

                <div className="welcome">
                    <p className="eyebrow">Full Stack Developer</p>
                    <h1>Aloha, I'm Reina Takahara</h1>
                    <h2>I like building SaaS and cloud related applications!</h2>
                    <div className="hero-actions">
                        <a href="#projects" className="primary-action">View Projects</a>
                        <a href="#about" className="secondary-action">About Me</a>
                    </div>
                </div>

                <div className="polaroid-container">
                    <div className="polaroid fade-in-1">
                        <img src={me1} alt="Reina smiling outdoors"/>
                    </div>
                    <div className="polaroid fade-in-2">
                        <img src={me2} alt="Reina portrait"/>
                    </div>
                    <div className="polaroid fade-in-3">
                        <img src={me3} alt="Reina smiling"/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
