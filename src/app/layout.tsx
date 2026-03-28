import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "守矢神社",
  description: "諏訪子推しによる洩矢諏訪子のファンサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`h-full antialiased`}
    >
      <body className="scroll-smooth">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
