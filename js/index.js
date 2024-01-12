import mock from './mock.js';
import template from './template.js';

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('page-container');
    mock.charts.forEach((chartConfig, index) => {
        container.insertAdjacentHTML('beforeend', template.generateCard(index, chartConfig.subtitle.text));
        Highcharts.chart(`container${index}`, chartConfig);
    });

    container.insertAdjacentHTML('beforeend', template.generateAccordion());
    const containerSales = document.getElementById('accordion-container');
    mock.listSales.forEach((sale, index) => {
        console.log(sale);
        containerSales.insertAdjacentHTML('beforeend', template.generateSectionAccordion(index, sale.title, sale.description));
    });
});
