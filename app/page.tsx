import Hero from "@/components/Hero";
import FullscreenSection from "@/components/FullscreenSection";
import Footer from "@/components/Footer";

const sections = [
  { id: "manifest", title: "Manifest" },
  { id: "approach", title: "Approach" },
  { id: "how-it-works", title: "How it works" },
  { id: "features", title: "Features" },
  { id: "pricing", title: "Pricing" },
];

export default function Home() {
  return (
    <div>
      <Hero />
      {sections.map(section => (
        <FullscreenSection
          key={section.id}
          id={section.id}
          title={section.title}
        />
      ))}
      <Footer />
    </div>
  );
}