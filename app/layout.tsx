import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GlobalGuide AI - Corporate Travel Safety Briefings',
  description: 'Value Proposition: Provides personalized, real-time health and safety briefings for employees traveling internationally. Covers local customs, safety zones, medical advice, and emergency contacts, reducing corporate travel risk and ensuring employee well-being.

Target Customer: HR departments, corporate travel managers, and risk management teams in SMBs and enterprises that regularly send employees for international business travel.

---
Category: Micro-SaaS
Target Market: HR departments, corporate travel managers, and risk management teams in SMBs and enterprises that regularly send employees for international business travel.
Source Hypothesis ID: dc25e5f8-cbbd-40bd-b97b-0299a2825446
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">GlobalGuide AI - Corporate Travel Safety Briefings</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
