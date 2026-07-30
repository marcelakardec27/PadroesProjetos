import { LoginElements } from "../elements/loginElements.js";
import { waitHelper } from "../utils/waitHelper.js";
import { AuthService } from "../services/authService.js";

export class LoginPage {
  constructor(authService = new AuthService()) {
    this.authService = authService;
  }

  async navegar() {
    console.log(`   [UI] Carregando tela de login: ${LoginElements.URL}`);
    await waitHelper.aguardar(200);
  }

  async realizarLogin(email, senha) {
    await this.navegar();

    console.log(`   [UI] Inserindo credenciais para: ${email}`);
    await waitHelper.aguardar(300);

    return this.authService.autenticar(email, senha);
  }
}