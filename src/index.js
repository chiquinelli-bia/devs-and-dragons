import { personagem } from "./modules/personagem.js";

const personagemPedrinho = new personagem();
personagemPedrinho.nome = "Pedrinho";
personagemPedrinho.mana = 12;
personagemPedrinho.vida = 7;
personagemPedrinho.tipo = "Mago";
personagemPedrinho.level = 5;

const personagemJose = new personagem();
personagemJose.nome = "Jose";
personagemJose.tipo = "Arqueiro";
personagemJose.level = 3;

console.log(
  "Insignia de " +
    personagemPedrinho.nome +
    ": " +
    personagemPedrinho.obterInsignia()
);
console.log(
  "Insignia de " + personagemJose.nome + ": " + personagemJose.obterInsignia()
);
