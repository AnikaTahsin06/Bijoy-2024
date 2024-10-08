import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";
import Authprovider from "@/component/Authprovider/Authprovider";

export const metadata = {
  title: "Bijoy 2024",
  description: "Generated by Bijoy 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen h-screen bg-green-100 overflow-hidden">
        <ul className="flex items-center justify-between p-4 bg-green-900">
          <li className="mr-6">
            <Link href="/" className="text-rose-700 font-bold text-xl hover:text-rose-800">
              Bijoy2024
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/" className="text-white hover:text-green-100">
              Home
            </Link>
          </li>
          <div className="flex ml-auto">
            <li className="mr-6">
              <Link href="/pages/login" className="text-white hover:text-green-100">
                Login
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/pages/signup" className="text-white hover:text-green-100">
                Signup
              </Link>
            </li>
          </div>
        </ul>

        <main className="flex-grow">
          <Authprovider>
            {children}
          </Authprovider>
        </main>
      </body>
    </html>
  );
}
