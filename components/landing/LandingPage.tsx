"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import BenefitsStrip from "@/components/landing/BenefitsStrip";
import GallerySection from "@/components/landing/GallerySection";
import ProductsSection from "@/components/landing/ProductsSection";
import AfterSalesSection from "@/components/landing/AfterSalesSection";
import FinancingSection from "@/components/landing/FinancingSection";
import CertificationsSlider from "@/components/landing/CertificationsSlider";
import ClientsSlider from "@/components/landing/ClientsSlider";
import CTASection from "@/components/landing/CTASection";
import LandingFooter from "@/components/landing/LandingFooter";
import ContactModal from "@/components/ui/ContactModal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { captureCampaignParams } from "@/lib/campaign";
import { HOME_VARIANT, type LandingVariant } from "@/lib/landing-variants";

interface LandingPageProps {
  variant?: LandingVariant;
}

export default function LandingPage({ variant = HOME_VARIANT }: LandingPageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    captureCampaignParams();
  }, []);

  return (
    <>
      <Nav onContact={openModal} minimal={variant.minimalChrome} />
      <Hero
        content={variant.hero}
        formCategories={variant.formCategories}
        formFixedCategory={variant.formFixedCategory}
      />
      <BenefitsStrip />
      <ProductsSection onContact={openModal} content={variant.products} />
      <GallerySection content={variant.gallery} />
      {variant.afterSales && <AfterSalesSection content={variant.afterSales} />}
      <FinancingSection onContact={openModal} content={variant.financing} />
      <CertificationsSlider />
      <ClientsSlider />
      <CTASection
        formCategories={variant.formCategories}
        formFixedCategory={variant.formFixedCategory}
      />
      <LandingFooter minimal={variant.minimalChrome} />
      <ContactModal
        open={modalOpen}
        onClose={closeModal}
        title={variant.modalTitle}
        categories={variant.formCategories}
        fixedCategory={variant.formFixedCategory}
      />
      <WhatsAppButton />
    </>
  );
}
