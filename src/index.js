import {
  arqueiro,
  arqueiroMago,
  mago,
  personagem,
} from "./modules/personagem.js";
import { personagemView } from "./components/personagem-view.js";

const magaAlice = new mago("Alice", 11, "fogo", 8, 9);
const arqueiraRavena = new arqueiro("Ravena", 15, 9, 9);
const arqueiraMagaHestia = new arqueiroMago(
  "Héstia",
  22,
  5,
  6,
  "SubMundo",
  11,
  15
);
const personagens = [magaAlice, arqueiraRavena, arqueiraMagaHestia];

new personagemView(personagens).render();
