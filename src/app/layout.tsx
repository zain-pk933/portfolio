import type { Metadata } from "next";
import { Inter,Montserrat } from "next/font/google";
// import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"] });
const montserrat  = Montserrat ({ subsets: ["latin"],weight:'500',variable:'--font-montserrat' });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
