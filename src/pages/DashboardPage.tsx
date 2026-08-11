import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MetricCard from "../components/dashboard/MetricCard";
import ChartCard from "../components/dashboard/ChartCard";

import { useDashboard } from "../context/DashboardContext";

import "../styles/dashboard.css";
import RevenueChart from "../components/charts/RevenueChart";
import MonthlySalesChart from "../components/charts/MonthlySalesChart";
import CategorySalesChart from "../components/charts/CategorySalesChart";
import TopProductsTable from "../components/tables/TopProductsTable";
import LowStockTable from "../components/tables/LowStockTable";
import VendorPerformanceTable from "../components/tables/VendorPerformanceTables";

import {
    DollarSign,
    ShoppingCart,
    Users,
    Package,
} from "lucide-react";

export default function DashboardPage() {

    const { dashboardData } = useDashboard();

    if (!dashboardData)
        return <h2>Loading...</h2>;

    const kpis = dashboardData.kpis;


    return (

        <div className="dashboard-layout">

            <Sidebar />

            <main className="dashboard-main">

                <Header />

                <section className="metrics">

                    <MetricCard
                        title="Revenue"
                        value={`$${Number(
                            kpis.total_revenue
                        ).toLocaleString(undefined, {
                            maximumFractionDigits: 0,
                        })}`}
                        subtitle="Across all stores"
                        icon={<DollarSign size={20} />}
                    />

                    <MetricCard
                        title="Transactions"
                        value={Number(
                            kpis.total_sales
                        ).toLocaleString()}
                        subtitle="Completed sales"
                        icon={<ShoppingCart size={20} />}
                    />

                    <MetricCard
                        title="Customers"
                        value={Number(
                            kpis.active_customers
                        ).toLocaleString()}
                        subtitle="Active loyalty customers"
                        icon={<Users size={20} />}
                    />

                    <MetricCard
                        title="Low Stock"
                        value={Number(
                            kpis.low_stock_products
                        ).toLocaleString()}
                        subtitle="Items needing attention"
                        icon={<Package size={20} />}
                        variant="warning"
                    />

                </section>

                <section className="dashboard-grid">

                    <ChartCard
                        title="Revenue by Store"
                        subtitle="Sales revenue across all locations"
                    >

                        <RevenueChart

                            data={dashboardData.revenue}

                        />

                    </ChartCard>

                    <ChartCard
                        title="Monthly Sales"
                        subtitle="Monthly revenue trend"
                    >
                        <MonthlySalesChart
                            data={dashboardData.monthlySales}
                        />
                    </ChartCard>

                    <ChartCard
                        title="Sales by Category"
                        subtitle="Revenue by product category"
                    >

                        <CategorySalesChart
                            data={dashboardData.categorySales}
                        />

                    </ChartCard>

                    <ChartCard
                        title="Top Products"
                        subtitle="Best-selling products"
                    >

                        <TopProductsTable
                            data={dashboardData.topProducts}
                        />

                    </ChartCard>

                    <ChartCard
                        title="Vendor Performance"
                        subtitle="Average delivery performance"
                    >

                        <VendorPerformanceTable

                            data={dashboardData.vendorPerformance}

                        />

                    </ChartCard>

                    <ChartCard
                        title="Inventory Alerts"
                        subtitle="Products below reorder level"
                    >

                        <LowStockTable

                            data={dashboardData.lowStock}

                        />

                    </ChartCard>

                </section>

            </main>

        </div>

    );

}