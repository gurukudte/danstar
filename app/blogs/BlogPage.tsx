"use client";



import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { motion } from "framer-motion";
import { blogs } from "./blog-data/blogs";
import { ArrowRight } from "lucide-react";

export default function BlogDashboardPage() {
    return (
      <main className="max-w-8xl mx-auto px-4 py-6">
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

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-border hover:border-primary/50 transition-colors duration-300 group">
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="h-full flex flex-col"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg md:text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {blog.contentTitle}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3 mt-2">
                      {blog.contentDescription.substring(0, 150) + "..."}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto pt-0">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {/* {blog.date || "May 15, 2023"} */}
                      </span>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary/80 hover:bg-primary/10"
                      >
                        <Link
                          href={`/blogs/${blog.slug}`}
                          className="flex items-center gap-1.5"
                        >
                          Read more
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </section>
      </main>
    );
}


