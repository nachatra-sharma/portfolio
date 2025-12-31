import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/ThemeProvider";
import Footer from "@/components/custom/Footer";
import { Inter } from "next/font/google";
import { NavbarComponent } from "@/components/custom/Navbar";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Nachatra Sharma | Full Stack Developer",
  description:
    "I started my journey in 2023, and today I'm growing as a full-stack developer who loves crafting websites that speak true engineering. What excites me the most is building apps, solving logic problems, creating clean UI and learning new technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex w-full flex-col items-start justify-start overflow-hidden">
            <NavbarComponent />
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
