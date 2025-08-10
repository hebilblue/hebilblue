
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./safari-fixes.css";
import "./sticky-header.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: 'swap',
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
    <html lang="tr">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
