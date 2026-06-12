export const metadata = { title: 'Cost Calculator' };

import React from 'react';
import Header from '@/components/calculator/Header';
import QuickInfoStrip from '@/components/calculator/QuickInfoStrip';
import CalculatorSection from '@/components/calculator/CalculatorSection';
import ConsolidationTip from '@/components/calculator/ConsolidationTip';
import BenefitsSection from '@/components/calculator/BenefitsSection';

export default function CostCalculator() {
  return (
    <>
      <Header />
      <QuickInfoStrip />
      <CalculatorSection />
      <ConsolidationTip />
      <BenefitsSection />
    </>
  );
}

