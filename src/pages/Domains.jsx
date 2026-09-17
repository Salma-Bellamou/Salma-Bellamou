import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Cloud, Terminal } from 'lucide-react';

const Domains = () => {
    const domains = [
        {
            title: "Data & Analyse",
            icon: Database,
            color: "var(--accent)",
            description: "Exploitation et structuration des données pour révéler des tendances et éclairer la prise de décision.",
            details: [
                "Data Analytics et Data Visualisation",
                "Business Intelligence, statistiques et probabilités",
                "Data Cleaning et gestion de la qualité des données",
                "SQL avancé, Power BI, Excel avancé"
            ]
        },
        {
            title: "IA & Machine Learning",
            icon: Brain,
            color: "var(--accent-2)",
            description: "Conception de modèles intelligents capables d'apprendre à partir des données, du texte à l'image.",
            details: [
                "Machine Learning et Deep Learning",
                "NLP (traitement du langage naturel)",
                "Scikit-learn, TensorFlow, Keras, PyTorch",
                "Éthique et IA responsable"
            ]
        },
        {
            title: "Cloud & Bases de Données",
            icon: Cloud,
            color: "var(--accent)",
            description: "Hébergement, stockage et gestion des données à grande échelle sur des infrastructures modernes.",
            details: [
                "AWS (EC2, S3, IAM)",
                "MLOps",
                "MySQL, PostgreSQL, NoSQL",
                "Gestion et création de bases de données"
            ]
        },
        {
            title: "Développement & Outils",
            icon: Terminal,
            color: "var(--accent-2)",
            description: "Une base solide en programmation et en outils collaboratifs pour mener un projet de bout en bout.",
            details: [
                "Python, SQL, Java, C++, POO",
                "Web Scraping (Requests, BeautifulSoup)",
                "Git/GitHub, Jupyter Notebook",
                "Gestion de projet Agile"
            ]
        }
    ];

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '50px' }}>
            <motion.h1
                className="text-gradient"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '60px' }}
            >
                Mes Domaines d'Expertise
            </motion.h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '28px' }}>
                {domains.map((domain, index) => (
                    <motion.div
                        key={index}
                        className="card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{ padding: '30px', display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <domain.icon size={28} color={domain.color} />
                            </div>
                            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{domain.title}</h2>
                        </div>

                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '25px', flexGrow: 1 }}>
                            {domain.description}
                        </p>

                        <ul style={{ paddingLeft: '20px', color: 'var(--text-primary)' }}>
                            {domain.details.map((item, idx) => (
                                <li key={idx} style={{ marginBottom: '10px', lineHeight: '1.5' }}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Domains;
