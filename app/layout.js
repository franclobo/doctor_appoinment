import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Appoinment",
  description: "Search your doctor and book appoinment in one click",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="md:px-20">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
