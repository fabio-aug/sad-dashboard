import mock from './mock.js';
import { generateCard, generateButton } from './template.js';

/**
 * Método para exportar dados de um gráfico como uma planilha CSV.
 * @param {object} chartConfig - Objeto de configuração do HighCharts.
 */
const exportDataCSV = (chartConfig) => {
    // Iniciar CSV
    let csvContent = 'data:text/csv;charset=utf-8,';

    // Categorias
    csvContent += " ,";
    chartConfig.xAxis.categories.forEach((name) => {
        csvContent += name + ",";
    })
    csvContent += '\r\n'

    // Informações
    chartConfig.series.forEach((rowArray) => {
        csvContent += rowArray.name + "," + rowArray.data + '\r\n';
    });

    // Download
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', `${chartConfig.title.text}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('page-container');
    mock.forEach((chartConfig, index) => {
        container.insertAdjacentHTML('beforeend', generateCard(index, chartConfig.subtitle.text));

        const button = document.createElement('div');
        button.innerHTML = generateButton(index);
        button.onclick = () => { exportDataCSV(chartConfig) }

        document.getElementById(`container-button${index}`).appendChild(button);

        Highcharts.chart(`container${index}`, chartConfig);
    });
});
