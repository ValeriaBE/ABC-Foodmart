import type { VendorPerformance } from "../../types/vendorPerformance";

interface Props {
    data: VendorPerformance[];
}

function getStatus(days: number) {

    if (days <= 1)
        return {
            text: "Excellent",
            color: "#16a34a",
            bg: "#dcfce7"
        };

    if (days <= 2)
        return {
            text: "Good",
            color: "#ca8a04",
            bg: "#fef9c3"
        };

    return {
        text: "Needs Attention",
        color: "#dc2626",
        bg: "#fee2e2"
    };

}

export default function VendorPerformanceTable({ data }: Props) {

    return (

        <table className="dashboard-table">

            <thead>

                <tr>

                    <th>Vendor</th>

                    <th>Avg Delivery</th>

                    <th>Status</th>

                </tr>

            </thead>

            <tbody>

                {

                    data.map(vendor => {

                        const status = getStatus(
                            Number(vendor.average_days_from_expected)
                        );

                        return (

                            <tr key={vendor.vendor_name}>

                                <td>

                                    {vendor.vendor_name}

                                </td>

                                <td>

                                    {Number(
                                        vendor.average_days_from_expected
                                    ).toFixed(1)} days

                                </td>

                                <td>

                                    <span

                                        className="status-pill"

                                        style={{
                                            background: status.bg,
                                            color: status.color
                                        }}

                                    >

                                        {status.text}

                                    </span>

                                </td>

                            </tr>

                        );

                    })

                }

            </tbody>

        </table>

    );

}