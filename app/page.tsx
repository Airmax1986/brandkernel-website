import Hero from "@/components/Hero";
import FullscreenSection from "@/components/FullscreenSection";
import SecondaryButton from "@/components/SecondaryButton";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Manifest Section */}
      <FullscreenSection id="manifest" title="The BrandKernel Manifesto">
        <p className="font-bold text-3xl">We believe the future belongs to the strategically clear.</p>
        <p className="mt-8">
          In an economy where attention is currency and authenticity is scarce, only those who know exactly who they are will thrive. We reject the template trap and the surface-level solutions that make everyone sound the same.
        </p>
        <SecondaryButton href="/manifest" className="mt-12">
          Read the Full Manifesto →
        </SecondaryButton>
      </FullscreenSection>

      {/* Approach Section */}
      <FullscreenSection id="approach" title="Our Approach: Dialogue, Not Forms">
        <p className="font-bold text-3xl">Traditional branding gives you worksheets. We give you a conversation.</p>
        <p className="mt-8">
          Most platforms hand you templates and wish you luck. We've built something different: an AI Brand Consultant trained on decades of strategic wisdom, designed to guide you through the deep work most avoid.
        </p>
        <SecondaryButton href="/approach" className="mt-12">
          Explore Our Approach →
        </SecondaryButton>
      </FullscreenSection>

      {/* How It Works Section */}
      <FullscreenSection id="how-it-works" title="How BrandKernel Works">
        <p className="font-bold text-3xl">Four Levels. One Transformation.</p>
        <p className="mt-8">
          From Foundation Discovery to Strategic Positioning, our guided dialogue takes you from confusion to absolute clarity about who you are and where you win.
        </p>
        <SecondaryButton href="/how-it-works" className="mt-12">
          See the Four Levels →
        </SecondaryButton>
      </FullscreenSection>

      {/* Features Section */}
      <FullscreenSection id="features" title="Features That Go Deep">
        <p className="font-bold text-3xl">BrandKernel isn't another survey tool. It's your strategic thinking partner.</p>
        <p className="mt-8">
          From our Adaptive Dialogue System to the living Brand Kernel Book, every feature is designed to help you discover and activate your authentic brand advantage.
        </p>
        <SecondaryButton href="/features" className="mt-12">
          Discover All Features →
        </SecondaryButton>
      </FullscreenSection>

      {/* Pricing Section */}
      <FullscreenSection id="pricing" title="Simple Pricing. Profound Results.">
        <p className="text-5xl font-bold my-4">€297 (Early Access via Waitlist)</p>
        <p className="font-bold">One investment. Lifetime clarity.</p>
        <p className="mt-8">
          Stop competing on tactics. Start winning with strategy. Your Brand Kernel is forever.
        </p>
        <SecondaryButton href="/pricing" className="mt-12">
          View Pricing Details →
        </SecondaryButton>
      </FullscreenSection>

    </div>
  );
}