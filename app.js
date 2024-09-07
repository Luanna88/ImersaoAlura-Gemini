function exibirMulheres() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    dados.sort((a, b) => a.nome.localeCompare(b.nome));

    for (let dado of dados) {
        resultados += `
        <div class="item-resultado" id="mulheres">
            <h2>
                <a href="#" target="_blank">${dado.nome}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
        `;
    }
    section.innerHTML = resultados;
}

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    if (campoPesquisa === "") {
        section.innerHTML = '<p class="aviso">Nenhuma informação encontrada. Digite algum nome para pesquisar.</p>';
        return; 
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let encontrouResultados = false; 
    let nome = "";
    let descricao = "";

    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado" id="mulheres">
                <h2>
                    <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
            encontrouResultados = true; 
        }
    }

    if (!encontrouResultados) {
        section.innerHTML = '<p class="erro">Nenhum resultado encontrado para "' + campoPesquisa + '".</p>';
    } else {
        section.innerHTML = resultados; 
    }
}
