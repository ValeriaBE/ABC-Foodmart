import { Database, RefreshCw } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

import "./Header.css";

export default function Header() {
    const { refreshDashboard } = useDashboard();
    const today = new Date();

    return (

        <header className="dashboard-header">

            <div>

                <h1>

                    ABC Foodmart Executive Dashboard

                </h1>

                <p>

                    Business performance across Queens & Brooklyn locations

                </p>

            </div>

            <div className="header-status">

    <button
        className="refresh-button"
        onClick={() => refreshDashboard()}
    >

        <RefreshCw size={16} />

        Refresh Dashboard

    </button>

    <div className="status-row">

        <span className="status-dot"></span>

        <Database size={18} />

        Connected

    </div>

    <span className="last-updated">

        Last Updated

        {" "}

        {today.toLocaleDateString()}

    </span>
</div>

        </header>

    );

}