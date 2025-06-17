import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { aboutMeData } from '@/lib/data';
import { CheckCircle, Download, UserCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Me | Code Canvas',
  description: 'Learn more about my professional background, skills, and passion for development.',
};

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container text-center">
          <UserCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">About {aboutMeData.name.split(' ')[0]}</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {aboutMeData.title}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1 flex flex-col items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6 rounded-full overflow-hidden shadow-2xl group">
                <Image
                  src={aboutMeData.headshotUrl}
                  alt={aboutMeData.name}
                  width={320}
                  height={320}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={aboutMeData.headshotHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-full"></div>
              </div>
              <h2 className="font-headline text-2xl font-semibold_TEMP_text-center_TEMP_mb-2">{aboutMeData.name}</h2>
              <p className="text-muted-foreground text-center_TEMP_mb-6">{aboutMeData.title}</p>

              {/* This will be worked in ST-04
              <Button asChild className="w-full max-w-xs bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href={aboutMeData.resumeUrl} target="_blank" download>
                  Download My Resume <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button> */}
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-headline text-2xl md:text-3xl font-semibold_TEMP_mb-6_TEMP_text-foreground pb-1">My Journey & Philosophy</h3>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg">
                {aboutMeData.professionalSummary.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <h3 className="font-headline text-2xl md:text-3xl font-semibold_TEMP_mt-12_TEMP_mb-6_TEMP_text-foreground pt-5 pb-2">Core Skills</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-muted-foreground">
                {aboutMeData.skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
                 <div className="mt-12 text-center lg:text-left">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href="/contact">Let's Collaborate</Link>
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
