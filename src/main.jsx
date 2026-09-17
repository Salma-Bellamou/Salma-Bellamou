import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

window.onerror = function (message, source, lineno, colno, error) {
    document.body.innerHTML = `<div style="color: red; padding: 20px;">
        <h1>Application Error</h1>
        <p>${message}</p>
        <pre>${error?.stack}</pre>
    </div>`;
};

try {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
    );
} catch (error) {
    console.error("Root Render Error:", error);
    document.body.innerHTML = `<h1>Critical Error: ${error.message}</h1>`;
}
