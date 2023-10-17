const prompt = require("prompt-sync")({sigint:true})
let palavra = ["私", "あなた", "私達", "あなた達"]
let peso = [1, 2, 3, 4]

let teste = prompt(`digite um numero entre 1 e 4: \n
1 = 私 em 3 segundos \n
2 = あなた em 5 segundos \n
3 = 私達 em 8 segundos \n
4 = あなた達 em 10 segundos \n\n`)

console.log(teste)
console.log(typeof teste)

teste2 = + teste

console.log(teste2)
console.log(typeof teste2)

if(teste2 === 1) {
    setTimeout(() => {
        console.log(palavra[0])
    },3000);
}

if(teste2 === 2) {
    setTimeout(() => {
        console.log(palavra[1])
    },5000);
}

if(teste2 === 3) {
    setTimeout(() => {
        console.log(palavra[2])
    },8000);
}

if(teste2 === 4) {
    setTimeout(() => {
        console.log(palavra[3])
    },10000);
}