import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";

//Adicionando as configuracoes das fontes do google
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

//Adicionando metadados para o site
export const metadata: Metadata = {
  title: "Ksecurity",
  description: "Site officiel de Ksecurity",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} antialiased`}>
        <Header />
        {children}
        
      </body>
    </html>
  );
}
