import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../app/globals.css";

export const metadata = {
  title: "Human Starter",
  description: "Boilerplate para desarrollo rápido de sitios web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}