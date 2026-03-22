import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — IMD",
  description:
    "Request a consultation with IMD. All inquiries are handled with the highest level of discretion.",
};

export default function ContactPage() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[640px] mx-auto px-6">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center">
          Request a Consultation
        </h1>
        <div className="w-12 h-[3px] bg-accent mx-auto mt-4" />
        <p className="mt-6 text-center text-base-dark text-lg">
          Complete the form below and a member of our team will be in touch
          within 24 hours.
        </p>

        <ContactForm />

        <p className="mt-10 text-center text-base text-base-dark">
          All inquiries are handled with the highest level of discretion.
        </p>
        <p className="mt-4 text-center text-base text-base-dark">
          You can also reach us directly at{" "}
          <a
            href="mailto:contact@imd-intel.com"
            className="text-primary font-semibold hover:underline"
          >
            contact@imd-intel.com
          </a>
        </p>
      </div>
    </section>
  );
}
