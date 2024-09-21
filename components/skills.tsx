import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJsSquare, FaPython } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si'; // Updated for C++
import Image from 'next/image'; // Import Next.js Image component

const Skills = () => {
return (
    <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <div className="skills-grid">
        <div className="skill-item">
            <FaHtml5 className="skill-icon" /> HTML
        </div>
        <div className="skill-item">
            <FaCss3Alt className="skill-icon" /> CSS
        </div>
        <div className="skill-item">
            <FaBootstrap className="skill-icon" /> Bootstrap
        </div>
        <div className="skill-item">
            <Image 
            src="/nextjs.jpeg" 
            alt="Next.js" 
            width={60} 
            height={60} 
            className="skill-icon" 
            />
            Next.js
        </div>
        <div className="skill-item">
            <Image 
            src="/tailwindcss.png" 
            alt="Tailwind CSS" 
            width={60} 
            height={60} 
            className="skill-icon" 
            />
            Tailwind CSS
        </div>
        <div className="skill-item">
            <FaJsSquare className="skill-icon" /> JavaScript
        </div>
        <div className="skill-item">
            <Image 
            src="/C++.png" 
            alt="C++" 
            width={60} 
            height={60} 
            className="skill-icon" 
            />
            C++
        </div>
        <div className="skill-item">
            <FaPython className="skill-icon" /> Python
        </div>
        <div className="skill-item">
            <SiTypescript className="skill-icon" /> TypeScript
        </div>
        </div>
    </div>
);
};

export default Skills;
