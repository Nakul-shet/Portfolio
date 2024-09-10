import React from 'react'

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  return (
    <div>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the web applications I've built using the MERN stack.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>E-commerce Platform</CardTitle>
                  <CardDescription>
                    A full-featured e-commerce platform built with the MERN stack, featuring a responsive design, secure
                    payment processing, and a comprehensive admin dashboard.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Express</Badge>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Live Demo
                  </Link>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    GitHub
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>Blog Application</CardTitle>
                  <CardDescription>
                    A modern blog platform with a sleek and intuitive interface, allowing users to create, edit, and
                    manage their blog posts.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Express</Badge>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Live Demo
                  </Link>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    GitHub
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
    </div>
  )
}
