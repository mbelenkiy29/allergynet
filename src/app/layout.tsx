import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Nationwide Allergy | Precision Allergy Testing & Immunotherapy for Primary Care",
  description: "Nationwide Allergy brings precision allergy testing and immunotherapy to Primary Care providers. Simple flat-fee programs, no contracts, expert clinical support since 2013.",
  icons: {
    icon: "/favicon.ico",
    apple: "/na-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://ext.same-assets.com" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
