import {React, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {motion } from 'framer-motion';
import me1 from '../images/me1.jpeg';
import me2 from '../images/me2.jpeg';
import me3 from '../images/me3.jpg';

const Home = () => {
    const navigate = useNavigate();
    
    const handleScroll = () => {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        if (bottom) {
            navigate('/about');
        }
    };

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <motion.div
                initial={{filter: 'blur(10px)'}}
                animate={{filter: 'blur(0px)'}}
                transition={{duration: 0.5}}
                style={{backgroundImage: 'url(../images/about-background.jpg)'}}
            >
                <div className='home-container'>
                    <div className="welcome"> 
                        <h1>Aloha,<br></br> I'm Reina <br></br>Takahara</h1>
                        <h2>Full Stack Developer</h2>
                    </div>
                    <div className="polaroid-container">
                        <div className="polaroid fade-in-1">
                            <img src={me1} alt="Polaroid 1"/>
                            <div className="caption">December 19, 2024</div>
                        </div>
                        <div className="polaroid fade-in-2">
                            <img src={me2} alt="Polaroid 2"/>
                            <div className="caption">August 28, 2024</div>
                        </div>
                        <div className="polaroid fade-in-3">
                            <img src={me3} alt="Polaroid 3"/>
                            <div className="caption">May 20, 2024</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Home;