import Hero from "@/components/Hero";
import FullscreenSection from "@/components/FullscreenSection";

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
          // Sie können hier später die Farben für jede Sektion anpassen, z.B.
          // bgColor={section.id === 'pricing' ? 'bg-gray-100' : 'bg-white'}
        />
      ))}
    </div>
  );
}