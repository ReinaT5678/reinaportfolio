import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import wanderfulImage from '../images/Wanderful.png';
import flipImage from '../images/Flip.png';
import makeCents from '../images/MakeCents.png';
import AWS from '../images/AWS.png';
import FoodFilter from '../images/FoodFilter.png';
import dam from '../images/dam.png';
import bookHunt from '../images/book-hunt.png';
import oneComm from '../images/one-comm.png';

const collegeProjects = [
    {
        id: 'wanderful',
        title: 'Wanderful',
        image: wanderfulImage,
        shortDescription: 'A travel planning application',
        fullDescription: 'Wanderful is a comprehensive travel planning application that helps users discover new destinations, plan itineraries, and share their experiences with others. Built with React and Node.js, it features interactive maps, user reviews, and personalized recommendations.',
        videoLink: 'https://youtu.be/tPIBU_Wtav0',
        github: 'https://github.com/ReinaT5678/Wanderful/tree/main',
    },
    {
        id: 'food-filter',
        title: 'Food Filter',
        image: FoodFilter,
        shortDescription: 'A simpler, AI-powered way to read online recipes',
        fullDescription: 'Created in a group of four, Food Filter uses Gemini AI to turn a recipe website into a simplified set of ingredients, steps, and calculated nutrients. It also generates an image based on the recipe. I built the Google extension and assisted with the Gemini AI integration, styling, and deployment.',
        videoLink: 'https://www.youtube.com/watch?v=_m5MhzQx_dU',
        github: 'https://github.com/abobich675/FoodFilter',
    },
    {
        id: 'dam-robotics',
        title: 'DAM Robotics',
        image: dam,
        shortDescription: 'The robotics club website at Oregon State University',
        fullDescription: 'Worked with another member of the team to design and develop the website for the DAM Robotics club at Oregon State University. ',
        videoLink: 'https://osurobotics.club/'
    }
];

const gisProjects = [
    {
        id: 'flip-map',
        title: 'Flip Map App',
        image: flipImage,
        shortDescription: 'An accessible navigation app for dumbphones',
        fullDescription: 'Flip Map App is my senior capstone project: a lightweight, efficient navigation solution for people who prefer or require a simpler mobile experience. The project uses Kotlin, Rust, OpenGL, Docker, and more.',
        github: 'https://github.com/anti-computer-club',
    },
];

const volunteerProjects = [
    {
        id: 'make-cents',
        title: 'Develop For Good',
        image: makeCents,
        shortDescription: 'A gamified financial literacy app for Make Cents Foundation',
        fullDescription: 'Develop For Good brings together volunteer students to build software for nonprofits. Our team worked with the Georgia-based Make Cents Foundation on a youth financial literacy app using React Native, Firebase authentication, and cloud data storage.',
        videoLink: 'https://developforgood.notion.site/The-Make-Cents-Foundation-Developing-a-Gamified-Financial-Literacy-Application-19cfbe7117c0805e83ead7ad1e1b37e4',
        github: 'https://github.com/developforgood/the-make-cents-foundation',
    },
    {
        id: 'one-community',
        title: 'One Community',
        image: oneComm,
        shortDescription: 'Team management site for a non-profit organization focused on sustainable living.',
        fullDescription: 'One Community is a web application designed to help non-profit organizations manage their teams and projects more effectively. The app includes features for tracking team member information, managing project timelines, and facilitating communication between team members. Used React and MongoDB.'
    }
];

const sideProjects = [
    {
        id: 'aws-rekognition',
        title: 'AWS Rekognition',
        image: AWS,
        shortDescription: 'An image analysis tool using AWS',
        fullDescription: 'This project uses AWS Rekognition to detect objects, faces, and text in images. The frontend was built with React Native, Expo, and TypeScript; the backend uses Flask and Python, with AWS S3, Base64, and JSON handling image data.',
        videoLink: 'https://youtu.be/vekPjz6XQeQ',
        github: 'https://github.com/ReinaT5678/AWS-Label-Detector',
    },
    {
        id: 'book-hunt',
        title: 'Book Hunt',
        image: bookHunt,
        shortDescription: 'A book search and reading-list application',
        fullDescription: 'Book Hunt is a Flask application for searching books, viewing details, and managing reading lists. It uses the Open Library API and was deployed with Azure App Service and Azure SQL Database.',
        videoLink: 'https://www.youtube.com/watch?v=MR5jVeJS-oo',
        github: 'https://github.com/ReinaT5678/book-hunt',
    },
];

const projectCategories = [
    {
        id: 'college',
        title: 'College Projects',
        description: 'Coursework and collaborative projects from my college years.',
        projects: collegeProjects,
    },
    {
        id: 'gis',
        title: 'GIS Projects',
        description: 'Mapping and navigation projects focused on accessible experiences.',
        projects: gisProjects,
    },
    {
        id: 'side',
        title: 'Side Projects',
        description: 'Experiments and ideas I have explored outside of class and work.',
        projects: sideProjects,
    },
    {
        id: 'volunteer',
        title: 'Volunteer Projects',
        description: 'Technology built with teams to support community organizations.',
        projects: volunteerProjects,
    },
];

const ProjectCard = ({ project }) => (
    <article className="project-card">
        <div className={`project-card-image${project.image ? '' : ' project-card-image--placeholder'}`}>
            {project.image ? (
                <img src={project.image} alt="" />
            ) : (
                <span aria-hidden="true">{project.title.charAt(0)}</span>
            )}
        </div>
        <div className="project-card-content">
            <p className="project-card-kicker">{project.shortDescription}</p>
            <h3>{project.title}</h3>
            <p>{project.fullDescription}</p>
            <div className="project-links">
                {project.videoLink && (
                    <a href={project.videoLink} target="_blank" rel="noreferrer" className="project-link">View project</a>
                )}
                {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link project-link--secondary">GitHub</a>
                )}
            </div>
        </div>
    </article>
);

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.15, once: true });
    const [expandedCategory, setExpandedCategory] = useState('college');

    const toggleCategory = (id) => {
        setExpandedCategory((current) => current === id ? null : id);
    };

    return (
        <section className="projects-container" ref={ref} aria-labelledby="projects-heading">
            <p className="eyebrow">Selected work</p>
            <h1 id="projects-heading">Projects</h1>
            <p className="projects-intro">Browse my work by category. Open a collection to see every project inside.</p>

            <div className="projects-list">
                {projectCategories.map((category, index) => {
                    const isExpanded = expandedCategory === category.id;
                    const panelId = `${category.id}-projects`;

                    return (
                        <motion.div
                            key={category.id}
                            className={`project-row${isExpanded ? ' project-row--expanded' : ''}`}
                            initial={{ opacity: 0, y: 28 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                type="button"
                                className="project-summary"
                                onClick={() => toggleCategory(category.id)}
                                aria-expanded={isExpanded}
                                aria-controls={panelId}
                            >
                                <span className="project-category-number" aria-hidden="true">0{index + 1}</span>
                                <span className="project-info">
                                    <span className="project-title-line">
                                        <span className="project-category-title">{category.title}</span>
                                        <span className="project-count">{category.projects.length} {category.projects.length === 1 ? 'project' : 'projects'}</span>
                                    </span>
                                    <span className="project-category-description">{category.description}</span>
                                </span>
                                <span className="expand-icon" aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isExpanded && (
                                    <motion.div
                                        id={panelId}
                                        className="project-details"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="project-card-grid">
                                            {category.projects.map((project) => (
                                                <ProjectCard key={project.id} project={project} />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
