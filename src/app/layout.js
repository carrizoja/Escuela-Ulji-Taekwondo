import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { ThemeProvider } from "../../src/context/ThemeContext";
import AuthProvider from "../components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Escuela Ulji Taekwondo",
  description:
    "Somos la escuela Ulji de Taekwondo ITF. Siempre en crecimiento. Con más de 20 años de experiencia en la enseñanza, nos ubicamos en la zona de Congreso, Capital Federal, Argentina. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
