"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import CardList from '../components/CardList';
import GlitchText from '../components/GlitchText';
export default function HomePage() {
    const { scrollYProgress } = useScroll();

    // Calculate opacity for the header based on scsdjflsftion
    const headerOpacity = useTransform(scrollYProgress, [0, 0.8, 0.85], [1, 1, 0]);

    return (
        <div className="relative  min-h-screen bg-black">
            <motion.div
                className="fixed top-0 left-0 w-full"
                style={{ opacity: headerOpacity }}
            >
                <div className='relative ml-[5vw] h-[20vh]'>
                    <ParticleBackground />
                    <motion.h1
                        layoutId="codeforces-title"
                        className="absolute top-4 left-4 text-6xl font-bold text-white italic cursor-pointer glitch-text"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                        whileHover={{
                            opacity: [0.5, 1, 0.5],
                            transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                       <div className='flex items-center justify-center gap-2'>
                       <img src="/codeforces.png" width={50} alt="" />
                       <GlitchText text="Codeforces" />
                       </div>
                    </motion.h1>
                </div>
            </motion.div>

            {/* Scrollable content section */}
            <div className="relative pt-[20vh]">
                <CardList />
                <div className='h-[200vh] w-full bg-red-500'>
                    hello world
                </div>
            </div>
        </div>
    );
} 