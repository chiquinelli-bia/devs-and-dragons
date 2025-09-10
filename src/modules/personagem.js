export class personagem {
  nome;
  vida = 100;
  mana = 100;
  #level = 1;
  tipo;
  descricao;
  constructor(nome) {
    this.nome = nome;
  }
  get level() {
    return this.#level;
  }
  obterInsignia() {
    if (this.#level >= 5) {
      return `Implacável ${this.constructor.tipo}`;
    }
    return `${this.constructor.tipo} iniciante `;
  }
  static verificarVencedor(personagem1, personagem2) {
    if (personagem1.#level === personagem2.#level) {
      return "Empate!!!";
    }

    if (personagem1.#level > personagem2.#level) {
      return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`;
    }

    return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`;
  }
}
export class mago extends personagem {
  static tipo = "Mago";
  static descricao = "O mago é implacável!";
  constructor(nome, elementoMagico, levelMagico, inteligencia) {
    super(nome);
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
  static tipo = "Arqueiro";
  static descricao = "Voce tem o meu arco!";
  constructor(nome, destreza, pontaria) {
    super(nome);
    this.destreza = destreza;
    this.pontaria = pontaria;
  }
  obterInsignia() {
    console.log(arqueiro.constructor.descricao);
    if (this.level >= 10 && this.destreza >= 5 && this.pontaria >= 5) {
      return `Dominador de flechas`;
    }
    return super.obterInsignia();
  }
}
export class guerreiro extends personagem {
  static tipo = "Guerreiro";
  static descricao = "Você será esmagado pela fúria do Guerreiro!";
  constructor(nome, forca) {
    super(nome);
    this.forca = forca;
  }
  obterInsignia() {
    console.log(guerreiro.constructor.descricao);
    if (this.level >= 10 && this.forca >= 5) {
      return `Guerreiro furioso`;
    }
    return super.obterInsignia();
  }
}
export class arqueiroMago extends personagem {
  static tipo = "ArqueiroMago";
  static descricao = "Detentor de lancas e flechas mágicas!";
  constructor(
    nome,
    destreza,
    pontaria,
    elementoMagico,
    levelMagico,
    inteligencia
  ) {
    super(nome);
    this.ladoArqueiro = new arqueiro(nome, destreza, pontaria);
    this.ladoMago = new mago(nome, elementoMagico, levelMagico, inteligencia);
  }
  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
  }
}
