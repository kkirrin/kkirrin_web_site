import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Кирилл - Frontend Developer | React, Next.js, TypeScript",
  description: "Портфолио Кирилла - опытного Frontend разработчика. Специализируюсь на React, Next.js, TypeScript. Создаю современные веб-приложения с отличным UX.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "JavaScript", "Web Development", "Портфолио", "Кирилл"],
  authors: [{ name: "Кирилл" }],
  creator: "Кирилл",
  publisher: "Кирилл",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://kkirrin.ru/',
    siteName: 'Кирилл - Frontend Developer',
    title: 'Кирилл - Frontend Developer | React, Next.js, TypeScript',
    description: 'Портфолио Кирилла - опытного Frontend разработчика. Специализируюсь на React, Next.js, TypeScript.',
    images: [
      {
        url: '/avatar.png',
        width: 1200,
        height: 630,
        alt: 'Кирилл - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кирилл - Frontend Developer | React, Next.js, TypeScript',
    description: 'Портфолио Кирилла - опытного Frontend разработчика. Специализируюсь на React, Next.js, TypeScript.',
    images: ['/avatar.png'],
    creator: '@your_twitter_handle',
  },
  alternates: {
    canonical: 'https://kkirrin.ru/',
  },
  category: 'technology',
  classification: 'portfolio',
  verification: {
    google: '33d0cebd34c3c2fd',
    yandex: '33d0cebd34c3c2fd',
  },
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
