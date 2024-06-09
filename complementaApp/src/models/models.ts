export interface Atividade {
	  id: number;
  name: string;
  description: string;
  status: number;
  executor: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
