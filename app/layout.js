import Header from './components/header';
import Footer from './components/footer';
import "./globals.css";

export const metadata = {
  title: "The Tech Minimalist",
  description: "ICT Blog and Podcast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div><Header /></div>
        <div>{children}</div>
        <div><Footer /></div>
      </body>
    </html>
  );
}
