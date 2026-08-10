const API = "http://localhost:8000/api";

async function get<T>(url: string): Promise<T> {
  const response = await fetch(`${API}${url}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  return response.json() as Promise<T>;
}

import type { Connection } from "../types/connection";

export const api = {
  connection: () => get<Connection>("/connection"),

  kpis: () => get<any>("/kpis"),

  revenue: () => get<any[]>("/revenue-by-store"),

  monthlySales: () => get<any[]>("/monthly-sales"),

  categorySales: () => get<any[]>("/category-sales"),

  topProducts: () => get<any[]>("/top-products"),

  lowStock: () => get<any[]>("/low-stock"),

  vendorPerformance: () => get<any[]>("/vendor-performance"),
};