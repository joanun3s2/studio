
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { submitInquiryAction } from '@/actions/submit-inquiry';
import type { InquiryFormData } from '@/types';
import { budgetOptions } from '@/lib/data';
import { Loader2, Send, RefreshCw } from 'lucide-react';

const inquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  projectDescription: z.string().min(10, { message: "Project description must be at least 10 characters." }),
  budget: z.string().optional(),
});

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{ success: boolean; message: string; recap?: string } | null>(null);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, reset, control, setValue } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit: SubmitHandler<InquiryFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmissionResult(null);
    try {
      const result = await submitInquiryAction(data);
      setSubmissionResult(result);
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        reset();
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
      setSubmissionResult({ success: false, message: "An unexpected error occurred." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTryAgain = () => {
    setSubmissionResult(null);
    reset();
  };

  if (submissionResult?.success && submissionResult.recap) {
    return (
      <Card className="w-full max-w-lg mx-auto animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-gradient-primary">Inquiry Submitted!</CardTitle>
          <CardDescription>Thank you for reaching out. Here's a summary of your submission, as understood by our AI assistant:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-secondary/50 rounded-md border border-border">
            <h4 className="font-semibold mb-2 text-foreground">AI Generated Recap:</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{submissionResult.recap}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleTryAgain} variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Submit Another Inquiry
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
  if (submissionResult && !submissionResult.success) {
     return (
      <Card className="w-full max-w-lg mx-auto animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-destructive">Submission Failed</CardTitle>
          <CardDescription>{submissionResult.message || "Something went wrong."}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center">
          <Button onClick={handleTryAgain} variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Try Again
          </Button>
        </CardFooter>
      </Card>
     );
  }


  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-headline text-gradient-primary">Let's Build Something Great</CardTitle>
        <CardDescription>Fill out the form below to start a conversation about your project.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="name" className="font-medium">Full Name</Label>
            <Input id="name" {...register("name")} placeholder="e.g. Jane Doe" className="mt-1" aria-invalid={errors.name ? "true" : "false"} />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="font-medium">Email Address</Label>
            <Input id="email" type="email" {...register("email")} placeholder="e.g. jane.doe@example.com" className="mt-1" aria-invalid={errors.email ? "true" : "false"} />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="projectDescription" className="font-medium">Project Description</Label>
            <Textarea
              id="projectDescription"
              {...register("projectDescription")}
              placeholder="Tell me about your project, goals, and any specific requirements..."
              className="mt-1 min-h-[120px]"
              aria-invalid={errors.projectDescription ? "true" : "false"}
            />
            {errors.projectDescription && <p className="text-sm text-destructive mt-1">{errors.projectDescription.message}</p>}
          </div>

          <div>
            <Label htmlFor="budget" className="font-medium">Estimated Budget (Optional)</Label>
            <Select onValueChange={(value) => setValue('budget', value)} defaultValue="">
                <SelectTrigger id="budget" className="mt-1" aria-label="Select your estimated budget">
                    <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                    {budgetOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {errors.budget && <p className="text-sm text-destructive mt-1">{errors.budget.message}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Send Inquiry
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
