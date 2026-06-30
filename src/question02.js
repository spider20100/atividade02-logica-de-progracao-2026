import leia from 'readline-sync'; 

var menornota = nota1
var maiornota = nota2
var nota1 = leia.questionFloat("digite sua nota")
var nota2 = leia.questionFloat("digite sua nota")
var nota3 = leia.questionFloat("digite sua nota")
var nota4 = leia.questionFloat("digite sua nota")
var nota5 = leia.questionFloat("digite sua nota")
var nota6 = leia.questionFloat("digite sua nota")

if(nota1 <= 0 && nota2 >=10 ){
console.log("")
}
var media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) - (maiornota - menornota)
console.log(media.toFixed(2))

