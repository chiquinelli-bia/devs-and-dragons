export class personagem {
  vida = 100;
  mana = 100;
  constructor(nome, tipo, level, descricao) {
    this.nome = nome;
    this.tipo = tipo;
    this.level = level;
    this.descricao = descricao;
  }
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
