import NavBar from '@/components/navbar';
import Emboss from '@/components/emboss';
import Footer from '@/components/footer';
import GoldText from '@/components/goldtext';

export default function About() {
  return (
    <div className="relative flex min-h-screen flex-col items-center gap-y-20 px-0 pb-[420px] pt-36">
      <NavBar />

      <GoldText
        text="ABOUT US"
        className="text-6xl font-extrabold"
      />

      <div className="flex flex-col items-center justify-center">
        <GoldText
          text="Our Theme:"
          className="text-4xl"
        />
        <GoldText
          text="Protecting Biodiversity"
          className="text-6xl"
        />
        <p className="mt-4 max-w-[50rem] text-justify text-foreground">The importance of biodiversity cannot be understated. The food we eat, the clothes we wear, and even the air we breathe is all the result of a healthy biodiversity. Unfortunately, over the last few years, human activity has caused a massive decline, with activities such as the clearing of forests for commercial use, overexploitation of natural resources, and all highly destructive towards biodiversity. Because of this, it is important for us to be aware of our responsibility to preserve and protect biodiversity, as its destruction could mean the destruction of mankind as a whole.</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <GoldText
          text="Our Tagline:"
          className="text-4xl"
        />
        <GoldText
          text="Embrace Humanity, Protect Biodiversity"
          className="text-6xl"
        />
        <p className="mt-4 max-w-[50rem] text-justify text-foreground">Our tagline refers to the goal of our event. As our future champions continue to learn and evolve as they progress through our competitions, we hope that the knowledge they have gained will give them the empathy needed to build a realization for their role in protecting the biodiversity around us. As human activity continues to destroy the world around us, this year’s ALSA E-Comp brings on the theme of Protecting Biodiversity in hopes of preserving it.</p>
      </div>

      <Footer />
    </div>
  );
}
