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
