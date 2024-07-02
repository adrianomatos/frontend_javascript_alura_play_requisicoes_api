import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
  evento.preventDefault();
  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaApi.buscaVideo(dadosDePesquisa);
  // console.log(busca);
  // Carregar resultados da busca na tela
  const lista = document.querySelector("[data-lista]");

  // Limpando lista antiga
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  // Carregar resultados da busca
  busca.forEach((item) =>
    lista.appendChild(
      constroiCard(item.titulo, item.descricao, item.url, item.imagem)
    )
  );

	if(busca.length == 0){
		lista.innerHTML = `<h2 class="mensagem__titulo">
		Não existem vídeos com esse termo!</h2>`;
	}
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento));
