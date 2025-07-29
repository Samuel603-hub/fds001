document.addEventListener('DOMContentLoaded', () => {
    const messageButton = document.getElementById('messageButton');
    const messageDisplay = document.getElementById('messageDisplay');

    messageButton.addEventListener('click', () => {
        const messages = [
            "Acredite em si mesmo e todo o resto se encaixará.",
            "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
            "Nunca é tarde demais para ser o que você poderia ter sido.",
            "Seus talentos são seus maiores recursos.",
            "Continue aprendendo, continue crescendo!"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        [span_9](start_span)messageDisplay.textContent = randomMessage; // Exibe uma mensagem aleatória[span_9](end_span)
    });
});