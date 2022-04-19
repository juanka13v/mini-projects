class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculator = new Calculadora();
    this.operacion = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar: "+",
      restar: "-",
      dividir: "%",
      multiplicar: "x",
    };
  }

  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }

  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.operacion = undefined;
    this.imprimirValores();
  }

  computar(tipo) {
    this.operacion !== "igual" && this.calcular();
    this.operacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValores();
  }

  agregarNumero(numero) {
    if (numero === "." && this.valorActual.includes(".")) return;
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${
      this.signos[this.operacion] || ""
    }`;
  }

  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;

    this.valorActual = this.calculator[this.operacion](
      valorAnterior,
      valorActual
    );
  }
}
