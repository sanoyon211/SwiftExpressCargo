export const metadata = { title: 'Home' };

import React from 'react';
import HeroHeader from '@/components/home/HeroHeader';
import StatsSection from '@/components/home/StatsSection';
import PopularBrands from '@/components/home/PopularBrands';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import QuickTrackSection from '@/components/home/QuickTrackSection';
import Faq from '@/components/home/Faq';
import Blog from '@/components/home/Blog';
import CustomerFeedback from '@/components/home/CustomerFeedback';
import CtaBanner from '@/components/home/CtaBanner';

export default function Home() {
  return (
    <>
      <HeroHeader />
      <StatsSection />
      <WhyChooseUs />
      <HowItWorks />
      <QuickTrackSection />
      <Faq />
      <Blog />
      <PopularBrands />
      <CustomerFeedback />
      <CtaBanner />
    </>
  );
}

