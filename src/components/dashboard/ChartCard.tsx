import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function ChartCard({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <section className="chart-card">

      <div className="chart-card-header">

        <h2>{title}</h2>

        {subtitle && (
          <p>{subtitle}</p>
        )}

      </div>

      <div className="chart-card-body">

        {children}

      </div>

    </section>
  );
}