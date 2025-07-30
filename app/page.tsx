import Hero from "@/components/Hero";
import FullscreenSection from "@/components/FullscreenSection";
import CtaButton from "@/components/CtaButton"; // Importiert jetzt den CtaButton

export default function Home() {
  return (
    <div>
      <Hero />

      <FullscreenSection id="manifest" title="The BrandKernel Manifesto">
        <p className="font-bold text-3xl">We believe the future belongs to the strategically clear.</p>
        <p className="mt-8">
          In an economy where attention is currency and authenticity is scarce, only those who know exactly who they are will thrive. We reject the template trap and the surface-level solutions that make everyone sound the same.
        </p>
        {/* SecondaryButton wurde durch CtaButton ersetzt */}
        <CtaButton href="/manifest" className="mt-12">
          Read the Full Manifesto →
        </CtaButton>
      </FullscreenSection>

      {/* ... (und so weiter für alle anderen Sektionen) ... */}

      <FullscreenSection id="approach" title="Our Approach: Dialogue, Not Forms">
        <p className="font-bold text-3xl">Traditional branding gives you worksheets. We give you a conversation.</p>
        <p className="mt-8">
          Most platforms hand you templates and wish you luck. We've built something different: an AI Brand Consultant trained on decades of strategic wisdom, designed to guide you through the deep work most avoid.
        </p>
        <CtaButton href="/approach" className="mt-12">
          Explore Our Approach →
        </CtaButton>
      </FullscreenSection>

      <FullscreenSection id="how-it-works" title="How BrandKernel Works">
        <p className="font-bold text-3xl">Four Levels. One Transformation.</p>
        <p className="mt-8">
          From Foundation Discovery to Strategic Positioning, our guided dialogue takes you from confusion to absolute clarity about who you are and where you win.
        </p>
        <CtaButton href="/how-it-works" className="mt-12">
          See the Four Levels →
        </CtaButton>
      </FullscreenSection>

      <FullscreenSection id="features" title="Features That Go Deep">
        <p className="font-bold text-3xl">BrandKernel isn't another survey tool. It's your strategic thinking partner.</p>
        <p className="mt-8">
          From our Adaptive Dialogue System to the living Brand Kernel Book, every feature is designed to help you discover and activate your authentic brand advantage.
        </p>
        <CtaButton href="/features" className="mt-12">
          Discover All Features →
        </CtaButton>
      </FullscreenSection>

      <FullscreenSection id="pricing" title="Simple Pricing. Profound Results.">
        <p className="text-5xl font-bold my-4">€297 (Early Access via Waitlist)</p>
        <p className="font-bold">One investment. Lifetime clarity.</p>
        <p className="mt-8">
          Stop competing on tactics. Start winning with strategy. Your Brand Kernel is forever.
        </p>
        <CtaButton href="/pricing" className="mt-12">
          View Pricing Details →
        </CtaButton>
      </FullscreenSection>
    </div>
  );
}