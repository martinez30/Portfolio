import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastifyProvider from "./providers/ToastifyProvider";

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Paulo Martins Dev"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <body className={firaCode.className}>
        <ToastifyProvider>
          {children}
        </ToastifyProvider>
      </body>
    </html>
  );
}
