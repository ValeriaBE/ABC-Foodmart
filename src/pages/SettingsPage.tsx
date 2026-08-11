import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import {
  Database,
  Server,
  Globe,
  Clock,
  Shield,
  Palette,
} from "lucide-react";

import "../styles/dashboard.css";

export default function SettingsPage() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        <Header />

        <section className="settings-grid">

          <div className="settings-card">

            <Database size={28} />

            <h2>Database</h2>

            <p>PostgreSQL</p>

            <span>Connected through FastAPI API</span>

          </div>

          <div className="settings-card">

            <Server size={28} />

            <h2>Backend</h2>

            <p>FastAPI</p>

            <span>REST API Services</span>

          </div>

          <div className="settings-card">

            <Globe size={28} />

            <h2>Frontend</h2>

            <p>React + D3.js</p>

            <span>Executive Dashboard</span>

          </div>

          <div className="settings-card">

            <Clock size={28} />

            <h2>Refresh Interval</h2>

            <p>Manual</p>

            <span>Updated on demand</span>

          </div>

          <div className="settings-card">

            <Shield size={28} />

            <h2>User Role</h2>

            <p>Analyst</p>

            <span>Read Only Access</span>

          </div>

          <div className="settings-card">

            <Palette size={28} />

            <h2>Theme</h2>

            <p>Executive Blue</p>

            <span>ABC Foodmart Branding</span>

          </div>

        </section>

      </main>

    </div>
  );
}