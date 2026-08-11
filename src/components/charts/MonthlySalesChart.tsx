import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface MonthlySalesPoint {
  month: string;
  revenue: number;
}

interface Props {
  data: MonthlySalesPoint[];
}

export default function MonthlySalesChart({ data }: Props) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current || !data || data.length === 0) {
      return;
    }

    const svg = d3.select(ref.current);

    svg.selectAll("*").remove();

    const width = 720;
    const height = 320;

    const margin = {
      top: 20,
      right: 30,
      bottom: 45,
      left: 80,
    };

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", height);

    const chart = svg
      .append("g")
      .attr(
        "transform",
        `translate(${margin.left}, ${margin.top})`
      );

    const formattedData = data
      .map((d) => ({
        date: new Date(d.month),
        revenue: Number(d.revenue),
      }))
      .filter(
        (d) =>
          !Number.isNaN(d.date.getTime()) &&
          !Number.isNaN(d.revenue)
      );

    if (formattedData.length === 0) {
      return;
    }

    const dateExtent = d3.extent(
      formattedData,
      (d) => d.date
    );

    if (!dateExtent[0] || !dateExtent[1]) {
      return;
    }

    const x = d3
      .scaleTime()
      .domain([dateExtent[0], dateExtent[1]])
      .range([0, chartWidth]);

    const maxRevenue =
      d3.max(formattedData, (d) => d.revenue) ?? 0;

    const y = d3
      .scaleLinear()
      .domain([0, maxRevenue])
      .nice()
      .range([chartHeight, 0]);

    const xAxis = d3
      .axisBottom<Date>(x)
      .ticks(d3.timeMonth.every(1))
      .tickFormat((date) =>
        d3.timeFormat("%b")(date)
      );

    chart
      .append("g")
      .attr(
        "transform",
        `translate(0, ${chartHeight})`
      )
      .call(xAxis);

    const yAxis = d3
      .axisLeft<number>(y)
      .ticks(5)
      .tickFormat((value) =>
        `$${d3.format(".2s")(value)}`
      );

    chart
      .append("g")
      .call(yAxis);

    // Horizontal grid lines
    chart
      .append("g")
      .attr("class", "grid")
      .call(
        d3
          .axisLeft<number>(y)
          .ticks(5)
          .tickSize(-chartWidth)
          .tickFormat(() => "")
      )
      .select(".domain")
      .remove();

    const line = d3
      .line<(typeof formattedData)[number]>()
      .x((d) => x(d.date))
      .y((d) => y(d.revenue))
      .curve(d3.curveMonotoneX);

    const path = chart
      .append("path")
      .datum(formattedData)
      .attr("fill", "none")
      .attr("stroke", "#2563eb")
      .attr("stroke-width", 3)
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round")
      .attr("d", line);

    const pathNode = path.node();

    if (pathNode) {
      const totalLength = pathNode.getTotalLength();

      path
        .attr(
          "stroke-dasharray",
          `${totalLength} ${totalLength}`
        )
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(1000)
        .ease(d3.easeCubicOut)
        .attr("stroke-dashoffset", 0);
    }

    chart
      .selectAll<SVGCircleElement, (typeof formattedData)[number]>(
        ".monthly-point"
      )
      .data(formattedData)
      .join("circle")
      .attr("class", "monthly-point")
      .attr("cx", (d) => x(d.date))
      .attr("cy", (d) => y(d.revenue))
      .attr("r", 0)
      .attr("fill", "#2563eb")
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .transition()
      .delay((_, index) => index * 100)
      .duration(300)
      .attr("r", 5);
  }, [data]);

  return (
    <svg
      ref={ref}
      style={{
        width: "100%",
        display: "block",
      }}
    />
  );
}