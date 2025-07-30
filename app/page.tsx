import Hero from "@/components/Hero";
import FullscreenSection from "@/components/FullscreenSection";

export default function Home() {
  return (
    <div>
      <Hero />

      <FullscreenSection id="universal-problem" title="The Attention Economy's Dirty Secret">
        <p className="mb-8">You're competing with everyone, everywhere, all at once.</p>
        <ul className="list-disc list-inside space-y-4 text-left mb-12">
          <li>Creators battle for views in an ocean of content</li>
          <li>Freelancers race to the bottom on price</li>
          <li>Founders launch into the void of 1,000 daily startups</li>
        </ul>
        <p className="font-bold">The Real Problem: You're trying to win with tactics when you need strategy. You're using templates when you need truth. You're copying others when you need to be irreplaceably you.</p>
      </FullscreenSection>

      <FullscreenSection id="solution-preview" title="Your Brand Kernel: The Strategic Core That Changes Everything">
        <div className="text-left space-y-8">
          <div>
            <h3 className="text-3xl font-bold">What It Is:</h3>
            <p>Through guided AI dialogue, we help you uncover the authentic positioning that no algorithm can copy and no competitor can steal. Your values, vision, and voice—crystallized into strategic clarity.</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">How It Works:</h3>
            <p>Our AI Brand Consultant asks the questions that matter. The uncomfortable ones. The revealing ones. The ones that lead to "holy shit, that's exactly who I am" moments.</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">The Result:</h3>
            <p>A strategic foundation that makes every decision clear. Every message authentic. Every action aligned.</p>
          </div>
        </div>
      </FullscreenSection>
    </div>
  );
}