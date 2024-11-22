import React from 'react';

type PontoDescarte = {
  idPonto: number;
  cepPonto: string;
  logradouroPonto: string;
  ufPonto: string;
  cidadePonto: string;
  numPonto: number;
};

type PontoCardProps = {
  ponto: PontoDescarte;
};

const PontoCard: React.FC<PontoCardProps> = ({ ponto }) => {
  const enderecoCompleto = `${ponto.logradouroPonto}, ${ponto.numPonto}, ${ponto.cidadePonto}, ${ponto.ufPonto}, ${ponto.cepPonto}`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoCompleto)}`;

  return (
    <div className="ponto-card p-4 bg-gray-200 rounded-lg shadow w-80">
      <h3 className="font-semibold mt-2">{ponto.logradouroPonto}</h3>
      <p>
        Número: {ponto.numPonto}
      </p>
      <p>
        {ponto.cidadePonto} - {ponto.ufPonto}
      </p>
      <p>CEP: {ponto.cepPonto}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => window.open(googleMapsUrl, '_blank')}
      >
        Ver no Google Maps
      </button>
    </div>
  );
};

export default PontoCard;
