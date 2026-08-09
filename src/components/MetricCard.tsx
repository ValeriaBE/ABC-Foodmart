type Props = {
    title: string;
    value: string;
    change: string;
};

export default function MetricCard({
    title,
    value,
    change,
}: Props) {

    return (

        <div className="metric-card">

            <h3>{title}</h3>

            <h2>{value}</h2>

            <p>{change}</p>

        </div>

    );

}