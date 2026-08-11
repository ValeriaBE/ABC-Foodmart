import type { LowStockItem } from "../../types/lowStock";

interface Props {
    data: LowStockItem[];
}

export default function LowStockTable({ data }: Props) {

    return (

        <table className="dashboard-table">

            <thead>

                <tr>

                    <th>Product</th>

                    <th>Store</th>

                    <th>On Hand</th>

                    <th>Reorder</th>

                </tr>

            </thead>

            <tbody>

                {data.map((item) => (

                    <tr
                        key={
                            item.product_name +
                            item.store_name
                        }
                    >

                        <td>{item.product_name}</td>

                        <td>{item.store_name}</td>

                        <td>

                            <span
                                className="stock-badge"
                            >
                                {item.quantity_on_hand}
                            </span>

                        </td>

                        <td>

                            {item.reorder_level}

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}