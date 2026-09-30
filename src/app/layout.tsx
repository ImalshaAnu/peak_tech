import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050811",
};

export const metadata: Metadata = {
  title: "Peak Tech IT Solutions | Enterprise Cloud, DevOps & AI Solutions",
  description: "Empowering global enterprises with auto-scaling cloud architectures, 24/7 Site Reliability Engineering (SRE), Zero-Trust cybersecurity, and applied generative AI systems.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: ["/logo.png"],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  keywords: [
    "Peak Tech",
    "IT Solutions",
    "Cloud Migration",
    "DevOps",
    "CI/CD",
    "FinOps",
    "Applied AI",
    "Cybersecurity",
    "Site Reliability Engineering",
    "Zero Trust",
    "AWS",
    "Azure",
    "GCP"
  ],
  authors: [{ name: "Peak Tech IT Solutions" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-950 text-slate-100 min-h-screen antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
