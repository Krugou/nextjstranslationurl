import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js i18n Translation Example",
  description: "Next.js application with internationalization for URL translation",
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
