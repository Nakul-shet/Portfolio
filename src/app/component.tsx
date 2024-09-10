import Navigation from "../components/component/navigation";
import Hero from "../components/component/hero";
import Projects from "../components/component/projects";
import Skills from "../components/component/skills";
import Experience from "../components/component/experience";
import Blog from "../components/component/blog";
import Contacts from "../components/component/contacts";

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navigation/>
      <main className="flex-1">
        <Hero/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Blog/>
        <Contacts/>
      </main>
    </div>
  )
}
