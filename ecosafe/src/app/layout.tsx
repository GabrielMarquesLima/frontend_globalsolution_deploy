import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import type { Metadata } from "next";
import "@/app/globals.css";

const myVariable: any = "some value";
export const metadata: Metadata = {
  title: "EcoSafe",
  description: "EcoSafe, por um planeta mais sustentável",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="h-full bg-background">
      <body className="text-foreground h-full">
        <Cabecalho />

        <div className="home h-full">
          {children}
          <Rodape />
        </div>
      </body>
    </html>
  );
}
