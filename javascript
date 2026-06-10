document.addEventListener("DOMContentLoaded", () => {
    
    // Captura dos elementos interativos do DOM
    const btnCalcular = document.getElementById("btn-calcular");
    const inputResiduos = document.getElementById("qtd-residuos");
    const painelResultado = document.getElementById("resultado-panel");
    
    const displayEnergia = document.getElementById("res-energia");
    const displayCO2 = document.getElementById("res-co2");

    // Evento de clique para o cálculo interativo
    btnCalcular.addEventListener("click", () => {
        const toneladas = parseFloat(inputResiduos.value);

        // Validação de entrada sem travar o navegador
        if (isNaN(toneladas) || toneladas <= 0) {
            alert("Por favor, insira uma quantidade de resíduos válida e maior que zero.");
            painelResultado.classList.add("escondido");
            return;
        }

        /* Cálculos métricos simplificados baseados em aproveitamento padrão de biomassa:
           - Cada tonelada de resíduo agrícola tratado pode gerar cerca de 350 kWh de energia limpa.
           - Evita-se a liberação de cerca de 220 kg de CO2 comparado à queima de combustíveis fósseis.
        */
        const energiaGerada = Math.round(toneladas * 350);
        const co2Evitado = Math.round(toneladas * 220);

        // Injeta os valores formatados para o padrão brasileiro
        displayEnergia.textContent = energiaGerada.toLocaleString("pt-BR");
        displayCO2.textContent = co2Evitado.toLocaleString("pt-BR");

        // Exibe o painel de resultados removendo a classe utilitária de ocultação
        painelResultado.classList.remove("escondido");
    });
});