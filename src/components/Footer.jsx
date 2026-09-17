import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '40px 0', marginTop: '80px', textAlign: 'center' }}>
            <div className="container">
                <h2 className="text-gradient" style={{ marginBottom: '20px' }}>SALMA BELLAMOU</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
                    <a href="https://www.linkedin.com/in/salma-bellamou-3212a433b" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                        <Linkedin />
                    </a>
                    <a href="https://github.com/Salma-Bellamou" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                        <Github />
                    </a>
                    <a href="mailto:salmabellamou@gmail.com" title="salmabellamou@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                        <Mail />
                    </a>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © 2026 Salma Bellamou.
                </p>
            </div>
        </footer >
    );
};

export default Footer;
