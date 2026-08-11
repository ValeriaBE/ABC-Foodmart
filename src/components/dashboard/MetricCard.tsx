import type { ReactNode } from "react";

interface Props {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
  variant?: "default" | "success" | "warning";
}

export default function MetricCard({
  title,
  value,
  subtitle,
  icon,
  variant = "default",
}: Props) {
  return (
    <div className={`metric-card metric-card--${variant}`}>
      <div className="metric-card__top">
        <span className="metric-card__title">
          {title}
        </span>

        {icon && (
          <div className="metric-card__icon">
            {icon}
          </div>
        )}
      </div>

      <div className="metric-card__value">
        {value}
      </div>

      {subtitle && (
        <div className="metric-card__subtitle">
          {subtitle}
        </div>
      )}
    </div>
  );
}