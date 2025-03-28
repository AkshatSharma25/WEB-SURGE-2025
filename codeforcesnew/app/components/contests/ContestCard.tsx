"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, User, Trophy } from "lucide-react";

interface ContestCardProps {
  contest: {
    id: number;
    name: string;
    type: string;
    date: string;
    time: string;
    duration: string;
    writer: string;
    rated: boolean;
  };
  index: number;
}

export function ContestCard({ contest, index }: ContestCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="p-6 rounded-lg backdrop-blur-md bg-[rgba(18,18,18,0.8)] border border-white/10 text-gray-300"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[hsl(142,72%,55%)]">
            {contest.name}
          </h3>
          <div className="flex items-center gap-2 text-gray-400 mt-2">
            <User className="w-4 h-4 text-gray-400" />
            <span>{contest.writer}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>{contest.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span>{contest.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-gray-400" />
            <span>{contest.rated ? "Rated" : "Unrated"}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
