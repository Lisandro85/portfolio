"use client";
import Navbar from "@/components/NavBar/navbar";
import Footer from "@/components/Footer/footer";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

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
          {/* Envolvemos el contenido con LanguageProvider */}
          <header>
            <Navbar />
          </header>
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
