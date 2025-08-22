import React from "react";
import AppDownload from "./AppDownload";
import Features from "./Features";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Contact from "./Contact";
import JoinUs from "./JoinUs";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div className="w-full bg-[#FFF7E2] ">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      {/* Featured Section */}
      <section id="features">
        <Features />
      </section>
      {/* Why Doctors Choose Us Section */}
      <section id="whychooseus">
        <WhyChooseUs />
      </section>

      {/* Join Us Section */}
      <section id="joinus">
        <JoinUs />
      </section>

      {/* Testimonials Grid */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/*FAQAccordion */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Get Started Section */}
      <section id="appdownload">
        <AppDownload />
      </section>
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
