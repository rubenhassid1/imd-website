import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — IMD",
  description:
    "Request a consultation with IMD. All inquiries are handled with the highest level of discretion.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-primary-dark text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold">
            Request a Consultation
          </h1>
          <p className="mt-4 text-primary-light/80 text-lg max-w-xl mx-auto">
            Complete the form below and a member of our team will be in touch
            within 24 hours.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-base-lightest py-16 md:py-24">
        <div className="max-w-[640px] mx-auto px-6">
          <div className="bg-white rounded-[4px] border border-base-light p-8 md:p-12">
            <ContactForm />
          </div>

          <div className="mt-10 text-center space-y-3">
            <p className="text-base text-base-dark">
              All inquiries are handled with the highest level of discretion.
            </p>
            <p className="text-base text-base-dark">
              You can also reach us directly at{" "}
              <a
                href="mailto:contact@imd-intel.com"
                className="text-primary font-semibold hover:underline"
              >
                contact@imd-intel.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
