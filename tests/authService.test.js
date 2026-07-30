import test from 'node:test';
import assert from 'node:assert/strict';
import { AuthService } from '../services/authService.js';
import { userRepository } from '../repository/userRepository.js';

const authService = new AuthService(userRepository);

test('autentica usuário cadastrado no repositório', () => {
  userRepository.salvar({ nome: 'Ana', email: 'ana@email.com', senha: 'Senha@123' });

  const resposta = authService.autenticar('ana@email.com', 'Senha@123');

  assert.equal(resposta.status, 200);
  assert.equal(resposta.token, 'token_ana@email.com');
});

test('retorna erro para credenciais inválidas', () => {
  const resposta = authService.autenticar('naoexiste@email.com', 'senhaerrada');

  assert.equal(resposta.status, 401);
  assert.equal(resposta.erro, 'Credenciais inválidas');
});

test('aceita o usuário padrão do sistema', () => {
  const resposta = authService.autenticar('usuario.padrao@sistema.com', 'SenhaSegura123!');

  assert.equal(resposta.status, 200);
  assert.ok(resposta.token);
});
