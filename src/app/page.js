import Banner from "@/Components/Banner";
import WhyChooseUs from "@/Components/ChooseUs";
import CTA from "@/Components/CTA";
import Featureds from "@/Components/Featureds";
import HowItWorks from "@/Components/HowWorks";
import Testimonials from "@/Components/Testimonial";

export const metadata = {
  title: "Home",
  description:
    "Find your dream car today. Explore SUVs, Sedans, Luxury cars and more at affordable prices.",
};
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
