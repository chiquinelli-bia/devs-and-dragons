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
export class mago extends personagem {
  constructor(nome, level, elementoMagico, levelMagico, inteligencia) {
    super(nome, "Mago", level);
    this.elementoMagico = elementoMagico;
    this.levelMagico = levelMagico;
    this.inteligencia = inteligencia;
  }
  obterInsignia() {
    if (this.level >= 10 && this.levelMagico >= 5 && this.inteligencia >= 5) {
      return `Mestre do ${this.elementoMagico}`;
    }
    return super.obterInsignia();
  }
}
export class arqueiro extends personagem {
  constructor(nome, level, destreza, pontaria) {
    super(nome, "Arqueiro", level);
    this.destreza = destreza;
    this.pontaria = pontaria;
  }
  obterInsignia() {
    if (this.level >= 10 && this.destreza >= 5 && this.pontaria >= 5) {
      return `Dominador de flechas`;
    }
    return super.obterInsignia();
  }
}
export class arqueiroMago extends personagem {
  constructor(
    nome,
    level,
    destreza,
    pontaria,
    elementoMagico,
    levelMagico,
    inteligencia
  ) {
    super(nome, "ArqueiroMago", level);
    this.ladoArqueiro = new arqueiro(nome, level, destreza, pontaria);
    this.ladoMago = new mago(
      nome,
      level,
      elementoMagico,
      levelMagico,
      inteligencia
    );
  }
  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
  }
}
