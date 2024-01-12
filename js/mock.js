import CashFlow from './charts/CashFlow.js';
import SalesHistory from './charts/SalesHistory.js';
import ProductsBrands from './charts/ProductsBrands.js';

export default {
    listSales: SalesHistory,
    charts: [CashFlow, ProductsBrands],
};
