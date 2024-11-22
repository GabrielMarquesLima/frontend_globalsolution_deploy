"use client";

import React, { useState, useEffect } from "react";

const myVariable: any = "some value";
const Dashboard: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [response, setResponse] = useState<any>(null);
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string | null>(null);

  const electronicItems = [
    "Celular Antigo",
    "Laptop Quebrado",
    "Carregador de Bateria",
    "Televisão CRT",
    "Monitor LCD",
    "Impressora",
    "Bateria de Notebook",
    "Tablet Danificado",
    "Câmera Digital",
    "Console de Videogame Antigo",
  ];

  // Buscar métricas ao carregar o componente
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/metrics");
        if (!res.ok) {
          throw new Error(`Erro ao buscar métricas: ${res.statusText}`);
        }
        const data = await res.json();
        setMetrics(data);
      } catch (err) {
        setError("Não foi possível carregar as métricas. Tente novamente.");
        console.error(err);
      }
    };
    fetchMetrics();
  }, []);

  const handleSelection = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://127.0.0.1:5000/processar_lixos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lixos: selectedItems }),
      });

      if (!res.ok) {
        throw new Error(`Erro ao processar lixos: ${res.statusText}`);
      }

      const data = await res.json();
      setResponse(data.resultados);
    } catch (err) {
      setError("Erro ao processar o descarte. Tente novamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Dashboard de Sustentabilidade
        </h1>

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-700">Materiais Reciclados</h2>
            <p className="text-gray-600 text-lg mt-2">
              {metrics?.materiais_reciclados_kg || 0} Kg
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-700">CO₂ Evitado</h2>
            <p className="text-gray-600 text-lg mt-2">
              {metrics?.co2_evitado_kg || 0} Kg
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-yellow-700">Energia Economizada</h2>
            <p className="text-gray-600 text-lg mt-2">
              {metrics?.energia_economizada_kwh || 0} KWh
            </p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-teal-700">Água Economizada</h2>
            <p className="text-gray-600 text-lg mt-2">
              {metrics?.agua_economizada_litros || 0} Litros
            </p>
          </div>
        </div>

        <p className="text-gray-600 mb-6 text-center">
          Selecione os lixos eletrônicos que deseja descartar:
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {electronicItems.map((item) => (
            <li key={item} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={item}
                className="w-4 h-4 text-green-500 rounded focus:ring-green-500 focus:ring-opacity-50"
                checked={selectedItems.includes(item)}
                onChange={() => handleSelection(item)}
              />
              <label htmlFor={item} className="text-gray-700">
                {item}
              </label>
            </li>
          ))}
        </ul>

        <button
          onClick={handleSubmit}
          className={`w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-200 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Processando..." : "Processar Descarte"}
        </button>
      </div>

      {response && (
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg mt-6 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Resultado do Processamento
          </h2>
          {response.map((res: any) => (
            <div
              key={res.lixo}
              className="bg-gray-50 border-l-4 border-green-500 p-4 rounded mb-4"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {res.lixo}
              </h3>
              <p className="text-gray-700">
                <strong>Processo:</strong> {res.processo}
              </p>
              <p className="text-gray-700">
                <strong>Impacto Ambiental:</strong> {res.impacto}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
