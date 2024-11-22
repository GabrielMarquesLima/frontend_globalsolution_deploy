import Link from "next/link";

export default function Home() {
  return (
    <div className="page bg-gray-100 min-h-screen flex flex-col">
      <header className="header bg-green-600 text-white py-8">
        <h1 className="text-4xl font-bold text-center">Bem-vindo ao EcoSafe</h1>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          O portal EcoSafe facilita o descarte consciente de lixo eletrônico.
          Navegue para encontrar pontos de descarte ou agendar uma coleta para
          empresas.
        </p>
      </header>

      <main className="main flex-grow px-4 py-12">
        <section className="content text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-700">
            Contribua para um futuro sustentável
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            EcoSafe ajuda a promover o descarte seguro de equipamentos
            eletrônicos e reduzir o impacto ambiental. Faça parte da mudança!
          </p>
          <Link
            href="/agendar-descartes"
            className="cta-button mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
          >
            Agendar Coleta
          </Link>
        </section>

        <section className="sustainability bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-semibold text-green-700 text-center mb-6">
            Por que a Sustentabilidade é Importante?
          </h2>
          <div className="max-w-2xl mx-auto text-gray-700">
            <p className="mb-4">
              A sustentabilidade é essencial para garantir que as futuras
              gerações possam desfrutar de um planeta saudável. O descarte
              inadequado de lixo eletrônico pode causar sérios danos ao meio
              ambiente e à saúde humana.
            </p>
            <p>
              Ao reciclar e descartar corretamente os equipamentos eletrônicos,
              você ajuda a reduzir a poluição, conservar recursos naturais e
              diminuir a emissão de gases de efeito estufa.
            </p>
          </div>
        </section>

        <section className="how-to-dispose bg-green-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-semibold text-green-700 text-center mb-6">
            Como Descartar Lixo Eletrônico
          </h2>
          <div className="steps grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="step flex flex-col items-center text-center">
              <div className="icon mb-4">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h18v18H3V3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black">
                1. Reúna seus eletrônicos
              </h3>
              <p className="mt-2 text-gray-600">
                Separe todos os dispositivos eletrônicos que não estão mais em
                uso.
              </p>
            </div>
            <div className="step flex flex-col items-center text-center">
              <div className="icon mb-4">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black">
                2. Encontre um ponto de descarte
              </h3>
              <p className="mt-2 text-gray-600">
                Use nosso mapa para localizar o ponto de descarte mais próximo.
              </p>
            </div>
            <div className="step flex flex-col items-center text-center">
              <div className="icon mb-4">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black">
                3. Descarte com responsabilidade
              </h3>
              <p className="mt-2 text-gray-600">
                Entregue seus eletrônicos no ponto selecionado ou agende uma
                coleta para sua empresa.
              </p>
            </div>
          </div>
        </section>

        <section className="statistics bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-green-700 text-center mb-6">
            Impacto da Reciclagem de Lixo Eletrônico
          </h2>
          <div className="stats grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="stat">
              <h3 className="text-2xl font-bold text-green-600">+1 Milhão</h3>
              <p className="mt-2 text-gray-600">
                Dispositivos Reciclados Anualmente
              </p>
            </div>
            <div className="stat">
              <h3 className="text-2xl font-bold text-green-600">
                Redução de 500 Toneladas
              </h3>
              <p className="mt-2 text-gray-600">
                de Resíduos no Meio Ambiente
              </p>
            </div>
            <div className="stat">
              <h3 className="text-2xl font-bold text-green-600">
                Economia de 200 Mil
              </h3>
              <p className="mt-2 text-gray-600">em Recursos Naturais</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
