export interface AgendamentoDescarte {
  estado: string;
  cidade: string;
  empresa: string;
  tipoDescarte: string;
}

export interface AgendamentoResponse {
  message: string;
}

export type PontoDescarte = {
  idPonto: number;
  logradouroPonto: string;
  cidadePonto: string;
  ufPonto: string;
};

export type SolicitacaoDescarte = {
  idSolicitacao?: number;
  cnpj?: string;
  cpf?: string;
  numeroContato: string;
  cepEmpresa: string;
  logradouroEmpresa: string;
  ufEmpresa: string;
  cidadeEmpresa: string;
  numeroEmpresa: number;
  tipoCaminhao: string;
  valorServico: number;
  formaPagamento: string;
  dtHrBusca: string;
  idPonto: number;
};
export interface FormFieldProps {
  label: string;
  value: string | number;
  placeholder?: string;
  type?: string;
  options?: { value: string | number; label: string }[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  readOnly?: boolean;
}