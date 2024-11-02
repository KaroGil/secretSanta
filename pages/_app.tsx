import React from 'react';
import '../styles/global.css';
import type { AppProps } from 'next/app';

import AnimatedIcons from '../pages/components/AnimatedIcons';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatedIcons n={50} />
      <div className="main-content">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
