import Image from "next/image";
import Menu from "../Menu/Menu";
import imgLogo from "@/img/logo.jpg";

const myVariable: any = "some value";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <Image src={imgLogo} alt="Logo EcoSafe" width={200} height={200} />
      <Menu />
    </header>
  );
}
