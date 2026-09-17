import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="glass-card"
            whileHover={{ scale: 1.02, borderColor: 'var(--accent-cyan)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
            <div className="card-header" style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <Code color="var(--accent-purple)" size={24} />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', border: '1px solid var(--glass-border)', padding: '2px 8px', borderRadius: '12px' }}>
                        {project.period}
                    </span>
                </div>
                <h3 style={{ marginTop: '10px', fontSize: '1.2rem', color: 'white' }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)' }}>{project.company}</p>
            </div>

            <div className="card-body" style={{ flexGrow: 1 }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '20px' }}>
                    {project.description.substring(0, 120)}...
                </p>
                <div className="tech-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px' }}>
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>+{project.technologies.length - 3}</span>}
                </div>
            </div>

            <Link to={`/project/${project.id}`} className="btn btn-primary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                Voir Détails <ArrowRight size={16} />
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
