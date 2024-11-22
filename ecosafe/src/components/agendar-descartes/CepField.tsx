import React, { useState } from "react";

type CepFieldProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  onComplete: (data: { logradouro: string; uf: string; localidade: string }) => void;
};

const CepField: React.FC<CepFieldProps> = ({ label, value, setValue, onComplete }) => {
  const [error, setError] = useState<string | null>(null);

  const buscarCep = async () => {
    if (!value || value.length !== 8) {
      setError("CEP inválido. O CEP deve ter 8 dígitos.");
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
      const data = await response.json();
      if (data.erro) {
        setError("CEP não encontrado.");
      } else {
        setError(null);
        onComplete({
          logradouro: data.logradouro || "",
          uf: data.uf || "",
          localidade: data.localidade || "",
        });
      }
    } catch (err) {
      setError("Erro ao buscar o CEP. Tente novamente.");
      console.error(err);
    }
  };

  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={buscarCep}
          maxLength={8}
          className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-green-500"
          placeholder="Insira o CEP"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CepField;
