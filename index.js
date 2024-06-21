let nomeDoHeroi = "Bolinho"
let quantidadeXp = 5.000

let nivelDoHeroi = " "

switch (true){
case (quantidadeXp < 1.000):
nivelDoHeroi = "Ferro"
break

case (quantidadeXp >= 1.001 && quantidadeXp <= 2.000):
nivelDoHeroi = "Bronze"
break

case (quantidadeXp >= 2.001 && quantidadeXp <= 5.000):
nivelDoHeroi = "Prata"
break

case (quantidadeXp >= 5.001 && quantidadeXp <= 7.000):
nivelDoHeroi = "Ouro"
break

case (quantidadeXp >= 7.001 && quantidadeXp <= 8.000):
nivelDoHeroi = "Platina"
break

case (quantidadeXp >= 8.001 && quantidadeXp <= 9.000):
nivelDoHeroi = "Ascendente"
break

case (quantidadeXp >= 9.001 && quantidadeXp <= 10.000):
nivelDoHeroi = "Imortal"
break

case (quantidadeXp >= 10.001):
nivelDoHeroi = "Radiante"
break

default:
        nivelDoHeroi = "XP desconhecido";
}

console.log("O Herói de nome é "  +  nomeDoHeroi + " está no nível de " + nivelDoHeroi)