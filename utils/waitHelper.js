// Substitui a espera síncrona que travava a Thread por Promises assíncronas
export const waitHelper = {
  async aguardar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
};