import React from 'react'

import * as Icons from "../utils/icons"

export default function Skills() {
  return (
    <div>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm proficient in the MERN stack and a variety of other technologies used in web development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">MERN Stack</h3>
                <ul className="grid gap-2">
                  <li>
                    <div className="flex items-center gap-2">
                      <Icons.CodepenIcon className="w-6 h-6" />
                      <span>React.js</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Icons.NetworkIcon className="w-6 h-6" />
                      <span>Node.js</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Icons.XIcon className="w-6 h-6" />
                      <span>Express.js</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Icons.DatabaseIcon className="w-6 h-6" />
                      <span>MongoDB</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Other Technologies</h3>
                <ul className="grid gap-2">
                  <li>
                    <div className="flex items-center gap-2">
                      <Icons.EclipseIcon className="w-6 h-6" />
                      <span>JavaScript</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Icons.TypeIcon className="w-6 h-6" />
                      <span>TypeScript</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Icons.HashIcon className="w-6 h-6" />
                      <span>HTML</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Icons.CodepenIcon className="w-6 h-6" />
                      <span>CSS</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Development Tools</h3>
                <ul className="grid gap-2">
                  <li>
                    <div className="flex items-center gap-2">
                      <Icons.GitGraphIcon className="w-6 h-6" />
                      <span>Git</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Icons.GitlabIcon className="w-6 h-6" />
                      <span>GitHub</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Icons.MailboxIcon className="w-6 h-6" />
                      <span>Postman</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <Icons.FigmaIcon className="w-6 h-6" />
                      <span>Figma</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
