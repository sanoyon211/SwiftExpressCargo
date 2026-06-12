export const metadata = { title: 'Tracking' };

import React from 'react';
import HeroSection from '@/components/tracking/HeroSection';
import TrackingSection from '@/components/tracking/TrackingSection';
import HelpSection from '@/components/tracking/HelpSection';

export default function Tracking() {
  return (
    <>
      <HeroSection />
      <TrackingSection />
      <HelpSection />
    </>
  );
}

