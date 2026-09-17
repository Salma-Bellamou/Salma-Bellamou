import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="card"
            whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(18, 19, 26, 0.1)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
            <div className="card-header" style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Code color="var(--accent)" size={20} />
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', border: '1px solid var(--border)', padding: '2px 10px', borderRadius: '12px' }}>
                        {project.period}
                    </span>
                </div>
                <h3 style={{ marginTop: '14px', fontSize: '1.2rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 600 }}>{project.company}</p>
            </div>

            <div className="card-body" style={{ flexGrow: 1 }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '20px' }}>
                    {project.description.substring(0, 120)}...
                </p>
                <div className="tech-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} style={{ fontSize: '0.75rem', background: 'var(--bg-color)', border: '1px solid var(--border)', padding: '4px 10px', borderRadius: '6px', color: 'var(--text-secondary)' }}>
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
