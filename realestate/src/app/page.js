import AboutSec from "@/components/AboutSec";
import Blog from "@/components/Blog";
import BuyRent from "@/components/BuyRent";
import ContactDetails from "@/components/ContactDetails";
import Ctc from "@/components/Ctc";
import PropetySlider from "@/components/PropertySlider";
import Scroll from "@/components/Scroll";
import Slider from "@/components/Slider";
import Spacer from "@/components/Spacer";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import React from "react";

export default function page() {
  return (
    <>
      <Slider />
      <AboutSec />
      <PropetySlider />
      <Work />
      <BuyRent />
      <Ctc />
      <Testimonials />
      <Blog />
      <Scroll />
      <Spacer/>
    </>
  );
}
