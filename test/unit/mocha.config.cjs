
module.exports = {
  require: ['test/unit/helpers.js'], // Adicione quaisquer módulos que você deseja exigir antes da execução dos testes.
  reporter: 'spec', // Escolha o reporter que deseja usar para a saída dos testes.
  slow: 5000, // Especifique o limite de tempo para considerar um teste como "lento" (em milissegundos).
}