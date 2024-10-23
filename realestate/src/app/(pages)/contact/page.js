import Breadcrumb from "@/components/Breadcrumb";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Spacer from "@/components/Spacer";
import React from "react";

export default function page() {
  return (
    <>
      <Breadcrumb page="Contact" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-full relative">
            {/* Map wrapper with aspect ratio */}
            <div className="relative w-full overflow-hidden pt-[75%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.561907418057!2d77.22693477495612!3d28.612916684972152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1729676769586!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
      <ContactDetails />
      <Spacer/>
    </>
  );
}