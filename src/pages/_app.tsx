import type { AppProps } from 'next/app';

import '@/app/globals.css';

function ToTasty({ Component }: AppProps) {
  return <Component />;
}

export default ToTasty;
