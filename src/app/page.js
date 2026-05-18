import Banner from "@/Components/Banner";
import WhyChooseUs from "@/Components/ChooseUs";
import CTA from "@/Components/CTA";
import Featureds from "@/Components/Featureds";
import HowItWorks from "@/Components/HowWorks";
import Testimonials from "@/Components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <WhyChooseUs/>
      <Featureds/>
      <HowItWorks/>
      <Testimonials/>
      <CTA/>
    </div>
  );
}
