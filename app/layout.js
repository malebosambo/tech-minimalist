import Header from './components/header';
import Footer from './components/footer';
import { Courier } from "next/font/google";
import "./globals.css";

const courier = Courier({ subsets: [""] });

export const metadata = {
  title: "The Tech Minimalist",
  description: "ICT Blog and Podcast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={courier.className}>
        <div>{Header}</div>
        <div>{children}</div>
        <div>{Footer}</div>
      </body>
    </html>
  );
}
