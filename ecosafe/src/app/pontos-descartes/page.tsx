"use client";

import React, { useState, ChangeEvent } from "react";
import PontoCard from "../../components/pontos-descartes/PontoCard";

type PontoDescarte = {
  idPonto: number;
  cepPonto: string;
  logradouroPonto: string;
  ufPonto: string;
  cidadePonto: string;
  numPonto: number;
};

const estadosECidades: { [estado: string]: string[] } = {
  AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá"],
  AL: ["Maceió", "Arapiraca", "Palmeira dos Índios", "Rio Largo"],
  AP: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque"],
  AM: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru"],
  BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Ilhéus", "Itabuna", "Juazeiro"],
  CE: ["Fortaleza", "Juazeiro do Norte", "Sobral", "Crato", "Maracanaú"],
  DF: ["Brasília"],
  ES: ["Vitória", "Vila Velha", "Serra", "Cariacica", "Cachoeiro de Itapemirim"],
  GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia"],
  MA: ["São Luís", "Imperatriz", "Caxias", "Timon", "São José de Ribamar"],
  MT: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop"],
  MS: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá"],
  MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Ribeirão das Neves"],
  PA: ["Belém", "Ananindeua", "Santarém", "Marabá", "Parauapebas"],
  PB: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos"],
  PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "São José dos Pinhais"],
  PE: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina"],
  PI: ["Teresina", "Parnaíba", "Picos", "Floriano"],
  RJ: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Niterói", "Nova Iguaçu", "Campos dos Goytacazes", "Petrópolis"],
  RN: ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante"],
  RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria"],
  RO: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena"],
  RR: ["Boa Vista", "Rorainópolis", "Caracaraí"],
  SC: ["Florianópolis", "Joinville", "Blumenau", "São José", "Criciúma"],
  SP: ["São Paulo", "Campinas", "Guarulhos", "São Bernardo do Campo", "Santo André", "Osasco", "Ribeirão Preto", "São José dos Campos", "Santos"],
  SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana"],
  TO: ["Palmas", "Araguaína", "Gurupi", "Porto Nacional"],
};

const Formulario = () => {
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string>("");
  const [cidades, setCidades] = useState<string[]>([]);
  const [pontosProximos, setPontosProximos] = useState<PontoDescarte[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEstadoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const estado = e.target.value;
    setEstadoSelecionado(estado);
    setCidades(estadosECidades[estado] || []);
    setCidadeSelecionada("");
  };

  const localizarPontos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:8080/pontos?uf=${estadoSelecionado}&cidade=${encodeURIComponent(cidadeSelecionada)}`
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar pontos de descarte.");
      }
      const data: PontoDescarte[] = await response.json();
      setPontosProximos(data);
    } catch (error) {
      console.error(error);
      setError("Erro ao buscar pontos de descarte.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen py-6">
      <div className="w-4/5 bg-gray-100 p-6 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label htmlFor="estado" className="block font-medium mb-2">
              Estado:
            </label>
            <select
              id="estado"
              value={estadoSelecionado}
              onChange={handleEstadoChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione um estado</option>
              {Object.keys(estadosECidades).map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="cidade" className="block font-medium mb-2">
              Cidade:
            </label>
            <select
              id="cidade"
              disabled={!estadoSelecionado}
              value={cidadeSelecionada}
              onChange={(e) => setCidadeSelecionada(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione uma cidade</option>
              {cidades.map((cidade) => (
                <option key={cidade} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition-all"
            onClick={localizarPontos}
            disabled={!estadoSelecionado || !cidadeSelecionada || loading}
          >
            {loading ? "Buscando..." : "Localizar Pontos"}
          </button>
        </form>
      </div>

      <div className="w-4/5 bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Pontos de Descarte Próximos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            <p>Carregando...</p>
          ) : error ? (
            <p>{error}</p>
          ) : pontosProximos.length > 0 ? (
            pontosProximos.map((ponto) => (
              <PontoCard key={ponto.idPonto} ponto={ponto} />
            ))
          ) : (
            <p className="text-center text-gray-500">
              Nenhum ponto de descarte encontrado.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Formulario;
