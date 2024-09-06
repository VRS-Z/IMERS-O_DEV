function pesquisar() {
  const section = document.getElementById("resultados-pesquisa");

  const searchInput = document.getElementById("searchInput");
  const dadosFiltrados = dados.filter((item) =>
    item.titulo.toLowerCase().includes(searchInput.value)
  );

  let resultados = "";

  for (let dado of dadosFiltrados) {
    resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
  }

  section.innerHTML = resultados;
}
