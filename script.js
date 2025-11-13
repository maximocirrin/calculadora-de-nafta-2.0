const precios = {
  super: 1200,
  premium: 1450,
  diesel: 1100
};

const btn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

btn.addEventListener('click', () => {
  const km = parseFloat(document.getElementById('km').value);
  const consumo = parseFloat(document.getElementById('consumo').value);
  const tipo = document.getElementById('tipo').value;

  if (isNaN(km) || isNaN(consumo) || km <= 0 || consumo <= 0) {
    resultado.textContent = "Por favor, ingrese valores válidos.";
    resultado.classList.add('visible');
    return;
  }

  const litros = (km / 100) * consumo;
  const costo = litros * precios[tipo];
  
  resultado.textContent = `Costo estimado: $${costo.toLocaleString("es-AR", {
    minimumFractionDigits: 2
  })}`;
  resultado.classList.add('visible');
});
