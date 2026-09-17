import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Calendar, User, Briefcase, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectPage = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="container" style={{ textAlign: 'center', paddingTop: '100px' }}>
                <h2>Projet non trouvé</h2>
                <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: '100px' }}>
            <Link to="/" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '30px', color: 'var(--text-secondary)' }}>
                <ArrowLeft size={20} /> Retour aux projets
            </Link>

            <motion.div
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ padding: '40px' }}
            >
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '20px', marginBottom: '30px' }}>
                    <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{project.title}</h1>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                            <Calendar size={18} color="var(--accent)" />
                            <span>{project.period}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                            <User size={18} color="var(--accent-2)" />
                            <span>{project.role}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                            <Briefcase size={18} color="var(--accent)" />
                            <span>{project.company}</span>
                        </div>
                    </div>
                </div>

                <div className="project-content">
                    <h2 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>Description</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '40px' }}>
                        {project.description}
                    </p>

                    <h2 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>Technologies</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        {project.technologies.map(tech => (
                            <span key={tech} style={{
                                background: 'var(--accent-soft)',
                                border: '1px solid var(--accent)',
                                color: 'var(--accent)',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <Code size={16} /> {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectPage;
