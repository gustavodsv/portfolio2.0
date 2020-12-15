function btn_sobremim(elemento){

    let areaFonte = document.getElementById(`area_fonte`);

    if(areaFonte.classList.contains(`oculto`) == true) {
        areaFonte.classList.remove(`oculto`);
        
        document.querySelector(`#btn_img`).style.transform = `rotate(180deg)`;
    } else {
        areaFonte.classList.add(`oculto`);
        document.querySelector(`#btn_img`).style.transform = `rotate(360deg)`;
        
    }
}


function btn_1(elemento){
    /*background-color btn_menu*/
    document.querySelector("#btn_1").classList.add('active');
    document.querySelector("#btn_2").classList.remove('active');   

    /*mostrar projetos*/
    document.querySelector("#projetos").classList.remove("oculto");
    /*ocultar fontes*/
    document.querySelector("#area_fonte").classList.add("oculto");

}
function btn_2(elemento) {
    /*background-color btn_menu*/
    document.querySelector("#btn_1").classList.remove('active');
    document.querySelector("#btn_2").classList.add('active');
    
    /*mostrar projetos*/
    document.querySelector("#projetos").classList.add("oculto");
    /*ocultar fontes*/
    document.querySelector("#area_fonte").classList.add("oculto");
}