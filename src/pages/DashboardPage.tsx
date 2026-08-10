import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import MetricCard from "../components/dashboard/MetricCard";
import ChartCard from "../components/dashboard/ChartCard";

import { useDashboard } from "../context/DashboardContext";

import "../styles/dashboard.css";

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
                        value={`$${Number(kpis.total_revenue).toLocaleString()}`}
                    />

                    <MetricCard
                        title="Sales"
                        value={kpis.total_sales}
                    />

                    <MetricCard
                        title="Customers"
                        value={kpis.active_customers}
                    />

                    <MetricCard
                        title="Low Stock"
                        value={kpis.low_stock_products}
                    />

                </section>

                <section className="dashboard-grid">

                    <ChartCard title="Revenue by Store">

                        Revenue Chart

                    </ChartCard>

                    <ChartCard title="Monthly Sales">

                        Monthly Chart

                    </ChartCard>

                    <ChartCard title="Category Sales">

                        Category Chart

                    </ChartCard>

                    <ChartCard title="Top Products">

                        Top Products

                    </ChartCard>

                    <ChartCard
                        className="wide"
                        title="Inventory Alerts"
                    >

                        Inventory Table

                    </ChartCard>

                </section>

            </main>

        </div>

    );

}