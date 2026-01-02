// src/app/layout.js

import './globals.css';
import { Inter } from 'next/font/google';
import LayoutWrapper from '../components/LayoutWrapper'; // <-- Import the new wrapper

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Metadata remains a Server Component feature
export const metadata = {
  // title: 'Minervasutra - AI Powered HR Platform',
  title:'Minervasutra: The All-in-One AI Powered HR Management Software',
  // description: 'Streamline your HR operations with AI and our modern platform.',
  description:'Automate your entire workforce with Minervasutra. Our AI HR platform streamlines hiring, payroll, and employee management to scale your business faster.'
};

// RootLayout remains a Server Component
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen relative overflow-x-hidden bg-white">

        {/* Render the client-side wrapper, passing the page content (children) */}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>

      </body>
    </html>
  );
}