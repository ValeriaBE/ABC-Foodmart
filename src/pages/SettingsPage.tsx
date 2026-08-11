import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function SettingsPage() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Header />

        <h2>Settings</h2>

        <p>Coming Soon</p>
      </main>
    </div>
  );
}