function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let a = 0;
  let b = 1;
  let temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function calcularFibonacci() {
  const numero = parseInt(document.getElementById("numero").value);
  if (isNaN(numero) || numero < 0) {
    document.getElementById("resultado").textContent =
      "Por favor ingrese un número válido.";
    return;
  }
  const resultado = fibonacci(numero);
  document.getElementById(
    "resultado"
  ).textContent = `El número de Fibonacci en la posición ${numero} es ${resultado}.`;
}

