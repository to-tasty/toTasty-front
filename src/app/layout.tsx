import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import NavigationBar from '@/widgets/navigation-bar/NavigationBar';
import { QueryProvider } from './providers/QueryProvider';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'To Tasty!',
  description: '커피·와인·위스키, 한 모임에서 취향을 만나다 — To Tasty!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e){}
              })();
            `,
          }}
        />
      </head>
      <body className={`${pretendard.variable} font-pretendard antialiased`}>
        <QueryProvider>
          <NavigationBar />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
