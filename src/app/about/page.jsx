"use client";

import GoldText from '@/components/goldtext';
import BlurFade from '@/components/blurfade';

export default function About() {
  return (
    <div className="relative flex flex-col items-center gap-y-12 overflow-x-clip px-6 py-36 lg:gap-y-20 lg:px-0">
      <BlurFade
        delay={0.3}
        offset={15}
      >
        <GoldText
          text="ABOUT US"
          className="text-4xl font-extrabold lg:text-5xl"
        />
      </BlurFade>

      <div className="flex flex-col items-center justify-center">
        <BlurFade
          delay={0.4}
          offset={15}
        >
          <GoldText
            text="Our Theme:"
            className="text-xl lg:text-2xl"
          />
        </BlurFade>
        <BlurFade
          delay={0.5}
          offset={15}
        >
          <GoldText
            text="Protecting Biodiversity"
            className="text-2xl lg:text-4xl"
          />
        </BlurFade>
        <BlurFade
          delay={0.6}
          offset={15}
        >
          <p className="text-md mt-4 max-w-[50rem] px-4 text-justify text-foreground">The importance of biodiversity cannot be understated. The food we eat, the clothes we wear, and even the air we breathe is all the result of a healthy biodiversity. Unfortunately, over the last few years, human activity has caused a massive decline, with activities such as the clearing of forests for commercial use, overexploitation of natural resources, and all highly destructive towards biodiversity. Because of this, it is important for us to be aware of our responsibility to preserve and protect biodiversity, as its destruction could mean the destruction of mankind as a whole.</p>
        </BlurFade>
      </div>

      <div className="flex flex-col items-center justify-center">
        <BlurFade
          delay={0.7}
          offset={15}
        >
          <GoldText
            text="Our Tagline:"
            className="text-xl lg:text-2xl"
          />
        </BlurFade>
        <BlurFade
          delay={0.8}
          offset={15}
        >
          <GoldText
            text="Embrace Humanity, Protect Biodiversity"
            className="hidden text-4xl lg:block"
          />
          <div className="flex flex-col items-center lg:hidden">
            <GoldText
              text="Embrace Humanity,"
              className="text-2xl"
            />
            <GoldText
              text="Protect Biodiversity"
              className="text-2xl"
            />
          </div>
        </BlurFade>
        <BlurFade
          delay={0.9}
          offset={15}
        >
          <p className="text-md mt-4 max-w-[50rem] px-4 text-justify text-foreground">Our tagline refers to the goal of our event. As our future champions continue to learn and evolve as they progress through our competitions, we hope that the knowledge they have gained will give them the empathy needed to build a realization for their role in protecting the biodiversity around us. As human activity continues to destroy the world around us, this year's ALSA E-Comp brings on the theme of Protecting Biodiversity in hopes of preserving it.</p>
        </BlurFade>
      </div>
    </div>
  );
}
