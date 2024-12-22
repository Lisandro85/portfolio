import Navbar from "@/components/NavBar/navbar";
import Footer from "@/components/Footer/footer";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";
import CoverParticles from "@/components/Cover-particles/coverParticles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lisandro Bedotti 💻",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-custom-bg bg-cover bg-center min-h-screen">
        <LanguageProvider>
          {" "}
          <header>
            <Navbar />
          </header>
          <main className="flex-grow">
            <CoverParticles />
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
