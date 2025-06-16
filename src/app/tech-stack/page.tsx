import TechBadge from '@/components/tech-badge';
import { techStackData } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers } from 'lucide-react';

export const metadata = {
  title: 'Tech Stack | Code Canvas',
  description: 'Overview of my technology stack and expertise.',
};

export default function TechStackPage() {
  const categories = Array.from(new Set(techStackData.map(tech => tech.category)));

  return (
    <div className="animate-fade-in">
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container text-center">
          <Layers className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">My Tech Arsenal</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of technologies I'm proficient with, categorized for clarity.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-20">
        <div className="container space-y-12">
          {categories.map((category, catIndex) => (
            <div key={category} className="animate-slide-in-up" style={{ animationDelay: `${catIndex * 0.15}s` }}>
              <h2 className="font-headline text-2xl md:text-3xl font-semibold mb-8 border-b-2 border-primary pb-2 text-foreground">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {techStackData
                  .filter(tech => tech.category === category)
                  .map((tech, techIndex) => (
                    <div key={tech.name} className="animate-slide-in-up" style={{ animationDelay: `${(catIndex * 0.15) + (techIndex * 0.05)}s` }}>
                        <TechBadge tech={tech} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
