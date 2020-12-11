function btn_1(elemento){
    document.querySelector("#btn_1").classList.add('active');
    document.querySelector("#btn_2").classList.remove('active');   

    document.querySelector("#projetos").classList.remove("oculto");
    document.querySelector("#area_fonte").classList.add("oculto");

}
function btn_2(elemento) {
    document.querySelector("#btn_1").classList.remove('active');
    document.querySelector("#btn_2").classList.add('active');
    

    let projetos = document.querySelector("#projetos")
    let fontes = document.querySelector("#area_fonte");

    projetos.classList.add("oculto");
    fontes.classList.remove("oculto");

    console.log(projetos);
    console.log(fontes);
}