import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Copy } from 'lucide-react';

const Toast = ({ message, isVisible, onClose, actionLabel, onAction }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(20, 20, 35, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid var(--accent-cyan)',
                        padding: '16px 24px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                        zIndex: 1000,
                        minWidth: '300px',
                        maxWidth: '90%'
                    }}
                >
                    <div style={{
                        background: 'rgba(0, 243, 255, 0.1)',
                        borderRadius: '50%',
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Check size={20} color="var(--accent-cyan)" />
                    </div>

                    <div style={{ flex: 1 }}>
                        <p style={{ margin: 0, color: 'white', fontWeight: '500', fontSize: '0.95rem' }}>
                            {message}
                        </p>
                    </div>

                    {actionLabel && (
                        <button
                            onClick={onAction}
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--accent-cyan)',
                                color: 'var(--accent-cyan)',
                                padding: '6px 12px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                transition: 'all 0.2s'
                            }}
                        >
                            <Copy size={14} />
                            {actionLabel}
                        </button>
                    )}

                    <button
                        onClick={onClose}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-secondary)',
                            cursor: 'pointer',
                            padding: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '8px'
                        }}
                    >
                        <X size={18} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
