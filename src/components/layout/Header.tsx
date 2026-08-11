import { Database } from "lucide-react";

import "./Header.css";

export default function Header() {

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