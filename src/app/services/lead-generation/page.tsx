import PageHeader from '@/components/common/page-header';
import ServiceDetail from '@/components/sections/services/service-detail';
import { services } from '@/lib/constants';
import { notFound } from 'next/navigation';

export default function LeadGenerationPage() {
  const service = services.find(s => s.id === 'lead-generation');

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader title={service.title} description={service.shortDescription} />
      <ServiceDetail service={service} />
    </>
  );
}
