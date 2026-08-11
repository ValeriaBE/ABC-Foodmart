import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function DatabasePage() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Header />

        <h2>Database Information</h2>

        <p>
          This page will display the PostgreSQL connection,
          API status, table count, and database details.
        </p>
      </main>
    </div>
  );
}