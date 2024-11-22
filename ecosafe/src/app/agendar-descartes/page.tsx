"use client";

import { useState, useEffect } from "react";
import FormField from "../../components/agendar-descartes/FormField";
import SolicitationCard from "../../components/agendar-descartes/SolicitationCard";
import { SolicitacaoDescarte, PontoDescarte } from "../../types/types";

const AgendarDescarte: React.FC = () => {
  const [isCnpj, setIsCnpj] = useState(true);
  const [cnpjCpf, setCnpjCpf] = useState("");
  const [numeroContato, setNumeroContato] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");
  const [numeroEmpresa, setNumeroEmpresa] = useState<number | "">("");
  const [tipoCaminhao, setTipoCaminhao] = useState("");
  const [valorServico, setValorServico] = useState(0);
  const [formaPagamento, setFormaPagamento] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [pontos, setPontos] = useState<PontoDescarte[]>([]);
  const [idPonto, setIdPonto] = useState<number | "">("");
  const [formError, setFormError] = useState<string>("");
  const [solicitacoes, setSolicitacoes] = useState<SolicitacaoDescarte[]>([]);
  const [loading, setLoading] = useState(false);

  // busca os pontos com base na uf e cidade (selecionado automaticamente com base no cep inserido pelo usuárioo)
  useEffect(() => {
    if (uf && cidade) {
      fetch(`http://localhost:8080/pontos?uf=${uf}&cidade=${cidade}`)
        .then((response) => response.json())
        .then((data: PontoDescarte[]) => setPontos(data))
        .catch((error) => console.error("Erro ao buscar pontos:", error));
    }
  }, [uf, cidade]);

  // Carregar solicitações
  const carregarSolicitacoes = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/solicitacoes");
      const data: SolicitacaoDescarte[] = await response.json();
      setSolicitacoes(data);
    } catch (error) {
      console.error("Erro ao carregar solicitações:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarSolicitacoes();
  }, []);

  // setando o valor do serviço com base no tanasnho do caminhão
  useEffect(() => {
    switch (tipoCaminhao) {
      case "Pequeno":
        setValorServico(80);
        break;
      case "Médio":
        setValorServico(140);
        break;
      case "Grande":
        setValorServico(200);
        break;
      default:
        setValorServico(0);
        break;
    }
  }, [tipoCaminhao]);

  const buscarCep = async (cep: string) => {
    if (cep.length < 8) return;
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setLogradouro(data.logradouro || "");
        setUf(data.uf || "");
        setCidade(data.localidade || "");
        setFormError("");
      } else {
        setFormError("CEP não encontrado.");
      }
    } catch (error) {
      setFormError("Erro ao buscar o CEP.");
      console.error(error);
    }
  };

  const agendarBusca = async () => {
    if (
      !cnpjCpf ||
      !numeroContato ||
      !cep ||
      !logradouro ||
      !uf ||
      !cidade ||
      !numeroEmpresa ||
      !tipoCaminhao ||
      !dataHora ||
      !formaPagamento ||
      !idPonto
    ) {
      setFormError("Por favor, preencha todos os campos!");
      return;
    }

    const formattedDataHora = new Date(dataHora).toISOString().slice(0, 19);

    const novaSolicitacao: SolicitacaoDescarte = {
      numeroContato,
      cepEmpresa: cep,
      logradouroEmpresa: logradouro,
      ufEmpresa: uf,
      cidadeEmpresa: cidade,
      numeroEmpresa: Number(numeroEmpresa),
      tipoCaminhao,
      valorServico,
      formaPagamento,
      dtHrBusca: formattedDataHora,
      idPonto: Number(idPonto),
    };

    if (isCnpj) {
      novaSolicitacao.cnpj = cnpjCpf;
    } else {
      novaSolicitacao.cpf = cnpjCpf;
    }

    try {
      const response = await fetch("http://localhost:8080/solicitacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaSolicitacao),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro ao criar solicitação: ${errorText}`);
      }

      setFormError("Agendamento realizado com sucesso!");
      carregarSolicitacoes();
      limparFormulario();
    } catch (error) {
      console.error("Erro ao criar solicitação:", error);
      setFormError(
        error instanceof Error ? error.message : "Erro ao realizar o agendamento."
      );
    }
  };

  const limparFormulario = () => {
    setCnpjCpf("");
    setNumeroContato("");
    setCep("");
    setLogradouro("");
    setUf("");
    setCidade("");
    setNumeroEmpresa("");
    setTipoCaminhao("");
    setFormaPagamento("");
    setDataHora("");
    setIdPonto("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-gray-200 py-10">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Agendar Busca de Descarte
        </h1>
        {formError && (
          <p className="text-red-600 font-semibold mb-4">{formError}</p>
        )}

        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={isCnpj}
                onChange={() => setIsCnpj(true)}
                className="mr-2"
              />
              CNPJ
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={!isCnpj}
                onChange={() => setIsCnpj(false)}
                className="mr-2"
              />
              CPF
            </label>
          </div>

          <FormField
            label={isCnpj ? "CNPJ" : "CPF"}
            value={cnpjCpf}
            placeholder={isCnpj ? "CNPJ" : "CPF"}
            onChange={(e) => setCnpjCpf(e.target.value)}
          />
          <FormField
            label="Número de Contato"
            value={numeroContato}
            placeholder="Insira o número de contato"
            onChange={(e) => setNumeroContato(e.target.value)}
          />
          <FormField
            label="CEP"
            value={cep}
            placeholder="Insira o CEP"
            onChange={(e) => {
              setCep(e.target.value);
              if (e.target.value.length === 8) {
                buscarCep(e.target.value);
              }
            }}
          />
          <FormField
            label="Logradouro"
            value={logradouro}
            placeholder="Logradouro"
            readOnly
          />
          <FormField label="UF" value={uf} placeholder="UF" readOnly />
          <FormField label="Cidade" value={cidade} placeholder="Cidade" readOnly />
          <FormField
            label="Número da Empresa"
            type="number"
            value={numeroEmpresa}
            placeholder="Número"
            onChange={(e) => setNumeroEmpresa(Number(e.target.value))}
          />
          <FormField
            label="Ponto de Descarte"
            value={idPonto}
            onChange={(e) => setIdPonto(Number(e.target.value))}
            options={pontos.map((ponto) => ({
              value: ponto.idPonto,
              label: `${ponto.logradouroPonto} - ${ponto.cidadePonto}/${ponto.ufPonto}`,
            }))}
          />
          <FormField
            label="Tipo de Caminhão"
            value={tipoCaminhao}
            onChange={(e) => setTipoCaminhao(e.target.value)}
            options={[
              { value: "Pequeno", label: "Pequeno" },
              { value: "Médio", label: "Médio" },
              { value: "Grande", label: "Grande" },
            ]}
          />
          <p className="w-full p-3 bg-gray-100 border rounded shadow-sm">
            Valor do Serviço: <strong>R$ {valorServico.toFixed(2)}</strong>
          </p>
          <FormField
            label="Forma de Pagamento"
            value={formaPagamento}
            onChange={(e) => setFormaPagamento(e.target.value)}
            options={[
              { value: "Pix", label: "Pix" },
              { value: "Boleto", label: "Boleto" },
              { value: "Cartão de Crédito", label: "Cartão de Crédito" },
              { value: "Cartão de Débito", label: "Cartão de Débito" },
            ]}
          />
          <FormField
            label="Data e Hora"
            type="datetime-local"
            value={dataHora}
            onChange={(e) => setDataHora(e.target.value)}
          />
        </div>

        <button
          onClick={agendarBusca}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Agendar
        </button>
      </div>

      <div className="max-w-5xl mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4 text-center">
          Solicitações de Descarte
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            <p>Carregando...</p>
          ) : solicitacoes.length > 0 ? (
            solicitacoes.map((solicitacao) => (
              <SolicitationCard
                key={solicitacao.idSolicitacao}
                solicitacao={solicitacao}
              />
            ))
          ) : (
            <p>Nenhuma solicitação encontrada.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgendarDescarte;
