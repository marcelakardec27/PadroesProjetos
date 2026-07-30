// Separa a massa de dados do código dos testes (DRY / SRP)
export const USER_DATA = {
  VALID_USER: {
    nome: "João da Silva",
    email: "joao@email.com",
    senha: "Senha@123",
  },
  DEFAULT_SYSTEM_USER: {
    email: "usuario.padrao@sistema.com",
    senha: "SenhaSegura123!",
  },
  INVALID_USER: {
    nome: "Usuário Sem Email",
    email: "",
    senha: "Senha123",
  },
  UNREGISTERED_USER: {
    email: "errado@email.com",
    senha: "senha_incorreta",
  }
};