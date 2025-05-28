import ServiceCard from '@/components/common/service-card';
import { services } from '@/lib/constants';

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Discover how we can help your business thrive with our specialized marketing solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
