let nomeJogador = "Ricardo";
let xpJogador = 5500;

switch (true) {
    case xpJogador <= 1000:
        console.log(`O Herói de nome ${nomeJogador} está no nível Ferro`);
        break;
    case xpJogador > 1000 && xpJogador <= 2000:
        console.log(`O Herói de nome ${nomeJogador} está no nível Bronze`);
        break;
    case xpJogador > 2000 && xpJogador <= 5000:
        console.log(`O Herói de nome ${nomeJogador} está no nível Prata`);
        break;
    case xpJogador > 5000 && xpJogador <= 7000:
        console.log(`O Herói de nome ${nomeJogador} está no nível Ouro`);
        break;
    case xpJogador > 7000 && xpJogador <= 8000:
        console.log(`O Herói de nome ${nomeJogador} está no nível Platina`);
        break;
    case xpJogador > 8000 && xpJogador <= 9000:
        console.log(`O Herói de nome ${nomeJogador} está no nível Ascendente`);
        break;
    case xpJogador > 9000 && xpJogador <= 10000:
        console.log(`O Herói de nome ${nomeJogador} está no nível Imortal`);
        break;
    case xpJogador > 10000:
        console.log(`O Herói de nome ${nomeJogador} está no nível Radiante`);
        break;
    default:
        console.log("Seu Herói não atingiu a experiência mínima");
}
