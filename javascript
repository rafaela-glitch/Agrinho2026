document.addEventListener("DOMContentLoaded", function () {
    
    // Elementos do Simulador Interativo
    const btnCalcular = document.getElementById("btn-calcular");
    const inputHectares = document.getElementById("hectares");
    const containerResultado = document.getElementById("resultado");
    const valorCO2 = document.getElementById("valor-co2");
    const valorArvores = document.getElementById("valor-arvores");

    // Lógica do Cálculo Interativo ao clicar no botão
    btnCalcular.addEventListener("click", function () {
        const hectares = parseFloat(inputHectares.value);

        // Validação simples para evitar valores zerados, negativos ou vazios
        if (isNaN(hectares) || hectares <= 0) {
            alert("Por favor, digite um número válido de hectares maior que zero.");
            containerResultado.classList.add("oculto");
            return;
        }

        // Fórmulas teóricas baseadas em dados médios de absorção ecológica da biomassa
        // 1 Hectare de biomassa manejada evita cerca de 4.2 toneladas de CO2 por ano
        const co2Evitado = (hectares * 4.2).toFixed(1);
        
        // Cada tonelada evitada equivale proporcionalmente ao impacto positivo de ~7 árvores crescendo
        const arvoresEquivalentes = Math.round(co2Evitado * 7);

        // Aplica os resultados encontrados diretamente nos textos do HTML
        valorCO2.textContent = co2Evitado.replace(".", ",");
        valorArvores.textContent = arvoresEquivalentes.toLocaleString('pt-BR');

        // Torna a caixinha de resposta visível com efeito suave
        containerResultado.classList.remove("oculto");
    });
});