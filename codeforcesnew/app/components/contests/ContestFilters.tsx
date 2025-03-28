"use client";

import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "./input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

interface ContestFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  contestType: string;
  setContestType: (value: string) => void;
  ratedOnly: boolean;
  setRatedOnly: (value: boolean) => void;
}

export function ContestFilters({
  searchTerm,
  setSearchTerm,
  contestType,
  setContestType,
  ratedOnly,
  setRatedOnly,
}: ContestFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="backdrop-blur-md bg-[rgba(18,18,18,0.8)] border border-white/10 rounded-lg p-4 sm:p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2 text-gray-300">
          <Search className="w-5 h-5 text-[hsl(142,72%,29%)]" />
          <Input
            placeholder="Search contests or writers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[hsl(240,4%,16%)]/50 border-[hsl(142,72%,29%)]/20"
          />
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <Filter className="w-5 h-5 text-[hsl(142,72%,29%)]" />
          <Select value={contestType} onValueChange={setContestType}>
            <SelectTrigger className="bg-[hsl(240,4%,16%)]/50 border-[hsl(142,72%,29%)]/20">
              <SelectValue placeholder="Contest Type" />
            </SelectTrigger>
            <SelectContent className="bg-[hsl(240,4%,20%)] border border-gray-600 text-gray-300">
              <SelectItem value="all" className="hover:bg-gray-700">
                All Types
              </SelectItem>
              <SelectItem value="Algorithm" className="hover:bg-gray-700">
                Algorithm
              </SelectItem>
              <SelectItem value="Web" className="hover:bg-gray-700">
                Web
              </SelectItem>
              <SelectItem value="DSA" className="hover:bg-gray-700">
                DSA
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </motion.div>
  );
}
