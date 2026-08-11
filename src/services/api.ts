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
import type { TopProduct } from "../types/topProducts";
import type { LowStockItem } from "../types/lowStock";

const storeQuery = (storeId?: number | null) =>
  storeId ? `?store_id=${storeId}` : "";

export const api = {

  connection: () =>
    get<Connection>("/connection"),

  kpis: (storeId?: number | null) =>
    get<any>(`/kpis${storeQuery(storeId)}`),

  revenue: (storeId?: number | null) =>
    get<RevenueByStore[]>(
      `/revenue-by-store${storeQuery(storeId)}`
    ),

  monthlySales: (storeId?: number | null) =>
    get<MonthlySales[]>(
      `/monthly-sales${storeQuery(storeId)}`
    ),

  categorySales: (storeId?: number | null) =>
    get<CategorySales[]>(
      `/category-sales${storeQuery(storeId)}`
    ),

  topProducts: (storeId?: number | null) =>
    get<TopProduct[]>(
      `/top-products${storeQuery(storeId)}`
    ),

  lowStock: (storeId?: number | null) =>
    get<LowStockItem[]>(
      `/low-stock${storeQuery(storeId)}`
    ),

  vendorPerformance: (storeId?: number | null) =>
    get<VendorPerformance[]>(
      `/vendor-performance${storeQuery(storeId)}`
    ),

  stores: () =>
    get<Store[]>("/stores"),

  databaseStatus: () =>
    get<DatabaseStatus>("/database-status"),

};