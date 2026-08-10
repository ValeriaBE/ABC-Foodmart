type Props={

    title:string;

    className?:string;

    children:React.ReactNode;

}

export default function ChartCard({

    title,

    className="",

    children

}:Props){

    return(

        <div className={`chart-card ${className}`}>

            <h3>

                {title}

            </h3>

            {children}

        </div>

    );

}