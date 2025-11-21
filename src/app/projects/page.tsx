import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="all-projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  All Projects
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px]">
                  A collection of all my projects, experiments, and tools {`I've`} built over time.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="space-y-16">
            <div>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-8">
                  Projects
                </div>
              </BlurFade>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {DATA.projects.map((project, id) => (
                  <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                  >
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </div>
            </div>

            <div>
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-8">
                  Vibe Coding
                </div>
              </BlurFade>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {DATA.vibes.map((project, id) => (
                  <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 5 + id * 0.05}
                  >
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </div>
            </div>

            <div>
              <BlurFade delay={BLUR_FADE_DELAY * 6}>
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-8">
                  Tools
                </div>
              </BlurFade>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {DATA.tools.map((tool, id) => (
                  <BlurFade
                    key={tool.title}
                    delay={BLUR_FADE_DELAY * 7 + id * 0.05}
                  >
                    <ProjectCard
                      href={tool.href}
                      title={tool.title}
                      description={tool.description}
                      dates={tool.dates}
                      tags={tool.technologies}
                      image={tool.image}
                      video={tool.video}
                      links={tool.links}
                    />
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
