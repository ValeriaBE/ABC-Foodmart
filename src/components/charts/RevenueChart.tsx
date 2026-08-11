import { useEffect, useRef } from "react";
import * as d3 from "d3";

import type { RevenueByStore } from "../../types/dashboard";

type Props = {

    data: RevenueByStore[];

};

export default function RevenueChart({

    data

}: Props){

    const svgRef =
        useRef<SVGSVGElement>(null);

    useEffect(()=>{

        if(!data.length) return;

        const width = 520;

        const height = 300;

        const margin = {

            top:20,

            right:20,

            bottom:50,

            left:80

        };

        const svg =
            d3.select(svgRef.current);

        svg.selectAll("*").remove();

        svg
            .attr("width",width)
            .attr("height",height);

        const x =
            d3.scaleBand()

            .domain(
                data.map(d=>d.store_name)
            )

            .range([
                margin.left,
                width-margin.right
            ])

            .padding(.3);

        const y =
            d3.scaleLinear()

            .domain([
                0,

                d3.max(
                    data,
                    d=>+d.revenue
                ) || 0
            ])

            .nice()

            .range([
                height-margin.bottom,
                margin.top
            ]);

        svg.append("g")

            .attr(
                "transform",
                `translate(0,${
                    height-margin.bottom
                })`
            )

            .call(d3.axisBottom(x));

        svg.append("g")

            .attr(
                "transform",
                `translate(${margin.left},0)`
            )

            .call(
                d3.axisLeft(y)
                    .tickFormat(d=>`$${d3.format(".2s")(Number(d))}`)
            );

        svg.selectAll("rect")

            .data(data)

            .join("rect")

            .attr("x",d=>x(d.store_name)!)

            .attr("width",x.bandwidth())

            .attr("y",height-margin.bottom)

            .attr("height",0)

            .attr("fill","#2563eb")

            .transition()

            .duration(1000)

            .attr("y",d=>y(+d.revenue))

            .attr("height",d=>

                height-margin.bottom-

                y(+d.revenue)

            );

    },[data]);

    return(

        <svg ref={svgRef}/>

    );

}