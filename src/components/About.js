import React, {useRef} from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        threshold: 0.5,
        triggerOnce: true
    });

    return (
        <div className="about-container" ref={ref}>
            <h1>About Me</h1>
            
            <div className="about-boxes">
                <motion.div
                    className="about-background"
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>My background</h2>
                    <p>I was born and raised on Oahu, Hawaii and I’m currently a Computer Science major at Oregon State University with a focus in web and app development. As an aspiring full stack developer, I’m also deeply interested in cybersecurity, particularly in web security. I’ve had the opportunity to gain hands-on experience through multiple internships in both cybersecurity and full-stack development, along with working on numerous projects throughout my studies. 

Aside from coding, I have a big passion for music- I love to play the guitar and sing! Fun fact: I’m a part of an acapella club at my school!</p>
                </motion.div>

                <motion.div
                    className="about-background"
                    initial={{ opacity: 0, x: 100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>My Skills</h2>
                    <p>I have strong programming skills in JavaScript, TypeScript, HTML, CSS, Python, and SQL. I'm also experienced with various frameworks, with my top three being React, Node.js, and MongoDB. Additionally, I've worked with a range of tools and platforms, including Git, GitHub, Docker, AWS, Figma, JSON, and RESTful APIs.</p>
                </motion.div>

                <motion.div
                    className="about-background"
                    initial={{ opacity: 0, x: 100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>My Hobbies</h2>
                    <p>I've been singing since I was eight years old and have participated in operas, theater performances, and recitals throughout my life. Alongside singing, I played the piano until college and also enjoy playing the ukulele and guitar. Beyond music, I’m a huge fan of Spinners and the Monopoly card game, and I love going on biking adventures.

Check out my YouTube channel below—I love sharing singing covers of some of my favorite songs!</p>
            <motion.a 
                href="https://www.youtube.com/@mikhel782013" 
                target="_blank" 
                rel="noopener noreferrer"
                className="youtube-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Visit My YouTube Channel
            </motion.a>
                </motion.div>
            </div>

            <div className="professional-links">
                <motion.a 
                    href="https://www.linkedin.com/in/reina-takahara-65268a214/" 
                    target="_blank" 
                    className="linkedin-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Connect on LinkedIn
                </motion.a>

                <motion.a 
                    href="/ReinaResume.pdf" 
                    download
                    className="resume-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Download Resume
                </motion.a>
            </div>
        </div>
    );
}

export default About;