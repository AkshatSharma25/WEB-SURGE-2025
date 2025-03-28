"use client"; 
import React from 'react';
import { motion } from "framer-motion";
import GlitchText from '../components/GlitchText';
import NoiseGlitchBackground from '../components/Glitch';
export default function temp() {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
        <GlitchText text="GLITCH" />
      </div>
    );
};
