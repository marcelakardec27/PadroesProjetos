// Mapeamento isolado dos seletores e rotas da UI para cadastro
import { CONFIG } from "../config/environment.js";

export const CadastroElements = {
  URL: `${CONFIG.URL_BASE}/cadastro`,
  INPUT_NOME: "#txt-nome",
  INPUT_EMAIL: "#txt-email",
  INPUT_SENHA: "#txt-senha",
  BTN_CADASTRAR: "#btn-cadastrar",
};