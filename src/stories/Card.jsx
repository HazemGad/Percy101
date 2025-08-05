// src/components/Card.jsx
import { Button } from './Button';
import React from 'react';
import "./card.css";
const Card = ({ title, content, footer }) => (
    <div className='test-card' style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '22px',
        maxWidth: '300px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        background: '#f4f4f4'
    }}>
        {title && <h3 style={{ margin: '0 0 12px 0' }}>{title}</h3>}
        <div style={{ marginBottom: '12px' }}>{content}</div>
       <Button/>
        {footer && <div style={{ borderTop: '1px solid #eee', paddingTop: '8px', color: '#888', fontSize: '0.9em' }}>{footer}</div>}
    </div>
  );

export default Card;