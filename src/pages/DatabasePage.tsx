import { useEffect, useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import { api } from "../services/api";

import type { DatabaseStatus } from "../types/databaseStatus";

import {
    Database,
    Server,
    Table2,
    Rows3,
    CheckCircle
} from "lucide-react";

import "../styles/dashboard.css";

export default function DatabasePage() {

    const [status, setStatus] =
        useState<DatabaseStatus | null>(null);

    useEffect(() => {

        api.databaseStatus()

            .then(setStatus)

            .catch(console.error);

    }, []);

    if (!status)
        return <h2>Loading...</h2>;

    return (

        <div className="dashboard-layout">

            <Sidebar />

            <main className="dashboard-main">

                <Header />

                <section className="database-grid">

                    <div className="database-card">

                        <CheckCircle
                            size={34}
                            color="#16a34a"
                        />

                        <h2>

                            Database Status

                        </h2>

                        <h1>

                            {status.status}

                        </h1>

                    </div>

                    <div className="database-card">

                        <Database size={28} />

                        <h3>

                            Database

                        </h3>

                        <p>

                            {status.database}

                        </p>

                    </div>

                    <div className="database-card">

                        <Server size={28} />

                        <h3>

                            Host

                        </h3>

                        <p>

                            {status.host}:{status.port}

                        </p>

                    </div>

                    <div className="database-card">

                        <Table2 size={28} />

                        <h3>

                            Tables

                        </h3>

                        <p>

                            {status.tables}

                        </p>

                    </div>

                    <div className="database-card">

                        <Rows3 size={28} />

                        <h3>

                            Total Records

                        </h3>

                        <p>

                            {Number(
                                status.rows
                            ).toLocaleString()}

                        </p>

                    </div>

                    <div className="database-card">

                        <h3>

                            Technology Stack

                        </h3>

                        <ul>

                            <li>PostgreSQL</li>

                            <li>FastAPI</li>

                            <li>React</li>

                            <li>D3.js</li>

                        </ul>

                    </div>

                </section>

            </main>

        </div>

    );

}