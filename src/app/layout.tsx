import type { Metadata } from "next";
import Script from "next/script";
import { Chakra_Petch, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Euro Money | Telegram",
  description:
    "Schreib unserem Manager auf Telegram und erfahre, wie du noch heute 2000€ erhalten kannst!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${sora.variable} ${chakraPetch.variable} antialiased`}>
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: ``,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
