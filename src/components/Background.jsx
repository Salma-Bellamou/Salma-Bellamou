import React from 'react';

const Background = () => {
    return (
        <div
            aria-hidden="true"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                overflow: 'hidden',
                background: 'var(--bg-color)',
                pointerEvents: 'none'
            }}
        >
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-8%',
                width: '45vw',
                height: '45vw',
                maxWidth: '600px',
                maxHeight: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(79, 70, 229, 0.12), transparent 70%)',
                filter: 'blur(10px)'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-15%',
                left: '-10%',
                width: '50vw',
                height: '50vw',
                maxWidth: '650px',
                maxHeight: '650px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(124, 58, 237, 0.10), transparent 70%)',
                filter: 'blur(10px)'
            }} />
        </div>
    );
};

export default Background;
