import { Inter } from "next/font/google";
import "./globals.css";
import  Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Night",
  description: "It's time for a good story!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
        <Navbar />
        </div>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
