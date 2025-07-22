
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Header } from "./component";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HebilBlue",
  description: "Bodrum'un mavi bayraklı Hebil Koyu'nda denize adım mesafede; doğanın tüm renklerini içine alan yeni bir yaşam deneyimi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <div className="flex flex-col min-h-screen bg-white">
          <main className="flex-1 w-full">
            <Header />
            {children}  
          </main>
        </div>
      </body>
    </html>
  );
}
