const valorAnterior = document.getElementById("valor-anterior");
const valorActual = document.getElementById("valor-actual");
const btnNum = document.querySelectorAll(".numero");
const btnOpe = document.querySelectorAll(".operador");

const display = new Display(valorAnterior, valorActual);

btnNum.forEach((boton) => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

btnOpe.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})
