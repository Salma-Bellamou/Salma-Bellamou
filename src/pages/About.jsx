import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Download, Mail, Linkedin, Phone, Languages } from 'lucide-react';
import Toast from '../components/Toast';

const experiences = [
    {
        title: "Projet Data/IA — Tri intelligent des documents",
        company: "ECE Paris",
        period: "04/2026 – 06/2026",
        bullets: [
            "Concevoir un système de classification automatique de documents basé sur des techniques de Machine Learning et de NLP (Scikit-learn, TensorFlow/Keras, PyTorch).",
            "Structurer et prétraiter un corpus de plusieurs centaines de documents textuels (Pandas, NumPy) pour l'analyse et l'entraînement du modèle.",
            "Définir 3 indicateurs clés (précision, rappel, F1-score) pour comparer 3 algorithmes de classification et sélectionner le plus performant.",
            "Automatiser le pipeline de traitement des données, réduisant les étapes manuelles de nettoyage.",
            "Travailler en équipe sur l'ensemble du cycle projet : collecte, analyse, entraînement, tests et présentation des résultats."
        ]
    },
    {
        title: "Stage — Structuration et analyse de données",
        company: "Groupe Wafa Assurance, Casablanca",
        period: "06/2025 – 08/2025",
        bullets: [
            "Structurer et nettoyer plusieurs bases de données relationnelles pour fiabiliser leur exploitation analytique.",
            "Analyser et cartographier plus de 5 processus numériques internes afin d'identifier des opportunités d'automatisation.",
            "Contrôler la qualité et la conformité des données métiers dans le respect des exigences de confidentialité."
        ]
    },
    {
        title: "Stage d'observation — Systèmes d'information",
        company: "OCP, Jorf Lasfar",
        period: "06/2024 – 08/2024",
        bullets: [
            "Découverte des systèmes d'information et des flux de données en environnement industriel, et sensibilisation aux enjeux de sécurisation et de transformation digitale."
        ]
    }
];

const certifications = [
    "Final Exam – AI & GenAI Level 2 (Liora)",
    "Prompt Engineering – IA & GenAI",
    "Structuring Data & Exploring GenAI Tools",
    "Google Sheets Marketing (DataScientest)"
];

const About = () => {
    const [toast, setToast] = useState({ isVisible: false, message: '' });

    const handleContactClick = () => {
        setToast({
            isVisible: true,
            message: 'Email copié : salmabellamou@gmail.com'
        });
        navigator.clipboard.writeText('salmabellamou@gmail.com');
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '50px' }}>
            <Toast
                message={toast.message}
                isVisible={toast.isVisible}
                onClose={() => setToast({ ...toast, isVisible: false })}
                actionLabel="Copier"
                onAction={() => {
                    navigator.clipboard.writeText('salmabellamou@gmail.com');
                    setToast({ ...toast, isVisible: false });
                }}
            />
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                {/* Intro Section */}
                <section style={{ marginBottom: '80px', textAlign: 'center' }}>
                    <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        src="/photo.png"
                        alt="Salma Bellamou"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            objectPosition: 'top center',
                            border: '3px solid var(--accent-cyan)',
                            marginBottom: '20px'
                        }}
                        onError={(e) => e.target.src = '/photo-placeholder.svg'}
                    />
                    <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '30px' }}>Qui suis-je ?</h1>

                    <div className="glass-card" style={{ padding: '40px', textAlign: 'left', marginBottom: '30px' }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
                            Je m'appelle <strong>Salma Bellamou</strong>, étudiante en 3ème année de <strong>Bachelor Informatique</strong> à l'<strong>ECE Paris</strong>, spécialité Intelligence Artificielle.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)', marginBottom: '20px' }}>
                            Rigoureuse, curieuse et motivée, je travaille aussi bien sur l'analyse et la structuration de données (statistiques, Business Intelligence) que sur la conception de modèles de <strong>Machine Learning</strong> et de <strong>NLP</strong>. Une première expérience concrète (stage, projets académiques, hackathon) m'a permis de développer une approche méthodique, de la donnée brute jusqu'au modèle et à sa présentation.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-primary)' }}>
                            Je recherche une <strong>alternance en Data & Intelligence Artificielle</strong> à partir de septembre 2026 (rythme 3 semaines entreprise / 2 semaines école), garantissant une forte immersion et une continuité dans les missions.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/CV_Salma_Bellamou.pdf" download="CV_Salma_Bellamou.pdf" className="btn btn-primary">
                            <Download size={20} /> Télécharger mon CV
                        </a>
                        <a
                            href="mailto:salmabellamou@gmail.com"
                            onClick={handleContactClick}
                            title="salmabellamou@gmail.com"
                            className="btn"
                            style={{ border: '1px solid var(--glass-border)', background: 'var(--card-bg)' }}
                        >
                            <Mail size={20} /> Me Contacter
                        </a>
                        <a href="https://www.linkedin.com/in/salma-bellamou-3212a433b" target="_blank" rel="noopener noreferrer" className="btn" style={{ border: '1px solid var(--glass-border)', background: 'var(--card-bg)' }}>
                            <Linkedin size={20} /> LinkedIn
                        </a>
                        <a href="tel:+33759509820" className="btn" style={{ border: '1px solid var(--glass-border)', background: 'var(--card-bg)' }}>
                            <Phone size={20} /> +33 7 59 50 98 20
                        </a>
                    </div>
                </section>

                {/* Experience Section */}
                <section style={{ marginBottom: '80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <Briefcase color="var(--accent-cyan)" size={32} />
                        <h2 style={{ fontSize: '2rem', margin: 0 }}>Expérience Professionnelle</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        {experiences.map((exp, index) => (
                            <div key={index} className="glass-card" style={{ padding: '30px', position: 'relative', borderLeft: '4px solid var(--accent-cyan)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '10px' }}>
                                    <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{exp.title}</h3>
                                    <span style={{ color: 'var(--accent-cyan)', background: 'rgba(0, 243, 255, 0.1)', padding: '5px 12px', borderRadius: '15px', fontSize: '0.9rem' }}>
                                        {exp.period}
                                    </span>
                                </div>
                                <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '20px' }}>{exp.company}</p>
                                <ul style={{ paddingLeft: '20px', color: 'var(--text-primary)', lineHeight: '1.7' }}>
                                    {exp.bullets.map((bullet, idx) => (
                                        <li key={idx}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section style={{ marginBottom: '80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <GraduationCap color="var(--accent-purple)" size={32} />
                        <h2 style={{ fontSize: '2rem', margin: 0 }}>Formation</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div className="glass-card" style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                            <div>
                                <h3 style={{ margin: '0 0 5px 0' }}>Bachelor Informatique — Parcours Data & Intelligence Artificielle</h3>
                                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>ECE Paris, France</p>
                            </div>
                            <span style={{ color: 'var(--accent-purple)' }}>2024 - 2027</span>
                        </div>

                        <div className="glass-card" style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                            <div>
                                <h3 style={{ margin: '0 0 5px 0' }}>Formation en Développement Digital</h3>
                                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>OFPPT, El Jadida, Maroc</p>
                            </div>
                            <span style={{ color: 'var(--accent-purple)' }}>2023 - 2024</span>
                        </div>
                    </div>
                </section>

                {/* Certifications Section */}
                <section style={{ marginBottom: '80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <Award color="var(--accent-cyan)" size={32} />
                        <h2 style={{ fontSize: '2rem', margin: 0 }}>Certifications</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                        {certifications.map((cert, index) => (
                            <div key={index} className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Award size={24} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                                <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{cert}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Languages Section */}
                <section>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <Languages color="var(--accent-purple)" size={32} />
                        <h2 style={{ fontSize: '2rem', margin: 0 }}>Langues</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                            <h3 style={{ margin: '0 0 5px 0' }}>Arabe</h3>
                            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Langue maternelle</p>
                        </div>
                        <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                            <h3 style={{ margin: '0 0 5px 0' }}>Français</h3>
                            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Bilingue</p>
                        </div>
                        <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                            <h3 style={{ margin: '0 0 5px 0' }}>Anglais</h3>
                            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>B2 – Intermédiaire</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default About;
