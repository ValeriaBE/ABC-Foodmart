const API = import.meta.env.VITE_API_URL;

async function get<T>(url: string): Promise<T> {
  const response = await fetch(`${API}${url}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  return response.json() as Promise<T>;
}

import type { Connection } from "../types/connection";
import type { RevenueByStore } from "../types/dashboard";
import type { MonthlySales } from "../types/monthlySales";
import type { CategorySales } from "../types/categorySale";
import type { Store } from "../types/store";
import type { VendorPerformance } from "../types/vendorPerformance";
import type { DatabaseStatus } from "../types/databaseStatus";

export const api = {
  connection: () => get<Connection>("/connection"),

  kpis: () => get<any>("/kpis"),

revenue: () =>
    get<RevenueByStore[]>("/revenue-by-store"),

  monthlySales: () =>
    get<MonthlySales[]>("/monthly-sales"),

  categorySales: () => get<CategorySales[]>("/category-sales"),

  topProducts: () => get<any[]>("/top-products"),

  lowStock: () => get<any[]>("/low-stock"),

  vendorPerformance: () =>
    get<VendorPerformance[]>("/vendor-performance"),
  stores: () =>
    get<Store[]>("/stores"),
  databaseStatus:()=>
    get<DatabaseStatus>("/database-status"),
};