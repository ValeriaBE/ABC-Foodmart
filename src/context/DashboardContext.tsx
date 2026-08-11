import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { api } from "../services/api";

const DashboardContext =
  createContext<any>(null);

export function DashboardProvider({
  children,
}: any) {

  const [dashboardData, setDashboardData] =
    useState<any>(null);

  const [selectedStore, setSelectedStore] =
    useState<number | null>(null);

  const [stores, setStores] =
    useState<any[]>([]);

  async function loadDashboard(
    storeId: number | null = selectedStore
  ) {

    const [
      kpis,
      revenue,
      monthlySales,
      categorySales,
      topProducts,
      lowStock,
      vendorPerformance,
    ] = await Promise.all([

      api.kpis(storeId),

      api.revenue(storeId),

      api.monthlySales(storeId),

      api.categorySales(storeId),

      api.topProducts(storeId),

      api.lowStock(storeId),

      api.vendorPerformance(storeId),

    ]);

    setDashboardData({

      kpis,

      revenue,

      monthlySales,

      categorySales,

      topProducts,

      lowStock,

      vendorPerformance,

    });

  }

  useEffect(() => {

    api.stores()

      .then(setStores)

      .catch(console.error);

  }, []);

  useEffect(() => {

    loadDashboard();

  }, [selectedStore]);

  return (

    <DashboardContext.Provider

      value={{

        dashboardData,

        selectedStore,

        setSelectedStore,

        stores,

        refreshDashboard: loadDashboard,

      }}

    >

      {children}

    </DashboardContext.Provider>

  );

}

export function useDashboard() {

  return useContext(
    DashboardContext
  );

}