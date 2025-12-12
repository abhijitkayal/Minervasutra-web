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
  title: 'Minervasutra - AI Powered HR Platform',
  description: 'Streamline your HR operations with AI and our modern platform.',
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