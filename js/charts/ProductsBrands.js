export default {
    credits: {
        enabled: false
    },
    chart: {
        type: 'column'
    },
    title: {
        align: 'center',
        text: 'Porcentagem de Vendas por Marcas/Produtos'
    },
    subtitle: {
        text: 'Porcentagem de vendas por marcas e seus respectivos produtos.',
        align: 'left',
        style: {
            display: 'none'
        },
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Porcentagem total de vendas'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> do total<br/>'
    },
    series: [{
        name: 'Marca',
        colorByPoint: true,
        data: [
            { name: 'Krona', y: 15, drilldown: 'Krona' },
            { name: 'Tigre', y: 19, drilldown: 'Tigre' },
            { name: 'Fox Lux', y: 7, drilldown: 'Fox Lux' },
            { name: 'Coral', y: 20, drilldown: 'Coral' },
            { name: 'Suvinil', y: 19, drilldown: 'Suvinil' },
            { name: 'Precon', y: 15, drilldown: 'Precon' },
            { name: 'Outros', y: 5, drilldown: null }
        ]
    }],
    drilldown: {
        breadcrumbs: {
            position: {
                align: 'right'
            }
        },
        series: [{
            name: 'Krona',
            id: 'Krona',
            data: [
                ['TE Soldável 50mm', 14],
                ['Tubo Pvc Esgoto 100mm - 6m', 38],
                ['Joelho 90° Soldável - 40mm', 18],
                ['União Krona Soldável - 50mm', 8],
                ['Conduite Krona 20mm X 10 Metros 1/2', 22],
            ]
        }, {
            name: 'Tigre',
            id: 'Tigre',
            data: [
                ['Adesivo Pvc 175g', 30],
                ['Tê Soldável - 40mm', 15],
                ['Caixa De Luz Amarela 4x2', 17],
                ['Tubo Soldável 20mm X 3 Metros', 35],
                ["Caixa D'água Com Tampa Rosca 1000 Litros", 3],
            ]
        }, {
            name: 'Fox Lux',
            id: 'Fox Lux',
            data: [
                ['Campainha bivolt digital - 100m', 15],
                ['Luminária De Emergência, Led, Bivolt', 20],
                ['Lâmpada Led Bulbo Foxlux 12w 3000K', 35],
                ['Bomba Periférica', 10],
                ['Adesivo Instantaneo Universal - 100g', 20],
            ]
        }, {
            name: 'Coral',
            id: 'Coral',
            data: [
                ['Massa Corrida 25kg', 25],
                ['Massa Acrílica 1,5Kg', 25],
                ['Tinta Acrílica Coralar Branco 18L', 20],
                ['Tinta Acrílica Fosco, Baixo Odor 18L', 18],
                ['Tinta Coralar Esmalte Brilhante, Cor Marrom, 3,6L', 12],
            ]
        }, {
            name: 'Precon',
            id: 'Precon',
            data: [
                ['Argamassa AC-3 20kg', 15],
                ['Massa Pronta SC 40Kg', 30],
                ['Argamassa Precon AC-2 20KG', 5],
                ['Telha Pvc Plan 3,30x0,88m Cerâmica', 25],
                ['Telha Fibrocimento 1100X2440X5mm', 25],
            ]
        }, {
            name: 'Suvinil',
            id: 'Suvinil',
            data: [
                ['Massa Corrida (Balde) 25kg', 35],
                ['Suvinil Selador Acrílico 18L', 20],
                ['Tinta Acrílica Toque De Seda Branco 18L', 15],
                ['Tinta Acrílica Fosco Completo 18L Branco', 20],
                ['Tinta Acrílica Rende E Cobre Muito Marfim 18L', 10],
            ]
        }]
    }
}
