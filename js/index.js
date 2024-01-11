import mock from './mock.js';

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

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('page-container');
    mock.forEach((chartConfig, index) => {
        container.insertAdjacentHTML('beforeend', generateCard(index, chartConfig.subtitle.text));

        Highcharts.chart(`container${index}`, chartConfig);
    });
});
