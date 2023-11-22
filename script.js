function calcularGorjeta() {
    var valorConta = parseFloat(document.getElementById('bill').value);
    var porcentagemGorjeta = parseFloat(document.getElementById('percentage').value);

    if (isNaN(valorConta) || isNaN(porcentagemGorjeta) || porcentagemGorjeta < 0) {
        alert("Por favor, informe valores válidos.");
        return;
    }

    var gorjeta = (porcentagemGorjeta / 100) * valorConta;
    var totalConta = valorConta + gorjeta;

    document.getElementById('totalBill').textContent = totalConta.toFixed(2);
    document.getElementById('tipAmount').textContent = gorjeta.toFixed(2);
}