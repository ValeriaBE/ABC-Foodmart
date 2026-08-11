import {
  LayoutDashboard,
  Database,
  Settings
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-logo">ABC</div>

        <h2>Foodmart</h2>

        <nav>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/database"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <Database size={18} />
            Database
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <Settings size={18} />
            Settings
          </NavLink>

        </nav>
      </div>
    </aside>
  );
}