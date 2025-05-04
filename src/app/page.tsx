import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import IntroSection from "@/sections/Home/HomeIntroSection/HomeIntroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
      </main>
      <Footer />
    </>
  );
}
