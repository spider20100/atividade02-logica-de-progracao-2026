import leia from 'readline-sync'; 

var gols = leia.questionInt("quantos gols") * 0.50
var passescertos = leia.questionInt("quantos passes certos") * 0.10
var passeerrado = leia.questionInt("passe errado") * -0.05

if(pontuacao < 50 ){
    console.log("pessima partida")
}if(pontuacao > 50 && >= 100){
    console.log("partida ruim")
}if(pontuacao > 100 && >= 150){
console.log("fez o basico")
}if(pontuacao > 150 && >= 200){
    console.log("foi bem")
}if(pontuacao = 200){
    console.log("jogou de mais")
}