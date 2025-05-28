import PageHeader from '@/components/common/page-header';
import ContactForm from '@/components/sections/contact/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="We're here to help and answer any question you might have. We look forward to hearing from you!"
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
              <p className="text-foreground/80 mb-6">
                Feel free to reach out to us through any of the following methods. Our team is ready to assist you with your marketing needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:info@leadflow.com" className="text-foreground/80 hover:text-primary">
                      info@leadflow.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+1234567890" className="text-foreground/80 hover:text-primary">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-medium">Office Address</h3>
                    <p className="text-foreground/80">123 Marketing Lane, Growth City, ST 54321</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
