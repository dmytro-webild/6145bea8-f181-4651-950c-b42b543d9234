"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeLargeTitles"
        background="blurBottom"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Products",
          id: "catalog",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Ethereal Essence"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Timeless Scents, Captured in Glass"
      description="Discover our collection of artisanal fragrances, handcrafted for the modern individual."
      buttons={[
        {
          text: "Shop Collection",
          href: "#catalog",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/crystal-whiskey-bottle-alcohol-drinks-packaging_53876-110846.jpg"
      imageAlt="Luxury perfume bottle dark background"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/still-life-cosmetic-products_23-2149163166.jpg",
          alt: "Still life of cosmetic products",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-girly-composition-table_23-2148229244.jpg",
          alt: "High angle girly composition on table",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-arrangement-still-life-items_23-2148229273.jpg",
          alt: "High angle arrangement of still life items",
        },
        {
          src: "http://img.b2bpic.net/free-photo/still-life-stacked-aesthetic-objects_23-2150185378.jpg",
          alt: "Still life of stacked aesthetic objects",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-woman-talking-phone-with-her-friend_1153-11.jpg",
          alt: "Smiling woman talking on the phone with her friend",
        },
      ]}
      avatarText="Join 5,000+ scent enthusiasts"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="The Art of Fragrance"
      description={[
        "Founded with a passion for rare botanicals, Ethereal Essence creates unique sensory experiences.",
        "Every scent is developed by master perfumers using sustainably sourced ingredients.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Rare Ingredients",
          descriptions: [
            "Sourced from the finest global estates.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/pink-peony-rose-flowers-glass-vase-gray-table_114579-39492.jpg",
        },
        {
          id: "f2",
          title: "Artisan Craft",
          descriptions: [
            "Hand-blended by master perfumers.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/sustainably-produced-alcoholic-beverage_23-2150162983.jpg",
        },
        {
          id: "f3",
          title: "Long Lasting",
          descriptions: [
            "Complex formulations for all-day wear.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/aroma-might-be-more-important-than-taste_329181-7060.jpg",
        },
      ]}
      title="Why Our Scents Define You"
      description="Uncompromising quality that leaves a lasting impression."
    />
  </div>

  <div id="catalog" data-section="catalog">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Midnight Rose",
          price: "$120",
          variant: "50ml",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-light-bottle-with-golden-cap-isolated-white-floor_140725-11640.jpg",
        },
        {
          id: "p2",
          name: "Golden Cedar",
          price: "$145",
          variant: "50ml",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-white-flower-vase-spring-wallpaper_23-2149446784.jpg",
        },
        {
          id: "p3",
          name: "Ocean Mist",
          price: "$95",
          variant: "50ml",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-transparent-bottle-fragrance-isolated-white-wall_140725-11689.jpg",
        },
        {
          id: "p4",
          name: "Velvet Musk",
          price: "$135",
          variant: "50ml",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-bottle-pieces-broken-shattered-glass_53876-126642.jpg",
        },
        {
          id: "p5",
          name: "Sandalwood",
          price: "$150",
          variant: "50ml",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-black-perfume-bottle-with-gold-cap-dark-textured-background_84443-84117.jpg",
        },
        {
          id: "p6",
          name: "Citrus Bloom",
          price: "$110",
          variant: "50ml",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-essential-oil-bottle_23-2148241812.jpg",
        },
      ]}
      title="Explore Our Collection"
      description="Find your signature scent among our curated selection."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Anna S.",
          role: "Collector",
          testimonial: "The depth of these scents is unmatched.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-girl-portrait-with-stylish-blue-hair-pretty-face_158595-4339.jpg",
        },
        {
          id: "t2",
          name: "David M.",
          role: "Regular User",
          testimonial: "Every fragrance tells a beautiful story.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-films-vlog-praising-bio-local-shop_482257-81629.jpg",
        },
        {
          id: "t3",
          name: "Elena R.",
          role: "Perfume Enthusiast",
          testimonial: "Finally found a scent that lasts all day.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-black-suit-applies-perfume-smiles_114579-15070.jpg",
        },
        {
          id: "t4",
          name: "Marcus W.",
          role: "Customer",
          testimonial: "Sophisticated and elegant choices.",
          imageSrc: "http://img.b2bpic.net/free-photo/charming-young-woman-pink-dress-poses-before-sakura-tree-full-pink-flowers_8353-7286.jpg",
        },
        {
          id: "t5",
          name: "Sarah P.",
          role: "Blogger",
          testimonial: "My new signature scent is definitely here.",
          imageSrc: "http://img.b2bpic.net/free-photo/bride-with-glass-wine_1157-274.jpg",
        },
      ]}
      title="Stories in Scent"
      description="What our patrons say about their signature fragrances."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How long do scents last?",
          content: "Our fragrances are formulated to last 8+ hours.",
        },
        {
          id: "q2",
          title: "Are these vegan?",
          content: "Yes, all our ingredients are ethically and vegan-sourced.",
        },
        {
          id: "q3",
          title: "Do you offer shipping?",
          content: "We offer worldwide shipping on all orders.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Have questions? We have answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in touch"
      title="Need a Consultation?"
      description="Book a private scent fitting with our experts today."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "New Arrivals",
              href: "#",
            },
            {
              label: "Best Sellers",
              href: "#",
            },
          ],
        },
        {
          title: "Brand",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Sustainability",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Ethereal Essence."
      bottomRightText="Privacy Policy"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
