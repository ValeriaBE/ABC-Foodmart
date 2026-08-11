import type { TopProduct } from "../../types/topProducts";

interface Props {
  data: TopProduct[];
}

export default function TopProductsTable({ data }: Props) {
  return (
    <table className="dashboard-table">

      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Units Sold</th>
          <th>Revenue</th>
        </tr>
      </thead>

      <tbody>

        {data.map((item, index) => (

          <tr key={item.product_name}>

            <td>{index + 1}</td>

            <td>{item.product_name}</td>

            <td>{item.units_sold.toLocaleString()}</td>

            <td>
              $
              {Number(item.revenue).toLocaleString()}
            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}