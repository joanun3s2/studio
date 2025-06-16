import InquiryForm from '@/components/inquiry-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Me | Code Canvas',
  description: 'Get in touch for project inquiries, collaborations, or any questions.',
};

export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container text-center">
          <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">Get In Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-20">
        <div className="container grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <InquiryForm />
          </div>
          <div className="lg:col-span-1 space-y-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="font-headline text-xl font-semibold_TEMP_mb-3_TEMP_text-foreground">Contact Information</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span>your.email@example.com</span>
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>(555) 123-4567 (Optional)</span>
                </p>
                <p className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>Your City, Country (Optional)</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-xl font-semibold_TEMP_mb-3_TEMP_text-foreground">Office Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM <br/>
                (Your Timezone)
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Feel free to reach out anytime. I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
