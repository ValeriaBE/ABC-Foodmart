import "./../styles/dashboard.css";

import MetricCard from "./MetricCard";
import Filters from "./Filters";


export default function Dashboard() {
  return (
    <div className="dashboard">

      <header className="header">
        <h1>ABC Foodmart</h1>
        <p>Business Performance Dashboard</p>
      </header>

      <Filters />

      <section className="metrics">

        <MetricCard
          title="Revenue"
          value="$482,350"
          change="+7.2%"
        />

        <MetricCard
          title="Profit"
          value="$96,470"
          change="+3.1%"
        />

        <MetricCard
          title="Sales"
          value="12,847"
          change="+5.8%"
        />

        <MetricCard
          title="Low Stock"
          value="34"
          change="Needs Attention"
        />

      </section>

      <section className="grid">

 

      </section>

    </div>
  );
}