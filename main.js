const botoes= document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for(let i =0;i<botoes.length;i++){
    botoes[i].onclick=function(){
        for(let j= 0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");{
            
        }
    }
}
let dias = Math.floor( horas/24);
seguando %=60;
minutos %=60;
horas%= 24
if(tempoFinal>0){
    return [dias,horas,minutos,segundo];
} else{
    return[0,0,0];
}