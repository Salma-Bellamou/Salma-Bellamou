import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Terminal, Cloud } from 'lucide-react';

const SkillSection = ({ title, skills, icon: Icon, delay }) => (
    <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        style={{ marginBottom: '30px' }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '15px' }}>
            <Icon color="var(--accent-cyan)" size={28} />
            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{title}</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
            {skills.map((skill, index) => (
                <div key={index} style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontWeight: 'bold', color: 'white' }}>{skill.name}</span>
                        <span style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>{skill.level}</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.percent }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))', borderRadius: '3px' }}
                        />
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            title: "Data & Analyse",
            icon: Database,
            skills: [
                { name: "Data Analytics / Visualisation", level: "Avancé", percent: "85%" },
                { name: "SQL Avancé", level: "Avancé", percent: "85%" },
                { name: "Business Intelligence", level: "Intermédiaire", percent: "70%" },
                { name: "Data Cleaning", level: "Avancé", percent: "80%" },
                { name: "Excel Avancé", level: "Avancé", percent: "75%" },
                { name: "Power BI", level: "Notions de Base", percent: "35%" }
            ]
        },
        {
            title: "IA & Machine Learning",
            icon: Brain,
            skills: [
                { name: "Machine Learning", level: "Intermédiaire", percent: "75%" },
                { name: "Deep Learning", level: "Intermédiaire", percent: "65%" },
                { name: "NLP", level: "Intermédiaire", percent: "70%" },
                { name: "Scikit-learn", level: "Intermédiaire", percent: "70%" },
                { name: "TensorFlow / Keras", level: "Intermédiaire", percent: "60%" },
                { name: "PyTorch", level: "Intermédiaire", percent: "55%" }
            ]
        },
        {
            title: "Langages & Développement",
            icon: Terminal,
            skills: [
                { name: "Python", level: "Avancé", percent: "90%" },
                { name: "SQL", level: "Avancé", percent: "85%" },
                { name: "Java", level: "Intermédiaire", percent: "60%" },
                { name: "C++", level: "Intermédiaire", percent: "55%" },
                { name: "Programmation Orientée Objet", level: "Intermédiaire", percent: "65%" },
                { name: "Web Scraping", level: "Intermédiaire", percent: "65%" }
            ]
        },
        {
            title: "Cloud & Bases de Données",
            icon: Cloud,
            skills: [
                { name: "AWS (EC2, S3, IAM)", level: "Intermédiaire", percent: "60%" },
                { name: "MLOps", level: "Notions de Base", percent: "50%" },
                { name: "MySQL", level: "Intermédiaire", percent: "75%" },
                { name: "PostgreSQL", level: "Intermédiaire", percent: "70%" },
                { name: "NoSQL", level: "Notions de Base", percent: "50%" }
            ]
        }
    ];

    return (
        <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '20px' }}>Compétences Techniques</h1>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                    Une expertise technique variée, allant de l'analyse de données à l'intelligence artificielle la plus moderne.
                </p>
            </motion.div>

            {categories.map((cat, index) => (
                <SkillSection key={index} title={cat.title} skills={cat.skills} icon={cat.icon} delay={index * 0.1} />
            ))}
        </div>
    );
};

export default Skills;
