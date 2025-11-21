import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Navigation } from "@/components/Navigation";
import { FloatingContactBar } from "@/components/FloatingContactBar";
import { LoadingScreen } from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Hassaan Basit | Digital Growth Architect",
  description: "Portfolio of Hassaan Basit - Digital Growth Architect specializing in comprehensive digital ecosystems and business growth strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" />        <style>{`
        :root {
          --font-poppins: 'Poppins', sans-serif;
        }
      `}</style>
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <LoadingScreen />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Navigation />
        <FloatingContactBar />
        <main className="page-transition">
          {children}
        </main>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}