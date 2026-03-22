"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, replace with a POST to Formspree, Getform, or an API route
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-12 text-center py-16 border border-base-light rounded-[4px]">
        <div className="w-12 h-12 rounded-full bg-success text-white flex items-center justify-center mx-auto text-xl font-bold">
          &#10003;
        </div>
        <h2 className="mt-6 font-heading text-2xl font-bold text-primary">
          Inquiry Received
        </h2>
        <p className="mt-3 text-base-dark text-lg">
          A member of our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-semibold text-base-darkest mb-1"
        >
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="w-full border border-base-dark rounded-[4px] px-4 py-3.5 text-base text-base-darkest focus:outline-2 focus:outline-primary placeholder:text-base"
          placeholder="e.g. David Cohen"
        />
      </div>

      <div>
        <label
          htmlFor="title"
          className="block text-sm font-semibold text-base-darkest mb-1"
        >
          Title / Position <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full border border-base-dark rounded-[4px] px-4 py-3.5 text-base text-base-darkest focus:outline-2 focus:outline-primary placeholder:text-base"
          placeholder="e.g. Chief of Staff"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-base-darkest mb-1"
        >
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-base-dark rounded-[4px] px-4 py-3.5 text-base text-base-darkest focus:outline-2 focus:outline-primary placeholder:text-base"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-base-darkest mb-1"
        >
          Phone <span className="text-base">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full border border-base-dark rounded-[4px] px-4 py-3.5 text-base text-base-darkest focus:outline-2 focus:outline-primary placeholder:text-base"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-base-darkest mb-1"
        >
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-base-dark rounded-[4px] px-4 py-3.5 text-base text-base-darkest focus:outline-2 focus:outline-primary placeholder:text-base resize-y"
          placeholder="Tell us briefly about your needs."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white font-body font-semibold text-lg px-8 py-4 rounded-[4px] hover:bg-primary-dark transition-colors"
      >
        Request a Consultation
      </button>
    </form>
  );
}
