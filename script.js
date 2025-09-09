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

  if (n > 1000) {
    setError("Límite por rendimiento: n ≤ 1000.");
    return;
  }

  $status.textContent = "Calculando…";
  const t0 = performance.now();
  const Fn = fibonacci(n);
  const t1 = performance.now();

  const header = `F(${n}) =`;
  $out.textContent = `${header}\n${formatBigInt(Fn)}`;
  $status.innerHTML = `<span class="ok">Listo:</span> ${Math.max(
    0,
    t1 - t0
  ).toFixed(3)} ms`;
}

function setError(msg) {
  $status.innerHTML = `<span class="error">Error:</span> ${msg}`;
  $out.textContent = "—";
}

$btn.addEventListener("click", calcular);
$n.addEventListener("keydown", (e) => {
  if (e.key === "Enter") calcular();
});
