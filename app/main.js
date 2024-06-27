let livros = [];

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  try {
    // Exibir mensagem de carregamento (opcional)
    console.log("Carregando livros...");

    const resposta = await fetch(endpointDaAPI);
    livros = await resposta.json();

    let livrosComDesconto = aplicarDesconto(livros);
    exibirOslivrosNaTela(livrosComDesconto);

  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    // Exibir mensagem de erro para o usuário (opcional)
  }
}
