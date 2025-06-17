
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectCard from '@/components/project-card';
import TestimonialCard from '@/components/testimonial-card';
import TechBadge from '@/components/tech-badge';
import { projectsData, testimonialsData, techStackData, aboutMeData } from '@/lib/data'; import { ArrowRight, MessageSquare, Briefcase, Download, Star, Send } from 'lucide-react';

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 2); 
  const featuredTestimonials = testimonialsData.slice(0, 2);
  const featuredTech = techStackData.filter(tech => ['React',' Angular', 'Next.js', 'Nodejs', 'Angular', 'Firebase', 'Tailwind CSS'].includes(tech.name));

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary py-20 md:py-32">
        <div className="container text-center">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Crafting <span className="text-gradient-primary">Digital Experiences</span> That Inspire
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            I'm a passionate web and mobile developer specializing in creating modern, responsive, and user-centric applications. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href="/contact">
                Get in Touch <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href="/projects">
                View My Work <Briefcase className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src={aboutMeData.headshotUrl}
                alt={aboutMeData.name}
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={aboutMeData.headshotHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Hi, I'm <span className="text-gradient-primary">{aboutMeData.name.split(' ')[0]}</span></h2>
              <p className="text-lg text-muted-foreground mb-6">{aboutMeData.professionalSummary[0]}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/about">Learn More About Me</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={aboutMeData.resumeUrl} target="_blank" download>
                    Download Resume <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-12">
            A glimpse into some of the work I'm most proud of.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="animate-slide-in-up" style={{ animationDelay: `${(index * 0.2) + 0.2}s` }}>
                 <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary hover:text-accent text-lg">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Highlights */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">My Core Technologies</h2>
          <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Tools and technologies I use to build high-quality applications.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {featuredTech.map((tech, index) => (
              <div key={tech.name} className="animate-slide-in-up" style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}>
                <TechBadge tech={tech} />
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary hover:text-accent text-lg">
              <Link href="/tech-stack">
                Explore full techs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Highlights */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Kind words from people I've had the pleasure to work with.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="animate-slide-in-up" style={{ animationDelay: `${(index * 0.2) + 0.2}s` }}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary hover:text-accent text-lg">
              <Link href="/testimonials">
                Read more <Star className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-xl mx-auto mb-10">
            Let's discuss how I can help bring your vision to life.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-background/20 hover:bg-background/30 border-primary-foreground text-primary-foreground hover:text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="/contact">
              Contact now <Send className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
