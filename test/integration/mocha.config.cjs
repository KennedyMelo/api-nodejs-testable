/* --require @babel/register
--require test/integration/helpers.js
--reporter spec
--slow 5000 */

module.exports = {
  require: ['test/integration/helpers.js'], // Adicione quaisquer módulos que você deseja exigir antes da execução dos testes.
  reporter: 'spec', // Escolha o reporter que deseja usar para a saída dos testes.
  //timeout: 3000, // Defina o limite de tempo para os testes (em milissegundos).
  slow: 5000, // Especifique o limite de tempo para considerar um teste como "lento" (em milissegundos).
  //recursive: true, // Habilitar a busca por testes em subdiretórios.
  //fgrep: 'string_de_teste', // Filtre os testes para executar apenas aqueles que contêm a string especificada.
  // Adicione outras opções de configuração conforme necessário.
}