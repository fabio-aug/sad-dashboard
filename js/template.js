/**
 * Função para gerar um template de um card com gráfico.
 *
 * @param {number} id ID do gráfico.
 * @param {string} description Descrição do gráfico.
 * @returns {string} Template do gráfico.
 *
 */
function generateCard(id, description) {
    return (
        `<div class="col">
            <div class="card shadow-sm">
                <div width="100%" height="225" id="container${id}"></div>
                <div class="card-body">
                    <p class="card-text">${description}</p>
                </div>
            </div>
        </div>`
    );
}

/**
 * Função para gerar um template de um accordion.
 *
 * @returns {string} Template do accordion.
 *
 */
function generateAccordion() {
    return (
        `<div class="col">
            <div class="card shadow-sm accordion max-container" id="accordion-container"></div>
        </div>`
    );
}

/**
 * Função para gerar um template de uma seção do accordion.
 *
 * @param {number} id ID da seção do accordion.
 * @param {string} title title da seção do accordion.
 * @param {string} description Descrição da seção do accordion.
 * @returns {string} Template da seção do accordion.
 *
 */
function generateSectionAccordion(id, title, description) {
    return (
        `<div class="accordion-item">
            <h2 class="accordion-header">
                <button
                    type="button"
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse${id}"
                >
                    ${title}
                </button>
            </h2>
            <div id="collapse${id}" class="accordion-collapse collapse">
                <div class="accordion-body">
                    ${description}
                </div>
            </div>
        </div>`
    );
}

export default {
    generateCard,
    generateAccordion,
    generateSectionAccordion,
}
