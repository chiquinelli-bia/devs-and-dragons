import { mago, personagem } from "./modules/personagem.js";
import { personagemView } from "./components/personagem-view.js";

const personagemPedrinho = new personagem("Pedrinho", "Mago", 5);
const personagemJose = new personagem("Jose", "Arqueiro", 3);
const personagens = [personagemPedrinho, personagemJose];
new personagemView(personagens).render();
