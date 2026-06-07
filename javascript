document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões de alternância da página
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Encontra a div de informações extras que está no mesmo card do botão clicado
            const cardContent = this.parentElement;
            const extraInfo = cardContent.querySelector(".extra-info");

            // Alterna a classe 'hidden' para mostrar ou esconder o texto
            extraInfo.classList.toggle("hidden");

            // Muda o texto do botão dependendo do estado atual
            if (extraInfo.classList.contains("hidden")) {
                this.textContent = "Saiba mais";
            } else {
                this.textContent = "Ler menos";
            }
        });
    });
});