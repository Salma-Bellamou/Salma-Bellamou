import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '20px' }}>Mes Projets</h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                    Un portfolio mêlant analyse de données, intelligence artificielle et développement logiciel.
                </p>
            </motion.div>

            <div className="grid-projects">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
