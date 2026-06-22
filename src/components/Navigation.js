import React from 'react';

const Navigation = () => {
    return (
        <header className="site-header">
            <a href="#home" className="brand-link">Reina</a>
            <nav className="nav-bar" aria-label="Primary navigation">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
            </nav>
        </header>
    );
}

export default Navigation;
