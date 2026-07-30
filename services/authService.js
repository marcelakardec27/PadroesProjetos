import { USER_DATA } from '../data/userData.js';
import { userRepository } from '../repository/userRepository.js';

export class AuthService {
  constructor(userRepositoryInstance = userRepository) {
    this.userRepository = userRepositoryInstance;
  }

  autenticar(email, senha) {
    if (!email || !senha) {
      return { status: 401, erro: 'Credenciais inválidas' };
    }

    const usuarioSalvo = this.userRepository.buscarPorEmail(email);

    if (usuarioSalvo && usuarioSalvo.senha === senha) {
      return { status: 200, token: `token_${usuarioSalvo.email}` };
    }

    if (
      email === USER_DATA.DEFAULT_SYSTEM_USER.email &&
      senha === USER_DATA.DEFAULT_SYSTEM_USER.senha
    ) {
      return { status: 200, token: 'token_padrao_abc' };
    }

    return { status: 401, erro: 'Credenciais inválidas' };
  }
}
