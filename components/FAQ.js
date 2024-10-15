"use client"
import { useState } from 'react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  const faqs = [
    { question: 'How does AI help with email management?', answer: 'AI helps by automating responses, categorizing emails, and managing spam.' },
    { question: 'What are the benefits of using Mastork’s services?', answer: 'Increased productivity, smarter email sorting, and enhanced security.' },
    { question: 'Can I customize the AI’s behavior?', answer: 'Yes, you can adjust the AI settings to suit your business needs.' },
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-2xl">{openFAQ === index ? '-' : '+'}</span>
              </button>
              {openFAQ === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <a href="#consultation" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-center mx-auto block ">
        Book a Free Consultation
      </a>
    </section>
  );
}
