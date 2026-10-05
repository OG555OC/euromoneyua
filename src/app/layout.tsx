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
    "Напиши нашему менеджеру в Telegram и узнай, как ты можешь получать по 600 € в неделю!",
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
