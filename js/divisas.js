document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convert-btn');
    const amountInput = document.getElementById('amount');
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    const resultContainer = document.getElementById('result-container');

    
    function convertirDivisas() {
        const cantidad = parseFloat(amountInput.value);
        const monedaOrigen = fromSelect.value;
        const monedaDestino = toSelect.value;

        if (isNaN(cantidad)) {
            resultContainer.textContent = 'Por favor ingrese una cantidad válida.';
            return;
        }

        // Realizar la conversión
        let resultado;
        if (monedaOrigen === 'usd' && monedaDestino === 'eur') {
            resultado = cantidad * 0.84; // Tasa de conversión USD a EUR
        } else if (monedaOrigen === 'usd' && monedaDestino === 'gbp') {
            resultado = cantidad * 0.73; // Tasa de conversión USD a GBP
        } else if (monedaOrigen === 'eur' && monedaDestino === 'usd') {
            resultado = cantidad * 1.19; // Tasa de conversión EUR a USD
        } else if (monedaOrigen === 'eur' && monedaDestino === 'gbp') {
            resultado = cantidad * 0.86; // Tasa de conversión EUR a GBP
        } else if (monedaOrigen === 'gbp' && monedaDestino === 'usd') {
            resultado = cantidad * 1.37; // Tasa de conversión GBP a USD
        } else if (monedaOrigen === 'gbp' && monedaDestino === 'eur') {
            resultado = cantidad * 1.17; // Tasa de conversión GBP a EUR
        } else {
            resultContainer.textContent = 'Las divisas seleccionadas no son compatibles.';
            return;
        }

        resultContainer.textContent = `${cantidad} ${monedaOrigen.toUpperCase()} equivale a ${resultado.toFixed(2)} ${monedaDestino.toUpperCase()}.`;
    }

    convertBtn.addEventListener('click', convertirDivisas);
});
