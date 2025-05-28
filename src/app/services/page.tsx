import PageHeader from '@/components/common/page-header';
import ServiceCard from '@/components/common/service-card';
import { services } from '@/lib/constants';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Explore our comprehensive range of marketing services designed to elevate your brand and drive business growth. We tailor our expertise to meet your unique needs."
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"> {/* Changed to 2 columns for better display on services overview page */}
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
