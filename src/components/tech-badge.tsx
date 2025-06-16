import type { Tech } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react'; // Default icon

interface TechBadgeProps {
  tech: Tech;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  const IconComponent = tech.Icon || Code;

  return (
    <Card className="group flex flex-col items-center justify-center p-4 text-center h-full shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <CardHeader className="p-2">
        <IconComponent className="h-10 w-10__TEMP_text-primary_TEMP_group-hover:text-accent_TEMP_transition-colors_TEMP_duration-300_TEMP_mb-2" />
      </CardHeader>
      <CardContent className="p-2 flex-grow flex flex-col justify-center">
        <CardTitle className="font-headline text-md font-semibold_TEMP_mb-1">{tech.name}</CardTitle>
        {tech.description && <p className="text-xs text-muted-foreground">{tech.description}</p>}
      </CardContent>
    </Card>
  );
}
