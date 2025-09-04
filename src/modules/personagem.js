export class personagem {
  nome;
  tipo;
  vida;
  mana;
  level;
  descrição;

  obterInsignia() {
    if (this.level >= 5) {
      return `Implacável ${this.tipo}`;
    }
    return `${this.tipo} iniciante `;
  }
}
export class mago {
  constructor(elementoMagico, levelMagico, inteligencia) {
    this.elementoMagico = elementoMagico;
    this.levelMagico = levelMagico;
    this.inteligencia = inteligencia;
  }
}
