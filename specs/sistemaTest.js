import { CadastroPage } from "../pages/cadastroPages.js";
import { LoginPage } from "../pages/loginPages.js";
import { USER_DATA } from "../data/userData.js";
import { AuthService } from "../services/authService.js";

class SistemaTestSuite {
  constructor() {
    this.authService = new AuthService();
    this.cadastroPage = new CadastroPage();
    this.loginPage = new LoginPage(this.authService);
  }

  async executarTeste(nome, operacao, validar) {
    console.log(`\n🧪 Teste: ${nome}`);

    const resposta = await operacao();
    validar(resposta);
  }

  async testCadastroComSucesso() {
    await this.executarTeste(
      "Cadastro com sucesso",
      async () => this.cadastroPage.cadastrarUsuario(USER_DATA.VALID_USER),
      (resposta) => {
        if (resposta.status === 201) {
          console.log("   ✅ Passou: Usuário cadastrado com sucesso!");
        } else {
          throw new Error("❌ Falha no teste de cadastro com sucesso!");
        }
      }
    );
  }

  async testCadastroCamposObrigatorios() {
    await this.executarTeste(
      "Cadastro com campos obrigatórios ausentes",
      async () => this.cadastroPage.cadastrarUsuario(USER_DATA.INVALID_USER),
      (resposta) => {
        if (resposta.status === 400 && resposta.mensagem === "Todos os campos de cadastro são obrigatórios") {
          console.log("   ✅ Passou: Validação de campos obrigatórios funcionou!");
        } else {
          throw new Error("❌ Falha na validação de campos obrigatórios!");
        }
      }
    );
  }

  async testLoginUsuarioPadrao() {
    await this.executarTeste(
      "Login com usuário padrão do sistema",
      async () => this.loginPage.realizarLogin(USER_DATA.DEFAULT_SYSTEM_USER.email, USER_DATA.DEFAULT_SYSTEM_USER.senha),
      (resposta) => {
        if (resposta.status === 200 && resposta.token) {
          console.log("   ✅ Passou: Login de usuário padrão realizado!");
        } else {
          throw new Error("❌ Falha no login de usuário padrão!");
        }
      }
    );
  }

  async testLoginCredenciaisInvalidas() {
    await this.executarTeste(
      "Login com credenciais inválidas",
      async () => this.loginPage.realizarLogin(USER_DATA.UNREGISTERED_USER.email, USER_DATA.UNREGISTERED_USER.senha),
      (resposta) => {
        if (resposta.status === 401 && resposta.erro === "Credenciais inválidas") {
          console.log("   ✅ Passou: Tratamento de credenciais inválidas validado!");
        } else {
          throw new Error("❌ Falha na validação de credenciais inválidas!");
        }
      }
    );
  }

  async executar() {
    console.log("==============================================================");
    console.log("🚀 INICIANDO SUÍTE DE TESTES MODULARIZADA E REFATORADA");
    console.log("==============================================================");

    try {
      await this.testCadastroComSucesso();
      await this.testCadastroCamposObrigatorios();
      await this.testLoginUsuarioPadrao();
      await this.testLoginCredenciaisInvalidas();

      console.log("\n==============================================================");
      console.log("🎉 TODOS OS TESTES PASSARAM COM CÓDIGO LIMPO E MODULAR!");
      console.log("==============================================================");
    } catch (error) {
      console.error("\n❌ ERRO DURANTE A EXECUÇÃO DOS TESTES:", error.message);
    }
  }
}

new SistemaTestSuite().executar();