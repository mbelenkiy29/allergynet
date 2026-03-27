import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Heidi | Your AI Care Partner for Modern Clinical Practice",
  description: "Heidi supports clinicians across every step of care—from documentation to evidence. Practical AI tools designed to save time, reduce admin, and support better clinical outcomes.",
  icons: {
    icon: "https://ext.same-assets.com/1285281425/590722250.ico",
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
