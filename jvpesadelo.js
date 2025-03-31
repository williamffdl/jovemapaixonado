   function searchKeyword() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    const articles = document.querySelectorAll('article');
        let firstMatch = null;

    if (input === '') {
        alert('Digite uma palavra-chave para pesquisar.');
            return;
        }

    // Remove destaques anteriores
    document.querySelectorAll('.highlight').forEach(span => {
        span.outerHTML = span.innerHTML;
    });

        let found = false;

        articles.forEach(article => {
        let paragraphs = article.querySelectorAll('p, h1, h2');

            paragraphs.forEach(paragraph => {
                let text = paragraph.innerHTML;
            let regex = new RegExp(`(${input})`, 'gi');

                if (text.toLowerCase().includes(input)) {
                    found = true;
                    let highlightedText = text.replace(regex, '<span class="highlight">$1</span>');
                    paragraph.innerHTML = highlightedText;

                // Define a primeira correspondência para rolar até ela
                    if (!firstMatch) {
                        firstMatch = paragraph;
                    }
                }
            });
        });

        if (found) {
        // Rolar até a primeira correspondência encontrada
        firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
        alert('Nenhuma correspondência encontrada.');
        }
    }
// Função para remover os destaques
    function clearHighlights() {
    document.querySelectorAll('.highlight').forEach(span => {
        span.outerHTML = span.innerHTML; // Remove a tag <span> e mantém o texto original
        });
}