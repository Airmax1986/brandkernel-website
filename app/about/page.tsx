import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen pt-48">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">About BrandKernel</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            This is the about page.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}