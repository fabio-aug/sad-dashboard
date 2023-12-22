import mock from './mock.js';
import { gerenateCard, gerenateButton } from './template.js';

const exportDataCSV = (chartConfig, index) => {
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
    link.setAttribute('download', `${chartConfig.title.text} - ${index}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('page-container');
    mock.forEach((chartConfig, index) => {
        container.insertAdjacentHTML('beforeend', gerenateCard(index, chartConfig.title.text));

        const button = document.createElement('div');
        button.innerHTML = gerenateButton(index);
        button.onclick = () => { exportDataCSV(chartConfig, index) }

        document.getElementById(`container-button${index}`).appendChild(button);

        Highcharts.chart(`container${index}`, chartConfig);
    });
});
