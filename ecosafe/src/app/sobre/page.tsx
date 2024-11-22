import React from "react";
import Link from "next/link";

const Sobre: React.FC = () => {
  return (
    <section className="sobre-nos">
      <div className="container">
        <h2 className="titulo-principal">Bem-vindo à EcoSafe</h2>
        <p className="introducao">
          A solução digital focada em sustentabilidade, tecnologia e
          responsabilidade ambiental.
        </p>

        <div className="secao-missao">
          <h3 className="titulo-secundario">Nossa Missão</h3>
          <p>
            A EcoSafe nasceu do desejo de criar um sistema que facilite a
            correta destinação de resíduos e promova um mundo mais limpo e
            saudável. Sabemos que cada pequena ação de descarte consciente gera
            um grande impacto, e, com isso em mente, nossa equipe de
            desenvolvedores e idealizadores tem o objetivo de facilitar o acesso
            a pontos de descarte e agendamento, promovendo a conscientização e
            contribuindo para um planeta mais sustentável.
          </p>
        </div>

        <div className="secao-motivacao">
          <h3 className="titulo-secundario">Por Que Criamos a EcoSafe?</h3>
          <p>
            A EcoSafe foi criada para resolver um problema cada vez mais
            urgente: a falta de acessibilidade e organização na destinação de
            resíduos. Em um mundo onde o descarte inadequado impacta
            significativamente o meio ambiente, a EcoSafe visa simplificar o
            processo de descarte para os usuários, proporcionando uma plataforma
            intuitiva e funcional. A ideia é proporcionar uma ferramenta que
            realmente faça a diferença na forma como as pessoas lidam com seus
            resíduos diários, promovendo a conscientização e facilitando o
            engajamento com práticas sustentáveis.
          </p>
        </div>

        <div className="secao-futuro">
          <h3 className="titulo-secundario">Expectativas e Futuro</h3>
          <p>
            Nosso objetivo com a EcoSafe é torná-la uma referência em
            sustentabilidade digital. Planejamos continuar inovando, adicionando
            novas funcionalidades e aprimorando a experiência do usuário, com
            possibilidades de expansão para incluir mais tipos de resíduos e
            novos parceiros de descarte. A EcoSafe é mais do que um aplicativo –
            é uma ferramenta de transformação e educação, que ajudará pessoas e
            empresas a adotar hábitos mais responsáveis.
          </p>
        </div>

        <div className="secao-tecnologia">
          <h3 className="titulo-secundario">Tecnologia e Desenvolvimento</h3>
          <p>
            <strong>Front-End:</strong> Construída em React e Next.js com
            TypeScript, a interface do usuário é pensada para ser responsiva e
            acessível, com a utilização de Tailwind CSS para estilização,
            criando uma aparência limpa e moderna.
          </p>
          <p>
            <strong>Back-End:</strong> Para o gerenciamento dos dados, a EcoSafe
            utiliza Python com um sistema de CRUD robusto, garantindo que todas
            as informações sejam armazenadas e acessadas de maneira segura e
            eficiente. O servidor é projetado para integrar facilmente APIs de
            terceiros e facilitar futuras expansões.
          </p>
          <p>
            <strong>Banco de Dados:</strong> Utilizamos um banco de dados SQL
            (Oracle) que foi projetado para garantir a integridade dos dados e
            permitir o acesso seguro e rápido. A estrutura do banco é organizada
            para facilitar a adição e consulta de informações, o que torna o
            sistema flexível e escalável.
          </p>
          <p>
            <strong>Inteligência Artificial e APIs Externas:</strong> A EcoSafe
            pretende integrar recursos de inteligência artificial (IA) para
            melhorar a eficiência da plataforma. Com IA, pretendemos analisar
            padrões de descarte, sugerir opções de reciclagem e, no futuro,
            oferecer insights personalizados para os usuários.
          </p>
        </div>

        <div className="secao-diferenciais">
          <h3 className="titulo-secundario">O Que Nos Diferencia</h3>
          <ul>
            <li>
              <strong>Intuitiva:</strong> A interface é simples e acessível para
              todos os usuários, independente de experiência com tecnologia.
            </li>
            <li>
              <strong>Consciente:</strong> Cada funcionalidade é pensada para
              facilitar a adoção de práticas sustentáveis e para educar o
              usuário.
            </li>
            <li>
              <strong>Avançada:</strong> A combinação de tecnologias modernas e
              a visão de integração com IA fazem da EcoSafe uma plataforma
              pioneira no segmento.
            </li>
            <li>
              <strong>Confiável:</strong> Utilizamos boas práticas de
              programação e armazenamento de dados, garantindo a segurança e a
              integridade das informações.
            </li>
          </ul>
        </div>

        <div className="secao-convite">
          <h3 className="titulo-secundario">Junte-se a Nós</h3>
          <p>
            A EcoSafe acredita que a tecnologia pode ser uma poderosa aliada na
            luta pela preservação do meio ambiente. Junte-se a nós nessa missão
            de conscientização e sustentabilidade, e faça parte de uma
            comunidade que se importa com o futuro do planeta.
          </p>
        </div>

        <Link
          href="/integrantes"
          className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 mt-6 inline-block text-center"
        >
          Conheça os Integrantes do Projeto
        </Link>
      </div>
    </section>
  );
};

export default Sobre;
