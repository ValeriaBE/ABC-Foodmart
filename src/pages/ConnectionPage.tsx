import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Database, CheckCircle2 } from "lucide-react";

import { api } from "../services/api";
import type { Connection } from "../types/connection";
import { useDashboard } from "../context/DashboardContext";

import "../styles/app.css";

export default function ConnectionPage() {
    const navigate = useNavigate();

    const { refreshDashboard } = useDashboard();

    const [connection, setConnection] = useState<Connection | null>(null);

    const [loadingConnection, setLoadingConnection] = useState(true);

    const [loadingDashboard, setLoadingDashboard] = useState(false);

    const [message, setMessage] = useState("");

    const [error, setError] = useState("");

    useEffect(() => {
        async function loadConnection() {
            try {
                const data = await api.connection();

                setConnection(data);
            } catch (err) {
                setError("Unable to connect to PostgreSQL.");
            } finally {
                setLoadingConnection(false);
            }
        }

        loadConnection();
    }, []);

    async function launchDashboard() {
        try {
            setLoadingDashboard(true);
            setMessage("Loading dashboard...");

            await refreshDashboard();

            navigate("/dashboard");

        } catch (err) {
            console.error(err);
            setError("Unable to load dashboard.");
            setLoadingDashboard(false);
        }
    }

    if (loadingConnection) {
        return (
            <div className="connection-page">
                <div className="connection-card">
                    <h2>Connecting to PostgreSQL...</h2>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="connection-page">
                <div className="connection-card">
                    <h2>{error}</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="connection-page">
            <div className="connection-card">
                <Database size={60} />

                <h1>ABC Foodmart Analytics</h1>

                <p>PostgreSQL Workspace</p>

                <div className="status">
                    <CheckCircle2 color="green" />

                    <span>Connected</span>
                </div>

                <div className="info">
                    <div>
                        <strong>Database</strong>
                        <span>{connection?.database}</span>
                    </div>

                    <div>
                        <strong>User</strong>
                        <span>{connection?.database_user}</span>
                    </div>

                    <div>
                        <strong>Tables</strong>
                        <span>{connection?.table_count}</span>
                    </div>
                </div>

                <h3>Available Tables</h3>

                <ul className="table-list">
                    {connection?.tables.map((table) => (
                        <li key={table}>✓ {table}</li>
                    ))}
                </ul>

                <button
                    className="launch-button"
                    disabled={loadingDashboard}
                    onClick={launchDashboard}
                >
                    {loadingDashboard ? "Loading..." : "Launch Dashboard"}
                </button>

                {loadingDashboard && (
                    <div className="loading">
                        <div className="spinner" />

                        <h3>Preparing Dashboard</h3>

                        <p>{message}</p>
                    </div>
                )}
            </div>
        </div>
    );
}