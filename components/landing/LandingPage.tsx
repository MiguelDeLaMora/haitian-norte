"use client";

import { useState } from "react";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import BenefitsStrip from "@/components/landing/BenefitsStrip";
import ProductsSection from "@/components/landing/ProductsSection";
import FinancingSection from "@/components/landing/FinancingSection";
import CertificationsSlider from "@/components/landing/CertificationsSlider";
import ClientsSlider from "@/components/landing/ClientsSlider";
import CTASection from "@/components/landing/CTASection";
import LandingFooter from "@/components/landing/LandingFooter";
import ContactModal from "@/components/ui/ContactModal";

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Nav onContact={openModal} />
      <Hero />
      <BenefitsStrip />
      <ProductsSection onContact={openModal} />
      <FinancingSection onContact={openModal} />
      <CertificationsSlider />
      <ClientsSlider />
      <CTASection />
      <LandingFooter />
      <ContactModal open={modalOpen} onClose={closeModal} />
    </>
  );
}
