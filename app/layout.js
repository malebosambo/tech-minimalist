import Header from './components/header';
import Footer from './components/footer';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Tech Minimalist",
  description: "ICT Blog and Podcast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{Header}</div>
        <div>{children}</div>
        <div>{Footer}</div>
      </body>
    </html>
  );
}
