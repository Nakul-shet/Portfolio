import React from 'react'

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Blog() {
  return (
    <div>
        <section>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Blog</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out my technical blog where I share my insights and experiences in web development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>Optimizing React Performance</CardTitle>
                  <CardDescription>
                    Explore various techniques to improve the performance of your React applications, including code
                    splitting, memoization, and lazy loading.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Performance</Badge>
                  <Badge variant="secondary">Optimization</Badge>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
    </div>
  )
}
