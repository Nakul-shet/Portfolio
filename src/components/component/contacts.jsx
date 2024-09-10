import React from 'react'

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import * as Icons from "../utils/icons"

export default function Contacts() {
  return (
    <div>
        <section id="social-links" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Connect with Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find me on LinkedIn and GitHub, or reach out through the contact form.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">LinkedIn</h3>
                <div className="flex items-center gap-2">
                  <Icons.LinkedinIcon className="w-6 h-6" />
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    linkedin.com/in/johndoe
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">GitHub</h3>
                <div className="flex items-center gap-2">
                  <Icons.GitlabIcon className="w-6 h-6" />
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    github.com/johndoe
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Contact</h3>
                <form className="space-y-2">
                  <Input type="text" placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                  <Textarea placeholder="Message" rows={3} />
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
