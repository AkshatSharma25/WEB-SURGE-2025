"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2 } from "lucide-react";
import { AnimatedHeader } from "@/app/components/contests/AnimatedHeader";
import { ContestFilters } from "@/app/components/contests/ContestFilters";
import { ContestCard } from "@/app/components/contests/ContestCard";

const contests = [
  {
    id: 1,
    name: "Global Coding Championship",
    type: "Algorithm",
    date: "2024-03-25",
    time: "14:00",
    duration: "3 hours",
    writer: "John Doe",
    rated: true,
    status: "upcoming",
  },
  {
    id: 2,
    name: "Web Development Challenge",
    type: "Web",
    date: "2024-03-20",
    time: "16:00",
    duration: "2 hours",
    writer: "Jane Smith",
    rated: true,
    status: "upcoming",
  },
  {
    id: 3,
    name: "Data Structures Marathon",
    type: "DSA",
    date: "2024-02-15",
    time: "10:00",
    duration: "4 hours",
    writer: "Mike Johnson",
    rated: false,
    status: "past",
  },
];

export default function ContestsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contestType, setContestType] = useState("all");
  const [ratedOnly, setRatedOnly] = useState(false);

  const filteredContests = contests.filter((contest) => {
    const matchesSearch = contest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contest.writer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = contestType === "all" || contest.type === contestType;
    const matchesRated = !ratedOnly || contest.rated;
    return matchesSearch && matchesType && matchesRated;
  });

  const upcomingContests = filteredContests.filter(contest => contest.status === "upcoming");
  const pastContests = filteredContests.filter(contest => contest.status === "past");

  return (
    <div className="min-h-screen bg-black bg-[linear-gradient(rgba(0,255,0,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(0,255,0,0.03)_2px,transparent_2px)] bg-[size:50px_50px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto p-6 space-y-8"
      >
        <AnimatedHeader />

        <ContestFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          contestType={contestType}
          setContestType={setContestType}
          ratedOnly={ratedOnly}
          setRatedOnly={setRatedOnly}
        />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-300">
            <Code2 className="text-[hsl(142,72%,29%)]" />
            Upcoming Contests
          </h2>
          <div className="grid gap-4">
            {upcomingContests.map((contest, index) => (
              <ContestCard key={contest.id} contest={contest} index={index} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-300">
            <Code2 className="text-[hsl(142,72%,29%)]" />
            Past Contests
          </h2>
          <div className="grid gap-4">
            {pastContests.map((contest, index) => (
              <ContestCard
                key={contest.id}
                contest={contest}
                index={index}
              />
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}