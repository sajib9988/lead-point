
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame } from 'lucide-react'; // Changed Torch to Flame

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-background bg-size-300 animate-gradient-x py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 animate-pulse">
            <Flame className="w-4 h-4 mr-2 text-primary" /> {/* Changed Torch to Flame */}
            <span>Ignite Your Growth</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Supercharge Your Business with <span className="text-torch-light">LeadFlow</span> AI
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 md:text-xl">
            We provide expert Email Marketing, Lead Generation, Content, and YouTube Marketing services to help you achieve your business goals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg transform hover:scale-105 transition-transform duration-300 border-primary text-primary hover:bg-primary/10">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
