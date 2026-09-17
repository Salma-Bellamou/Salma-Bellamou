import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { certifications } from '../data/certifications';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { Download, Database, Brain, Cloud, ArrowRight, Award } from 'lucide-react';

const Home = () => {
    return (
        <div className="container">
            {/* Hero Section */}
            <section id="accueil" style={{ minHeight: '100vh', paddingTop: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/photo.jpg"
                        alt="Salma Bellamou"
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '4px solid var(--surface)',
                            marginBottom: '30px',
                            boxShadow: 'var(--shadow-md)',
                            objectPosition: 'top center'
                        }}
                        onError={(e) => e.target.src = '/photo-placeholder.svg'}
                    />
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>
                        <span className="text-gradient">SALMA BELLAMOU</span>
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '30px', fontFamily: 'var(--font-main)', fontWeight: 500 }}>
                        Future Experte Data & IA
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                        Étudiante en 3ème année de Bachelor Informatique à l'ECE Paris, spécialité Intelligence Artificielle.
                        Je transforme les données brutes en solutions intelligentes, de l'analyse statistique au Machine Learning et au NLP.
                    </p>

                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/CV_Salma_Bellamou.pdf" download="CV_Salma_Bellamou.pdf" className="btn btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
                            <Download size={20} /> Mon CV
                        </a>
                        <Link to="/about" className="btn" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
                            En savoir plus
                        </Link>
                        <Link to="/projects" className="btn" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
                            Voir Projets
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Domains Teaser */}
            <section style={{ marginBottom: '100px', textAlign: 'center' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Mes Domaines</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                    <Link to="/domains" style={{ textDecoration: 'none' }}>
                        <motion.div whileHover={{ y: -4 }} className="card" style={{ padding: '30px', width: '250px', height: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <Database size={30} color="var(--accent)" />
                            </div>
                            <h3>Data & Analyse</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Python, SQL, Power BI</p>
                        </motion.div>
                    </Link>
                    <Link to="/domains" style={{ textDecoration: 'none' }}>
                        <motion.div whileHover={{ y: -4 }} className="card" style={{ padding: '30px', width: '250px', height: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <Brain size={30} color="var(--accent-2)" />
                            </div>
                            <h3>IA & Machine Learning</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>NLP, Deep Learning, GenAI</p>
                        </motion.div>
                    </Link>
                    <Link to="/domains" style={{ textDecoration: 'none' }}>
                        <motion.div whileHover={{ y: -4 }} className="card" style={{ padding: '30px', width: '250px', height: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <Cloud size={30} color="var(--accent)" />
                            </div>
                            <h3>Cloud & Bases de Données</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>AWS, MySQL, PostgreSQL</p>
                        </motion.div>
                    </Link>
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Link to="/domains" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 30px', fontSize: '1.1rem' }}>
                        Voir tous les domaines <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Certifications Section */}
            <section style={{ marginBottom: '100px', textAlign: 'center' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Certifications</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.pdf || undefined}
                            target={cert.pdf ? "_blank" : undefined}
                            rel={cert.pdf ? "noopener noreferrer" : undefined}
                            className="card"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            whileHover={cert.pdf ? { y: -4 } : {}}
                            style={{ padding: '16px', textAlign: 'left', cursor: cert.pdf ? 'pointer' : 'default', display: 'flex', flexDirection: 'column' }}
                        >
                            {cert.image ? (
                                <img src={cert.image} alt={cert.title} style={{ width: '100%', borderRadius: '10px', border: '1px solid var(--border)', marginBottom: '15px', aspectRatio: '1.6', objectFit: 'cover' }} />
                            ) : (
                                <div style={{ width: '100%', aspectRatio: '1.6', borderRadius: '10px', border: '1px dashed var(--border)', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Award size={32} color="var(--text-secondary)" />
                                </div>
                            )}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                <Award size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: '600' }}>{cert.title}</p>
                                    {cert.issuer && <p style={{ margin: '4px 0 0', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{cert.issuer}{cert.date ? ` · ${cert.date}` : ''}</p>}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* Featured Projects */}
            <section id="projets" style={{ paddingBottom: '150px' }}>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '50px', textAlign: 'center' }}>
                    Projets à la Une
                </h2>

                <div className="grid-projects">
                    {[
                        projects.find(p => p.id === 'tri-intelligent-documents'),
                        projects.find(p => p.id === 'hackathon-cyber-ia'),
                        projects.find(p => p.id === 'ecomscrape-clean')
                    ].filter(Boolean).map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <Link to="/projects" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 30px', fontSize: '1.1rem' }}>
                        Voir tous les projets <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
