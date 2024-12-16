import Navbar from "@/components/NavBar/navbar";
import "./globals.css";
import Footer from "@/components/Footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-custom-bg bg-cover bg-center min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>{" "}
        {/* Esto asegura que el contenido crezca para llenar el espacio */}
        <Footer />
      </body>
    </html>
  );
}
