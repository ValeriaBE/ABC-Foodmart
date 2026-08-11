import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface CategorySale {
    category_name: string;
    revenue: number;
}

interface Props {
    data: CategorySale[];
}

export default function CategorySalesChart({ data }: Props) {

    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {

        if (!ref.current || data.length === 0)
            return;

        const svg = d3.select(ref.current);

        svg.selectAll("*").remove();

        const width = 650;
        const height = 420;

        const margin = {
            top: 20,
            right: 30,
            bottom: 40,
            left: 150
        };

        svg
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("width", "100%");

        const chart = svg.append("g")
            .attr(
                "transform",
                `translate(${margin.left},${margin.top})`
            );

        const chartWidth =
            width - margin.left - margin.right;

        const chartHeight =
            height - margin.top - margin.bottom;

        const x = d3.scaleLinear()
            .domain([
                0,
                d3.max(data,d=>+d.revenue)!
            ])
            .nice()
            .range([0,chartWidth]);

        const y = d3.scaleBand()
            .domain(
                data.map(d=>d.category_name)
            )
            .range([0,chartHeight])
            .padding(.25);

        chart.append("g")
            .call(d3.axisLeft(y));

        chart.append("g")
            .attr(
                "transform",
                `translate(0,${chartHeight})`
            )
            .call(
                d3.axisBottom(x)
                .tickFormat(
                    d=>"$"+d3.format(".2s")(Number(d))
                )
            );

        chart.selectAll("rect")

            .data(data)

            .join("rect")

            .attr("x",0)

            .attr("y",d=>y(d.category_name)!)

            .attr("height",y.bandwidth())

            .attr("width",0)

            .attr("rx",8)

            .attr("fill","#2563eb")

            .transition()

            .duration(1000)

            .attr(
                "width",
                d=>x(+d.revenue)
            );

        chart.selectAll(".label")

            .data(data)

            .join("text")

            .attr("class","label")

            .attr(
                "x",
                d=>x(+d.revenue)+8
            )

            .attr(
                "y",
                d=>y(d.category_name)!+
                y.bandwidth()/2+5
            )

            .text(
                d=>"$"+d3.format(",")(d.revenue)
            )

            .style("font-size","12px");

    },[data]);

    return <svg ref={ref}/>;

}