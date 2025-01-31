import Footer from "@/components/landing-page/footer";
import FeaturesSection from "@/components/landing-page/features-section";
import HeroSection from "@/components/landing-page/hero-section";
import SubscribeSection from "@/components/landing-page/subscribe-section";
import Navbar from "@/components/layouts/nav-bar";

export default async function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-background text-foreground overflow-scroll w-full">
        <main className="flex-1 mb-16">
          <HeroSection />
          <FeaturesSection />
          <SubscribeSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
