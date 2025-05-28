import Image from 'next/image';
import type { Service } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceDetailProps {
  service: Service;
}

const mockBenefits = [
    "Increased brand awareness",
    "Higher conversion rates",
    "Improved customer engagement",
    "Measurable ROI and performance tracking"
];


export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
            {service.title}
          </h2>
          <p className="text-lg text-foreground/80 mb-6">
            {service.longDescription}
          </p>
          <h3 className="text-xl font-semibold text-foreground mb-3">Key Benefits:</h3>
          <ul className="space-y-2 mb-8">
            {mockBenefits.map((benefit, index) => (
                 <li key={index} className="flex items-center text-foreground/80">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    {benefit}
                </li>
            ))}
          </ul>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">
              Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            data-ai-hint={service.dataAiHint}
          />
        </div>
      </div>
    </div>
  );
}
