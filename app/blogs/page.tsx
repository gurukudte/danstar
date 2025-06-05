"use client";



import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import { motion } from "framer-motion";
import { blogs } from "./data/blogs";

export default function BlogDashboardPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    Danstar Career Counselling Blogs
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Learn everything about{" "}
                    <strong>career counselling in Bangalore</strong>, how to choose the
                    right career path, and success stories from students who found their
                    passion.
                </p>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog, idx) => (
                    <motion.div
                        key={blog.slug}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                                y: -4,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <Card className="group hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {blog.title}
                                    </CardTitle>
                                    <CardDescription>{blog.keywords.join(", ")}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-col justify-between h-full">
                                    <Button asChild className="mt-auto w-fit">
                                        <Link
                                            href={`/blogs/${blog.slug}`}
                                            className="flex items-center gap-2 text-white"
                                        >
                                            Read More <FaArrowRight />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                ))}
            </section>
        </main>
    );
}


