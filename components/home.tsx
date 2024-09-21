"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Main = () => {
    const titles = [
        "Learning Generative AI",
        "Frontend Developer",
        "Python Programmer",
        "C++ Programmer",
        "Aspiring Technologist",
    ];

    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000); // Change title every 3 seconds

        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <div className="main">
            <div className='child-container1'>
                <h1 className='title1'>Hello, I&apos;m <strong className='title1'>Muskaan Fayyaz</strong></h1>
                <p>
                    I'm a <strong>{titles[currentTitleIndex]}</strong>,<br />
                    specializing in web development.
                </p>
                <br /><br />
                <a href="#skills" className='btn'>Skills</a>
                <a href="#projects" className='btn'>Projects</a>
            </div>
            <div className='child-container2'>
                <Image src="/main.png" alt="My Photo" width={200} height={200} priority className="rounded-image" />
            </div>
        </div>
    );
};

export default Main;
