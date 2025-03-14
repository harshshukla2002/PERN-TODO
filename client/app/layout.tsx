import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "./globals.css";
import QueryProvider from "./QueryProvider";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Customize weights
  variable: "--font-raleway", // Optional for CSS variables
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo app with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable}  antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
