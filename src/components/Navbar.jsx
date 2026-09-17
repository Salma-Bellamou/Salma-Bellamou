import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: { opacity: 0, x: "100%" },
        open: { opacity: 1, x: 0 }
    };

    return (
        <nav style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            zIndex: 1000,
            padding: '15px 20px',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border)',
            boxShadow: '0 1px 0 rgba(18,19,26,0.02)'
        }}>
            <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                <Sparkles color="var(--accent)" size={22} />
                <span className="text-gradient" style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>SALMA BELLAMOU</span>
            </Link>

            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
                <Link to="/" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s', fontSize: '0.9rem', fontWeight: 500 }}>Accueil</Link>
                <Link to="/about" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s', fontSize: '0.9rem', fontWeight: 500 }}>À Propos</Link>
                <Link to="/domains" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s', fontSize: '0.9rem', fontWeight: 500 }}>Domaines</Link>
                <Link to="/skills" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s', fontSize: '0.9rem', fontWeight: 500 }}>Compétences</Link>
                <Link to="/projects" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s', fontSize: '0.9rem', fontWeight: 500 }}>Projets</Link>

                <a href="/CV_Salma_Bellamou.pdf" download="CV_Salma_Bellamou.pdf" className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '0.85rem' }}>
                    CV
                </a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="mobile-menu-icon" onClick={toggleMenu} style={{ cursor: 'pointer', color: 'var(--text-primary)' }}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: '70px',
                            left: 0,
                            width: '100%',
                            height: 'calc(100vh - 70px)',
                            background: 'var(--bg-color)',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '30px',
                            padding: '20px'
                        }}
                    >
                        <Link to="/" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Accueil</Link>
                        <Link to="/about" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>À Propos</Link>
                        <Link to="/domains" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Domaines</Link>
                        <Link to="/skills" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Compétences</Link>
                        <Link to="/projects" onClick={toggleMenu} style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Projets</Link>

                        <a href="/CV_Salma_Bellamou.pdf" download="CV_Salma_Bellamou.pdf" className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '1.2rem', marginTop: '20px' }}>
                            Télécharger CV
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
