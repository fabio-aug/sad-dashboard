import template from './template.js';
import CashFlow from './charts/CashFlow.js';
import SalesHistory from './charts/SalesHistory.js';
import ProductsBrands from './charts/ProductsBrands.js';

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('page-container');
    [CashFlow, ProductsBrands].forEach((chartConfig, index) => {
        container.insertAdjacentHTML(
            'beforeend',
            template.generateCard(
                index,
                chartConfig.title.text,
                chartConfig.subtitle.text
            )
        );
        Highcharts.chart(`container${index}`, chartConfig);
    });

    container.insertAdjacentHTML('beforeend', template.generateAccordion('Histótico de Vendas'));
    const containerSales = document.getElementById('accordion-container');
    SalesHistory.forEach((sale, index) => {
        const title = `${sale.date.toLocaleDateString("pt-BR")} - ${sale.title}`;
        containerSales.insertAdjacentHTML(
            'beforeend',
            template.generateSectionAccordion(
                index,
                title,
                sale.value,
                sale.description,
            )
        );
    });
});
