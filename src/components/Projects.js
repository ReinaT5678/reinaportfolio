import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import wanderfulImage from '../images/Wanderful.png';
import flipImage from '../images/Flip.png';
import makeCents from '../images/MakeCents.png';
import AWS from '../images/AWS.png';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        threshold: 0.5,
        triggerOnce: true
    });

    // State to track which project is expanded (null means none are expanded)
    const [expandedProject, setExpandedProject] = useState(null);

    // Project data
    const projects = [
        {
            id: 1,
            title: "Wanderful",
            image: wanderfulImage, 
            shortDescription: "A travel planning application",
            fullDescription: "Wanderful is a comprehensive travel planning application that helps users discover new destinations, plan itineraries, and share their experiences with others. Built with React and Node.js, it features interactive maps, user reviews, and personalized recommendations.",
            videoLink: "https://youtu.be/tPIBU_Wtav0",
            GitHub: "https://github.com/ReinaT5678/Wanderful/tree/main",
        },
        {
            id: 2,
            title: "Flip Map App",
            image: flipImage, 
            shortDescription: "Interactive mapping solution",
            fullDescription: "Flip Map App is my senior project capstone dedicated to develop a navigation app on dumbphones. The final goal is to provide an efficient, lightweight, and accessible navigation solution for users who prefer or require a simpler mobile experience. We're currently using Kotlin, Rust, OpenGL, Docker, etc for this project.",
            GitHub: "https://github.com/anti-computer-club"
        },
        {
            id: 3,
            title: "AWS Rekognition",
            image: AWS, 
            shortDescription: "Image analysis tool using AWS",
            fullDescription: "This project leverages AWS Rekognition to analyze images and extract meaningful information. It can detect objects, faces, and text. The frontend is built with React Native, Expo, and TypeScript. The backend uses Flask-based Python program. The AWS S3 and AWS Rekognition were used as cloud services and Base64 + JSON were used for Data Processing.",
            videoLink: "https://youtu.be/vekPjz6XQeQ",
            Github: "https://github.com/ReinaT5678/AWS-Label-Detector"
        },
        {
            id: 4,
            title: "Develop For Good",
            image: makeCents,
            shortDescription: "DFG - Make Cents Foundation",
            fullDescription: "Develop For Good is a nonprofit organization with volunteer students aspiring to create software applications for other nonprofits. This team worked with the Make Cents Foundation, a Georgia-based nonprofit focused on financial literacy for the youth. React Native, Firebase authentication, and data storage were used in this project.",
            videoLink: "https://developforgood.notion.site/The-Make-Cents-Foundation-Developing-a-Gamified-Financial-Literacy-Application-19cfbe7117c0805e83ead7ad1e1b37e4",
            GitHub: "https://github.com/developforgood/the-make-cents-foundation",
        }
    ];

    // Toggle expanded state for a project
    const toggleProject = (id) => {
        if (expandedProject === id) {
            setExpandedProject(null);
        } else {
            setExpandedProject(id);
        }
    };

    return (
        <div className="projects-container" ref={ref}>
            <h1>Projects</h1>

            <div className="projects-list">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="project-row"
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        onClick={() => toggleProject(project.id)}
                    >
                        <div className="project-summary">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                            <div className="project-info">
                                <h2>{project.title}</h2>
                                <p>{project.shortDescription}</p>
                            </div>
                            <div className="expand-icon">
                                {expandedProject === project.id ? '−' : '+'}
                            </div>
                        </div>

                        <AnimatePresence>
                            {expandedProject === project.id && (
                                <motion.div 
                                    className="project-details"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p>{project.fullDescription}</p>
                                    <div className="project-links">
                                        {project.videoLink && (
                                            <a href={project.videoLink} className="project-link">View Demo</a>
                                        )}
                                        <a href={project.GitHub} className="project-link">GitHub</a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;