export default {
    credits: {
        enabled: false
    },
    title: {
        text: 'Fluxo de Caixa',
        align: 'center'
    },
    subtitle: {
        text: 'Valores de faturamento, custo e lucro obtidos ao decorrer de um ano.',
        align: 'left',
        style: {
            display: 'none'
        }
    },
    yAxis: {
        title: {
            text: 'Valores em R$'
        }
    },
    xAxis: {
        categories: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ],
    },
    series: [{
        type: 'spline',
        name: 'Faturamento',
        data: [30000, 29000, 23000, 23000, 22000, 20000, 21000, 19000, 18000, 24000, 28000, 30000]
    }, {
        type: 'column',
        name: 'Custo',
        data: [-11000, -12000, -13000, -17000, -19000, -18000, -14000, -15000, -12000, -14000, -10000, -11000]
    }, {
        type: 'column',
        name: 'Lucro',
        data: [19000, 17000, 10000, 6000, 3000, 2000, 7000, 4000, 6000, 10000, 18000, 19000]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    },
};
