import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ceejay Cumberbatch | Portfolio",
  description: "Full-Stack Web Developer building robust, scalable applications and enterprise solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}