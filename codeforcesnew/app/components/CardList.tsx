"use client"

import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useInView
} from "framer-motion"
import { useRef } from "react"

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance])
}

const data = [
    {
        id: 1,
        title: "ICPC World Finals 2025",
        description: "The most prestigious competitive programming event in the world. Teams from top universities compete for the title of World Champions.",
        image: "/photos/cityscape/1.jpg",
        status: "upcoming",
        statusText: "Live",
        location: "London, UK",
        sponsors: ["Google", "JetBrains", "AWS"],
        type: "World Championship"
    },
    {
        id: 2,
        title: "Codeforces Round #949 (Div. 2)",
        description: "Medium difficulty contest featuring algorithmic challenges and data structure problems. Perfect for improving your competitive programming skills!",
        image: "/photos/cityscape/2.jpg",
        status: "upcoming",
        statusText: "March 20, 2024",
        location: "Mumbai, India",
        sponsors: ["JetBrains", "Telegram"],
        type: "Codeforces Round"
    },
    {
        id: 3,
        title: "Facebook Hacker Cup 2024",
        description: "Meta's annual programming competition. Tackle challenging problems and compete with programmers worldwide.",
        image: "/photos/cityscape/3.jpg",
        status: "upcoming",
        statusText: "March 25, 2024",
        location: "Paris, France",
        sponsors: ["Meta", "Instagram", "WhatsApp"],
        type: "Major Competition"
    },
];

function Image({ id }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 100)
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
    
    // Checks if the card is in view
    const isInView = useInView(ref, { once: true })

    // Get event data
    const event = data.find(item => item.id === id)

    return (
        <motion.section 
            ref={ref} 
            className="img-container"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div 
                className="content-wrapper"
                whileHover={{ scale: 1.02, rotate: [0, -1, 1, 0] }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <motion.div 
                    className="text-content" 
                    style={{ opacity }}
                    whileHover={{ x: 10 }}
                >
                    <motion.h1 
                        className="text-4xl font-bold mb-4 glitch-text"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        whileHover={{
                            textShadow: ["2px 2px 0px red", "-2px -2px 0px blue"],
                            transition: { repeat: Infinity, duration: 0.2 }
                        }}
                    >
                        {event?.title}
                    </motion.h1>
                    <p className="text-lg mb-4">{event?.description}</p>
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-[#4ff0b7]">📍</span>
                            <span>{event?.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#4ff0b7]">⏰</span>
                            <span>{event?.statusText}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#4ff0b7]">🎯</span>
                            <span>{event?.type}</span>
                        </div>
                    </div>
                    <div className="flex gap-2 mb-4">
                        {event?.sponsors.map((sponsor, index) => (
                            <motion.span 
                                key={index} 
                                className="bg-[#4ff0b7]/20 text-[#4ff0b7] px-3 py-1 rounded-full text-sm"
                                whileHover={{ scale: 1.1 }}
                            >
                                {sponsor}
                            </motion.span>
                        ))}
                    </div>
                    <motion.button 
                        className="bg-[#4ff0b7] hover:bg-[#4ff0b7]/80 text-black px-6 py-2 rounded-lg font-semibold transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Register Now
                    </motion.button>
                </motion.div>
                <motion.div 
                    className="image-frame" 
                    ref={ref} 
                    style={{ opacity }}
                    whileHover={{ scale: 1.02 }}
                >
                    <motion.img
                        src={event?.image}
                        alt={`${event?.location} cityscape`}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </motion.div>
            </motion.div>
            <motion.h2
                className={`font-lg ${event?.status === 'live' ? 'text-red-500' : 'text-[#4ff0b7]'}`}
                style={{ y, opacity }}
                animate={{ x: [0, -5, 5, 0], transition: { repeat: Infinity, duration: 0.5 } }}
            >
                {event?.statusText}
            </motion.h2>
        </motion.section>
    )
}

export default function Parallax() {
    return (
        <div id="example">
            {data.map((image) => (
                <Image key={image.id} id={image.id} />
            ))}
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`
        .img-container {
            height: 60vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .content-wrapper {
            display: flex;
            align-items: center;
            gap: 4rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .text-content {
            flex: 1;
            color: white;
            padding-right: 2rem;
        }

        .image-frame {
            width: 400px;
            height: 400px;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .image-frame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media (max-width: 768px) {
            .content-wrapper {
                flex-direction: column;
                gap: 2rem;
            }

            .text-content {
                text-align: center;
                padding-right: 0;
                padding-bottom: 2rem;
            }

            .image-frame {
                width: 300px;
                height: 300px;
            }
        }

        .glitch-text {
            font-family: "Azeret Mono", monospace;
        }
    `}</style>
    )
}
