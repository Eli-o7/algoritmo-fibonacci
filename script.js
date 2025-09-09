// Calcula F(n) usando un algoritmo iterativo con BigInt (rápido y exacto):
function fibonacci(n) {
  if (n === 0) return 0n;
  if (n === 1) return 1n;
  let a = 0n,
    b = 1n;
  for (let i = 2; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

const $n = document.getElementById("n");
const $btn = document.getElementById("btn");
const $out = document.getElementById("out");
const $status = document.getElementById("status");

function formatBigInt(x) {
  try {
    return new Intl.NumberFormat("es-ES").format(x);
  } catch {
    return x.toString();
  }
}

function calcular() {
  const raw = $n.value.trim();
  if (raw === "") {
    setError("Ingrese un número.");
    return;
  }
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 0) {
    setError("n debe ser un entero ≥ 0.");
    return;
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