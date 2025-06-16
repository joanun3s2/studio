import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarRating } from '@/components/ui/star-rating';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const fallbackInitials = testimonial.clientName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <Avatar className="h-12 w-12">
          {testimonial.clientImage && (
            <AvatarImage src={testimonial.clientImage} alt={testimonial.clientName} data-ai-hint={testimonial.clientImageHint} />
          )}
          <AvatarFallback>{fallbackInitials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-headline text-lg font-semibold">{testimonial.clientName}</h3>
          {testimonial.company && <p className="text-sm text-muted-foreground">{testimonial.company}</p>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <blockquote className="text-muted-foreground italic mb-4 flex-grow">
          "{testimonial.feedback}"
        </blockquote>
        <StarRating rating={testimonial.rating} />
      </CardContent>
    </Card>
  );
}
