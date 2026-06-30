import leia from 'readline-sync'; 

var gols = leia.questionInt("quantos gols") * 0.50
var passescertos = leia.questionInt("quantos passes certos") * 0.10
var passeerrado = leia.questionInt("passe errado") * -0.05

if(pontuacao < 50 ){
    console.log("pessima partida")
}else if(pontuacao > 50 && pontuacao2 >= 100){
    console.log("partida ruim")
}else if(pontuacao > 100 && pontuacao2 >= 150){
console.log("fez o basico")
}else if(pontuacao > 150 && pontuacao2 >= 200){
    console.log("foi bem")
}else if(pontuacao = 200){
    console.log("jogou de mais")
}