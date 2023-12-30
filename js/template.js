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
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group" id="container-button${id}"></div>
                    </div>
                </div>
            </div>
        </div>`
    );
}

/**
 * Função para gerar um botão.
 *
 * @param {number} id - ID do botão.
 * @returns {string} Template do botão.
 *
 */
function generateButton(id) {
    return (
        `<button
            id="button${id}"
            type="button"
            class="btn btn-sm btn-outline-secondary"
        >
            Exportar
        </button>`
    )
}

export {
    generateCard,
    generateButton
};
