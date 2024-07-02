import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]"); // data-attributes

export default function constroiCard(titulo, descricao, url, imagem) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
      <img src="${imagem}">
      <h3>${titulo}</h3>
      <p>${descricao}</p>
    </div>`;
  return video;
} //https://www.youtube.com/embed/ permite que o vídeo seja executado dentro da página

async function listaVideos() {
  try {
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach((item) =>
      lista.appendChild(
        constroiCard(item.titulo, item.descricao, item.url, item.imagem)
      )
    );
  } catch {
		lista.innerHTML = `<h2 class="mensagem__titulo">
		Não foi possível carregar a lista de vídeos</h2>`
		// console.error(error);
	}
}

listaVideos();
