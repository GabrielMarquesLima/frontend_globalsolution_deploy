import React from "react";
import Image from "next/image";
import imgCaua from "@/img/caua.jpg";
import imgMarques from "@/img/marques.jpg";
import imgGabriel from "@/img/lima.jpeg";
import linkedinIcon from "@/img/linkedin.jpg";
import githubIcon from "@/img/github.jpg";

const Integrantes: React.FC = () => {
  return (
    <section className="integrantes">
      <div className="container">
        <h2 className="titulo-principal">Conheça os Integrantes</h2>
        <div className="cards-container">
          <div className="card">
            <Image
              src={imgCaua}
              alt="Foto do Cauã Marcelo Machado"
              className="foto"
              width={250}
              height={200}
              style={{ borderRadius: "50%" }}
            />
            <div className="info">
              <h3 className="nome">Cauã Marcelo Machado</h3>
              <p className="faculdade">FIAP</p>
              <p className="turma">Turma: 1TDSPW</p>
              <p className="ano">1 ANO</p>
              <p className="resumo">
                Entusiasta de tecnologia com foco em Ciência de Dados, Backend e
                Design.
              </p>
              <div className="links">
                <a
                  href="https://www.linkedin.com/in/cauã-marcelo-machado-93b8a5263/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="social-icon"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href="https://github.com/CauaMachad0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={githubIcon}
                    alt="GitHub"
                    className="social-icon"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <Image
              src={imgMarques}
              alt="Foto do Gabriel Marques"
              className="foto"
              width={250}
              height={200}
              style={{ borderRadius: "50%" }}
            />
            <div className="info">
              <h3 className="nome">Gabriel Marques</h3>
              <p className="faculdade">FIAP</p>
              <p className="turma">Turma: 1TDSPW</p>
              <p className="ano">1 ANO</p>
              <p className="resumo">Full-stack Developer & Cloud Engineer</p>
              <div className="links">
                <a
                  href="https://www.linkedin.com/in/gabriel-marques-lima/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="social-icon"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href="https://github.com/GabrielMarquesLima"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={githubIcon}
                    alt="GitHub"
                    className="social-icon"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <Image
              src={imgGabriel}
              alt="Foto do Gabriel Lima"
              className="foto"
              width={250}
              height={200}
              style={{ borderRadius: "50%" }}
            />
            <div className="info">
              <h3 className="nome">Gabriel Lima</h3>
              <p className="faculdade">FIAP</p>
              <p className="turma">Turma: 1TDSPW</p>
              <p className="ano">1 ANO</p>
              <p className="resumo">
                Desenvolvedor e entusiasta de soluções digitais para problemas
                reais.
              </p>
              <div className="links">
                <a
                  href="https://www.linkedin.com/in/gabriel-lima-silvaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="social-icon"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href="https://github.com/Byells"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={githubIcon}
                    alt="GitHub"
                    className="social-icon"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrantes;
