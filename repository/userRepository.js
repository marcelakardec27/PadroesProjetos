// Simula a camada de banco de dados sem poluir as variáveis globais do teste
class UserRepository {
  constructor() {
    this.bancoDeDados = new Map();
  }

  salvar(usuario) {
    this.bancoDeDados.set(usuario.email, usuario);
  }

  buscarPorEmail(email) {
    return this.bancoDeDados.get(email) || null;
  }

  limpar() {
    this.bancoDeDados.clear();
  }
}

export const userRepository = new UserRepository();