import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Costellar: Crafting Exceptional Web Solutions for Your Digital Success",
  description: "Elevate your online presence with Costellar. Our web development expertise combines innovation and precision to create bespoke digital solutions tailored to your needs. Let's transform your vision into a stunning reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
