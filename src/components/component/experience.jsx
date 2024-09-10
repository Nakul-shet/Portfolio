import React from 'react'

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import * as Icons from "../utils/icons"

export default function Experience() {
  return (
    <div>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have gained valuable experience working on a variety of web development projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>Full Stack Developer Intern (Angular & .NET)</CardTitle>
                  <CardDescription>
                    Developed and maintained a complex e-commerce platform using the MERN stack, including features like
                    secure payment processing, inventory management, and a comprehensive admin dashboard.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Badge variant="secondary">Angular</Badge>
                  <Badge variant="secondary">C#</Badge>
                  <Badge variant="secondary">.NET</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span>
                    <img style={{"width" : "150px" , "height" : "auto"}} src="https://mms.businesswire.com/media/20221118005062/en/1129098/22/TEKsystems-Global-Services-Logo-1.jpg"/>
                  </span>
                  <span>Feb 2023 - June 2023</span>
                </CardFooter>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>Front-End Developer</CardTitle>
                  <CardDescription>
                    Worked on the front-end development of a modern blog platform, creating a sleek and intuitive user
                    interface using React and various UI libraries.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">Responsive Design</Badge>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span>XYZ Inc.</span>
                  <span>2018 - 2020</span>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
    </div>
  )
}
