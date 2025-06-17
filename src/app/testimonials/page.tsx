import TestimonialCard from '@/components/testimonial-card';
import { testimonialsData } from '@/lib/data';
import { Star } from 'lucide-react';

export const metadata = {
  title: 'Testimonials | Code Canvas',
  description: 'Client feedback and testimonials for web and mobile development services.',
};

export default function TestimonialsPage() {
  return (
    <div className="animate-fade-in">
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container text-center">
          <Star className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-gradient-primary pb-1">Colleagues Accolades</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what people I've worked with have to say about their experience working with me.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          {testimonialsData.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial, index) => (
                 <div key={testimonial.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <TestimonialCard testimonial={testimonial} />
                 </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-lg">No testimonials to display at the moment. Check back soon!</p>
          )}
        </div>
      </section>
    </div>
  );
}
