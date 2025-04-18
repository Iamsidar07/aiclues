import { Hero } from "./components/Hero";
import { AchieveMore } from "./components/AchieveMore";
import { AboutUs } from "./components/AboutUs";
import { WhatWeOffer } from "./components/WhatWeOffer";
import { OurProcess } from "./components/OurProcess";
import { WhyUs } from "./components/WhyUs";
import { CallToAction } from "./components/CallToAction";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <AchieveMore />
      <AboutUs />
      <WhatWeOffer />
      <OurProcess />
      <WhyUs/>
      <CallToAction/>
    </div>
  );
}
