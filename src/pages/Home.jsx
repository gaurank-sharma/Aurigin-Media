import Hero from "../components/Hero";
import ServicesCarousel from "../components/ServicesCarousel";
import BrandStory from "../components/BrandStory";
import ServicesList from "../components/ServicesList";
import FeaturedWork from "../components/FeaturedWork";
import Portfolio from "../components/Portfolio";
import CTAFooter from "../components/CTAFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesCarousel />
      <BrandStory />
      <ServicesList />
      <FeaturedWork />
      <Portfolio />
      <CTAFooter />
    </>
  );
}
