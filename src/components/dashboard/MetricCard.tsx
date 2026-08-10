type Props = {

    title:string;

    value:string | number;

}

export default function MetricCard({

    title,

    value

}:Props){

    return(

        <div className="metric-card">

            <span>{title}</span>

            <h2>{value}</h2>

        </div>

    );

}