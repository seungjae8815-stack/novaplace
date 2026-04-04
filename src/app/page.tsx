import Hero from "@/components/sections/Hero";
import PainPoint from "@/components/sections/PainPoint";
import Solution from "@/components/sections/Solution";
import Metrics from "@/components/sections/Metrics";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FloatingBtn from "@/components/FloatingBtn";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoint />
      <Solution />
      <Testimonials />
      <Metrics />
      <FAQ />
      <CTA />
      <FloatingBtn />
    </>
  );
}
