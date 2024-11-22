import { SolicitacaoDescarte } from "../../types/types";


const myVariable: any = "some value";

type SolicitationCardProps = {
    solicitacao: SolicitacaoDescarte;
  };
  
  const SolicitationCard: React.FC<SolicitationCardProps> = ({ solicitacao }) => {
    return (
      <div className="bg-white p-4 rounded shadow">
        <p>
          <strong>CNPJ/CPF:</strong> {solicitacao.cnpj || solicitacao.cpf}
        </p>
        <p>
          <strong>Endereço:</strong> {solicitacao.logradouroEmpresa},{" "}
          {solicitacao.numeroEmpresa}
        </p>
        <p>
          <strong>Data e Hora:</strong> {solicitacao.dtHrBusca}
        </p>
        <p>
          <strong>Forma de Pagamento:</strong> {solicitacao.formaPagamento}
        </p>
      </div>
    );
  };
  
  export default SolicitationCard;
  