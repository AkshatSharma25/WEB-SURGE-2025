"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Award,
  Calendar,
  Code,
  Flag,
  Github,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/profile/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/profile/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/profile/avatar"
import { Badge } from "../components/profile/badge"
import { Button } from "../components/profile/button"
import { Progress } from "../components/profile/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Sample data for the rating chart
const ratingData = [
  { date: "Jan", rating: 1400 },
  { date: "Feb", rating: 1450 },
  { date: "Mar", rating: 1420 },
  { date: "Apr", rating: 1500 },
  { date: "May", rating: 1550 },
  { date: "Jun", rating: 1600 },
  { date: "Jul", rating: 1650 },
  { date: "Aug", rating: 1700 },
  { date: "Sep", rating: 1750 },
  { date: "Oct", rating: 1800 },
]

// Sample data for contests
const contestsData = [
  {
    id: 1,
    name: "Codeforces Round #789",
    rank: 1245,
    oldRating: 1750,
    newRating: 1800,
    change: "+50",
    date: "Oct 15, 2023",
  },
  {
    id: 2,
    name: "Codeforces Round #788",
    rank: 1500,
    oldRating: 1700,
    newRating: 1750,
    change: "+50",
    date: "Sep 30, 2023",
  },
  {
    id: 3,
    name: "Codeforces Round #787",
    rank: 1300,
    oldRating: 1650,
    newRating: 1700,
    change: "+50",
    date: "Sep 15, 2023",
  },
  {
    id: 4,
    name: "Codeforces Round #786",
    rank: 1400,
    oldRating: 1600,
    newRating: 1650,
    change: "+50",
    date: "Aug 30, 2023",
  },
  {
    id: 5,
    name: "Codeforces Round #785",
    rank: 1350,
    oldRating: 1550,
    newRating: 1600,
    change: "+50",
    date: "Aug 15, 2023",
  },
]

// Sample data for submissions
const submissionsData = [
  {
    id: 1,
    problem: "A. Watermelon",
    verdict: "Accepted",
    language: "C++",
    time: "15ms",
    memory: "0KB",
    date: "Oct 16, 2023",
  },
  {
    id: 2,
    problem: "B. Theatre Square",
    verdict: "Wrong Answer",
    language: "Python",
    time: "46ms",
    memory: "0KB",
    date: "Oct 15, 2023",
  },
  {
    id: 3,
    problem: "C. Team",
    verdict: "Accepted",
    language: "Java",
    time: "124ms",
    memory: "0KB",
    date: "Oct 14, 2023",
  },
  {
    id: 4,
    problem: "D. Way Too Long Words",
    verdict: "Accepted",
    language: "C++",
    time: "15ms",
    memory: "0KB",
    date: "Oct 13, 2023",
  },
  {
    id: 5,
    problem: "E. Next Round",
    verdict: "Time Limit Exceeded",
    language: "Python",
    time: "2000ms",
    memory: "0KB",
    date: "Oct 12, 2023",
  },
]

// Sample data for friends
const friendsData = [
  { id: 1, name: "tourist", rating: 3800, rank: "Legendary Grandmaster" },
  { id: 2, name: "Petr", rating: 3600, rank: "International Grandmaster" },
  { id: 3, name: "ecnerwala", rating: 3400, rank: "Grandmaster" },
  { id: 4, name: "Benq", rating: 3200, rank: "International Master" },
  { id: 5, name: "Um_nik", rating: 3000, rank: "Master" },
]

export default function Profile() {
  const [animateChart, setAnimateChart] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setAnimateChart(true)
    const timer = setTimeout(() => setProgress(78), 500)
    return () => clearTimeout(timer)
  }, [])

  // Function to determine color based on rating
  const getRatingColor = (rating: number) => {
    if (rating >= 2400) return "text-red-600"
    if (rating >= 2100) return "text-orange-600"
    if (rating >= 1900) return "text-violet-600"
    if (rating >= 1600) return "text-blue-600"
    if (rating >= 1400) return "text-cyan-600"
    if (rating >= 1200) return "text-green-600"
    return "text-gray-600"
  }

  // Function to determine rank based on rating
  const getRank = (rating: number) => {
    if (rating >= 2400) return "Grandmaster"
    if (rating >= 2100) return "Master"
    if (rating >= 1900) return "Candidate Master"
    if (rating >= 1600) return "Expert"
    if (rating >= 1400) return "Specialist"
    if (rating >= 1200) return "Pupil"
    return "Newbie"
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=128&width=128" />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="flex-grow w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold">codingmaster</h1>
                <div className="flex items-center gap-2 mt-1">
                  <Badge>{getRank(2700)}</Badge>
                  <span className={`font-bold ${getRatingColor(2700)}`}>2700</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, USA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    <span>codingmaster.dev</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    <span>@codingmaster</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap gap-2"
              >
                <Button>
                  <Users className="h-4 w-4" />
                  <span>Follow</span>
                </Button>
                <Button>
                  <MessageSquare className="h-4 w-4" />
                  <span>Message</span>
                </Button>
                <Button>
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-6 w-full max-w-full px-4"
            >
              <Card className="w-full">
                <CardContent className="p-4 flex items-center gap-3 w-full">
                  <Trophy className="h-8 w-8 text-amber-500" />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-500">Contests</p>
                    <p className="text-xl font-bold">42</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardContent className="p-4 flex items-center gap-3 w-full">
                  <Code className="h-8 w-8 text-blue-500" />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-500">Problems Solved</p>
                    <p className="text-xl font-bold">387</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardContent className="p-4 flex items-center gap-3 w-full">
                  <Award className="h-8 w-8 text-purple-500" />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-500">Max Rank</p>
                    <p className="text-xl font-bold">1245</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardContent className="p-4 flex items-center gap-3 w-full">
                  <Calendar className="h-8 w-8 text-green-500" />
                  <div className="flex-grow">
                    <p className="text-sm text-gray-500">Joined</p>
                    <p className="text-xl font-bold">2 years</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="contests">Contests</TabsTrigger>
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="md:col-span-2"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Rating History</CardTitle>
                    <CardDescription>Your performance over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={ratingData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis domain={["dataMin - 100", "dataMax + 100"]} />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="rating"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                            isAnimationActive={animateChart}
                            animationDuration={2000}
                            animationEasing="ease-in-out"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Problem Tags</CardTitle>
                      <CardDescription>Your strengths and weaknesses</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Dynamic Programming</span>
                          <span className="text-sm font-medium">78%</span>
                        </div>
                        <Progress value={progress} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Graphs</span>
                          <span className="text-sm font-medium">65%</span>
                        </div>
                        <Progress value={65} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Data Structures</span>
                          <span className="text-sm font-medium">82%</span>
                        </div>
                        <Progress value={82} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Math</span>
                          <span className="text-sm font-medium">70%</span>
                        </div>
                        <Progress value={70} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Greedy</span>
                          <span className="text-sm font-medium">90%</span>
                        </div>
                        <Progress value={90} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 flex items-center gap-1">
                          <Trophy className="h-3 w-3" />
                          <span>Top 100 Finalist</span>
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          <span>100 Day Streak</span>
                        </Badge>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200 flex items-center gap-1">
                          <Flag className="h-3 w-3" />
                          <span>Regional Winner</span>
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 flex items-center gap-1">
                          <Award className="h-3 w-3" />
                          <span>Problem Setter</span>
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contests">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Contest History</CardTitle>
                  <CardDescription>Your performance in recent contests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Contest</th>
                          <th className="text-left py-3 px-4 font-medium">Rank</th>
                          <th className="text-left py-3 px-4 font-medium">Old Rating</th>
                          <th className="text-left py-3 px-4 font-medium">New Rating</th>
                          <th className="text-left py-3 px-4 font-medium">Change</th>
                          <th className="text-left py-3 px-4 font-medium">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <AnimatePresence>
                          {contestsData.map((contest, index) => (
                            <motion.tr
                              key={contest.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                              className="border-b hover:bg-gray-50"
                            >
                              <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer">{contest.name}</td>
                              <td className="py-3 px-4">{contest.rank}</td>
                              <td className="py-3 px-4">{contest.oldRating}</td>
                              <td className="py-3 px-4">{contest.newRating}</td>
                              <td
                                className={`py-3 px-4 ${Number.parseInt(contest.change) > 0 ? "text-green-600" : "text-red-600"}`}
                              >
                                {contest.change}
                              </td>
                              <td className="py-3 px-4 text-gray-500">{contest.date}</td>
                            </motion.tr>
                          ))}
                        </AnimatePresence>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="submissions">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Submissions</CardTitle>
                  <CardDescription>Your latest problem submissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Problem</th>
                          <th className="text-left py-3 px-4 font-medium">Verdict</th>
                          <th className="text-left py-3 px-4 font-medium">Language</th>
                          <th className="text-left py-3 px-4 font-medium">Time</th>
                          <th className="text-left py-3 px-4 font-medium">Memory</th>
                          <th className="text-left py-3 px-4 font-medium">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <AnimatePresence>
                          {submissionsData.map((submission, index) => (
                            <motion.tr
                              key={submission.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                              className="border-b hover:bg-gray-50"
                            >
                              <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer">
                                {submission.problem}
                              </td>
                              <td
                                className={`py-3 px-4 ${submission.verdict === "Accepted"
                                  ? "text-green-600"
                                  : submission.verdict === "Wrong Answer"
                                    ? "text-red-600"
                                    : "text-orange-600"
                                  }`}
                              >
                                {submission.verdict}
                              </td>
                              <td className="py-3 px-4">{submission.language}</td>
                              <td className="py-3 px-4">{submission.time}</td>
                              <td className="py-3 px-4">{submission.memory}</td>
                              <td className="py-3 px-4 text-gray-500">{submission.date}</td>
                            </motion.tr>
                          ))}
                        </AnimatePresence>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="friends">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Friends</CardTitle>
                  <CardDescription>Your Codeforces connections</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AnimatePresence>
                      {friendsData.map((friend, index) => (
                        <motion.div
                          key={friend.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <Avatar>
                                  <AvatarImage
                                    src={`/placeholder.svg?height=40&width=40&text=${friend.name.charAt(0)}`}
                                    alt={friend.name}
                                  />
                                  <AvatarFallback>{friend.name.charAt(0).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{friend.name}</p>
                                  <p className={`text-sm ${getRatingColor(friend.rating)}`}>
                                    {friend.rank} ({friend.rating})
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

