# 🚀 Refatoração e Arquitetura Modular em Automação de Testes

## 📋 Descrição do Projeto

Este repositório contém a refatoração completa de um código de automação de testes originalmente legado, monolítico e com alto nível de acoplamento. 

O objetivo principal foi reestruturar o código aplicando os **princípios de arquitetura modular, Clean Code e design de testes**, transformando um script único e frágil em uma suíte de testes robusta, sustentável, de fácil manutenção e legível.

---

## 📐 Princípios de Arquitetura & Design Aplicados

Durante o processo de refatoração, foram rigorosamente aplicados os seguintes princípios e boas práticas:

- **SRP (Single Responsibility Principle):** Cada arquivo, classe, método ou teste possui uma responsabilidade única e bem definida.
- **DRY (Don’t Repeat Yourself):** Eliminação de código duplicado através da criação de *helpers* reutilizáveis, centralização de dados e configurações de ambiente.
- **KISS (Keep It Simple, Stupid):** Manutenção da estrutura de código o mais simples e direta possível, substituindo rotinas complexas e síncronas bloqueantes por promessas assíncronas não-bloqueantes.
- **Baixo Acoplamento:** Remoção de variáveis e estados globais compartilhados. Os testes e módulos funcionam de forma independente, sem dependência do estado interno de outros testes.
- **Alta Coesão:** Módulos e classes focados estritamente em seu objetivo do domínio (ex: *Elements* focados em seletores, *Pages* focadas nas ações da interface, *Specs* focadas nas validações).
- **Separação de Responsabilidades (Padrão AAA):** Estruturação de cada cenário de teste dividida em três fases claras:
  - **Arrange (Preparação):** Definição da massa de dados e precondições.
  - **Act (Execução):** Interação com o sistema via *Page Objects*.
  - **Assert (Validação):** Verificação do resultado esperado.

---

## 📁 Estrutura do Projeto

A arquitetura do projeto foi organizada de forma modular na seguinte estrutura de diretórios:

```text
.
├── config/
│   └── environment.js          # Configurações globais do sistema (URLs, timeouts)
├── data/
│   └── userData.js             # Mapeamento e abstração das massas de dados de teste
├── utils/
│   └── waitHelper.js           # Helpers assíncronos não-bloqueantes para temporização
├── elements/
│   ├── cadastroElements.js     # Mapeamento exclusivo dos seletores/rotas da tela de Cadastro
│   └── loginElements.js        # Mapeamento exclusivo dos seletores/rotas da tela de Login
├── pages/
│   ├── cadastroPage.js         # Page Object com ações e comportamentos da tela de Cadastro
│   └── loginPage.js            # Page Object com ações e comportamentos da tela de Login
├── repository/
│   └── userRepository.js       # Camada de persistência/banco isolada (elimina estado global)
└── specs/
    └── sistemaTest.js          # Suíte de execução dos testes de automação (Pattern AAA)
