import { CadastroElements } from "../elements/cadastroElements.js";
import { waitHelper } from "../utils/waitHelper.js";
import { userRepository } from "../repository/userRepository.js";



export class CadastroPage {
  constructor(userRepositoryInstance = userRepository) {
    this.userRepository = userRepositoryInstance;
  }

  async navegar() {
    console.log(`   [UI] Carregando tela de cadastro: ${CadastroElements.URL}`);
    await waitHelper.aguardar(200);
  }

  prepararUsuario(usuario) {
    return {
      nome: usuario?.nome || "",
      email: usuario?.email || "",
      senha: usuario?.senha || "",
    };
  }

  validarDados(usuario) {
    const { nome, email, senha } = usuario;
    return Boolean(nome && email && senha);
  }

  async cadastrarUsuario(usuario) {
    await this.navegar();

    const dadosUsuario = this.prepararUsuario(usuario);

    if (!this.validarDados(dadosUsuario)) {
      console.log("   [UI] Erro: Campos obrigatórios em branco.");
      return { status: 400, mensagem: "Todos os campos de cadastro são obrigatórios" };
    }

    console.log(`   [UI] Preenchendo formulário: ${dadosUsuario.nome} | ${dadosUsuario.email}`);
    await waitHelper.aguardar(300);

    this.userRepository.salvar(dadosUsuario);

    console.log("   [UI] Submetendo cadastro...");
    await waitHelper.aguardar(300);

    return { status: 201, id: Date.now(), usuario: dadosUsuario };
  }
}