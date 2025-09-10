import {
  arqueiro,
  arqueiroMago,
  guerreiro,
  mago,
  personagem,
} from "./modules/personagem.js";
import { personagemView } from "./components/personagem-view.js";

const magaAlice = new mago("Alice", "fogo", 8, 9);
const arqueiraRavena = new arqueiro("Ravena", 9, 9);
const guerreiraBarbara = new guerreiro("Barbara", 12);
const arqueiraMagaHestia = new arqueiroMago("Héstia", 8, 6, "SubMundo", 11, 15);
const personagens = [
  magaAlice,
  arqueiraRavena,
  arqueiraMagaHestia,
  guerreiraBarbara,
];

new personagemView(personagens).render();
