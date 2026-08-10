import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Truck,
    Users
} from "lucide-react";

export default function Sidebar() {

    return (

        <aside className="sidebar">

            <h2>

                ABC Foodmart

            </h2>

            <nav>

                <a>

                    <LayoutDashboard size={18} />

                    Dashboard

                </a>

                <a>

                    <Package size={18} />

                    Inventory

                </a>

                <a>

                    <ShoppingCart size={18} />

                    Sales

                </a>

                <a>

                    <Truck size={18} />

                    Vendors

                </a>

                <a>

                    <Users size={18} />

                    Customers

                </a>

            </nav>

        </aside>

    );

}