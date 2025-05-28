'use client';

import dynamic from 'next/dynamic';
import type React from 'react';

// Dynamically import ThreeAnimation with SSR disabled
const ThreeAnimationComponent = dynamic(() => import('@/components/common/three-animation'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 opacity-30" style={{ minHeight: '300px' }} /> // Optional: Add a placeholder or specific height for loading
});

const DynamicThreeAnimation: React.FC = () => {
  return <ThreeAnimationComponent />;
};

export default DynamicThreeAnimation;
