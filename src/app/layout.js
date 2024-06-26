import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/navbar/Navbar";
import '@/Components/Responsive.css';
import '@/app/navbar.css';
import '@/app/exhibitionbuilder.css';
import '@/app/Arrounworld.css';
import '@/app/design.css';
import '@/app/Custom.css';
import '@/app/germany.css';
import '@/app/major.css';
import Counterup from "@/Components/Counterup";
import Mainform from "@/Components/Mainform";
import Footer from "@/Components/Footer";
import Universe from "@/Components/Universe";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
        <Counterup />
        <Mainform/>
        <Footer/>
        <Universe/>


      </body>
    </html>
  );
}
