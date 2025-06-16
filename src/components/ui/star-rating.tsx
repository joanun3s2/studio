"use client";

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({ rating, maxRating = 5, size = 20, className, starClassName }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={index}
            size={size}
            className={cn(
              "transition-colors",
              starValue <= rating ? 'text-accent fill-accent' : 'text-muted-foreground/50',
              starClassName
            )}
            aria-hidden="true"
          />
        );
      })}
      <span className="sr-only">{rating} out of {maxRating} stars</span>
    </div>
  );
}
