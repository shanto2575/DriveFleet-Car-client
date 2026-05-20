import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "DriveFleet | Car Rental Service",
  description:
    "DriveFleet is a modern car rental platform where you can explore cars, book rides, and manage bookings  and securely.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.className}  h-full antialiased `}>
      <body className="min-h-full flex flex-col text-white bg-linear-to-r from-gray-700 via-gray-950 to-gray-700">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        <Toaster />
      </body>
    </html>
  );
}

