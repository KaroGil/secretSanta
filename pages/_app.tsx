import React from 'react';
import '../styles/global.css';
import type { AppProps } from 'next/app';

import { AnimatedIcons } from '../pages/components/AnimatedIcons';

function MyApp({ Component, pageProps }: AppProps) {
  const isDecember = new Date().getMonth() === 10;
  return (
    <>
      {isDecember && <AnimatedIcons n={50} />}
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
