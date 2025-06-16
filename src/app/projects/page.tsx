import ProjectCard from '@/components/project-card';
import { projectsData } from '@/lib/data';
import { Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Projects | Code Canvas',
  description: 'Showcase of completed web and mobile development projects.',
};

export default function ProjectsPage() {
  return (
    <div className="animate-fade-in">
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container text-center">
          <Briefcase className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">My Portfolio</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's a collection of projects I've worked on, demonstrating my skills and experience in various technologies.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          {projectsData.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <div key={project.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-lg">No projects to display at the moment. Check back soon!</p>
          )}
        </div>
      </section>
    </div>
  );
}
