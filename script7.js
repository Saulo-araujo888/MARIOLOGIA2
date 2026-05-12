function abrirAba(event, idAba) {
    let conteudos = document.querySelectorAll(".conteudo-aba");
    let abas = document.querySelectorAll(".aba");

    conteudos.forEach(c => c.classList.remove("ativo"));
    abas.forEach(a => a.classList.remove("ativa"));

    document.getElementById(idAba).classList.add("ativo");
    event.currentTarget.classList.add("ativa");
}