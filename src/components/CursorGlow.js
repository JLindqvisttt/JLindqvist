/**
 * CursorGlow – Subtle glow effect that follows the mouse cursor (dark mode only).
 */
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const CursorGlow = () => {
    const { isDark } = useTheme();
    const [pos, setPos] = useState({ x: -200, y: -200 });

    useEffect(() => {
        if (!isDark) return;
        const handleMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, [isDark]);

    if (!isDark) return null;

    return (
        <div
            className="cursor-glow"
            style={{
                left: pos.x,
                top: pos.y,
            }}
        />
    );
};

export default CursorGlow;
