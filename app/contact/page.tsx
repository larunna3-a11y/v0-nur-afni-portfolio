'use client'

import { useState } from 'react'

const serviceOptions = [
  'Social Media Management',
  'E-Commerce Management',
  'Paid Ads',
  'Digital Strategy',
  'KOL & Affiliator Strategy',
  'Other',
]

const budgetOptions = [
  'Under Rp5M',
  'Rp5M – Rp15M',
  'Rp15M – Rp50M',
  'Rp50M – Rp100M',
  'Above Rp100M',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  })

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        company: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#2D1BB8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">{"Let's Work Together"}</h1>
          <p className="mt-4 text-[#9B97C0] max-w-2xl mx-auto">
            Have a project in mind? {"Let's"} talk about how I can help your brand grow.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#F8F7FF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border border-[#E8E6F8] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">Send a Message</h2>
              <form
               action="https://formsubmit.co/nurafni4489@gmail.com"
               method="POST"
               >
                <input type="hidden" name="_captcha" value="false" />
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0F0A2E] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F8F7FF] border border-[#E8E6F8] rounded-xl text-[#0F0A2E] placeholder:text-[#9B97C0] focus:outline-none focus:border-[#2D1BB8] focus:ring-1 focus:ring-[#2D1BB8]"
                    placeholder="Your name"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#0F0A2E] mb-2">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F8F7FF] border border-[#E8E6F8] rounded-xl text-[#0F0A2E] placeholder:text-[#9B97C0] focus:outline-none focus:border-[#2D1BB8] focus:ring-1 focus:ring-[#2D1BB8]"
                    placeholder="Your company or brand name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0F0A2E] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F8F7FF] border border-[#E8E6F8] rounded-xl text-[#0F0A2E] placeholder:text-[#9B97C0] focus:outline-none focus:border-[#2D1BB8] focus:ring-1 focus:ring-[#2D1BB8]"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#0F0A2E] mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F8F7FF] border border-[#E8E6F8] rounded-xl text-[#0F0A2E] focus:outline-none focus:border-[#2D1BB8] focus:ring-1 focus:ring-[#2D1BB8]"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-[#0F0A2E] mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F8F7FF] border border-[#E8E6F8] rounded-xl text-[#0F0A2E] focus:outline-none focus:border-[#2D1BB8] focus:ring-1 focus:ring-[#2D1BB8]"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0F0A2E] mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F8F7FF] border border-[#E8E6F8] rounded-xl text-[#0F0A2E] placeholder:text-[#9B97C0] focus:outline-none focus:border-[#2D1BB8] focus:ring-1 focus:ring-[#2D1BB8] resize-none"
                    placeholder="Tell me about your project, goals, and timeline..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#2D1BB8] hover:bg-[#4A35D4] text-white font-semibold rounded-xl transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">Get in Touch</h2>
                <p className="text-[#4B4680] leading-relaxed">
                  {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your brand's growth journey."}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#2D1BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F0A2E]">Email</h3>
                    <a href="mailto:nurafni4489@gmail.com" className="text-[#2D1BB8] hover:underline">
                      nurafni4489@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#2D1BB8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F0A2E]">Location</h3>
                    <p className="text-[#4B4680]">Jakarta, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#2D1BB8]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F0A2E]">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/nour-afni/" target="_blank" rel="noopener noreferrer" className="text-[#2D1BB8] hover:underline">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-[#2D1BB8]/[0.08] rounded-2xl p-6">
                <h3 className="font-semibold text-[#0F0A2E] mb-2">Quick Response</h3>
                <p className="text-sm text-[#4B4680]">
                  I typically respond within 24-48 hours. For urgent inquiries, please mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
