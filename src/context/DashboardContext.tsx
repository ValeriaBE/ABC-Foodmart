import {
    createContext,
    useContext,
    useState,
} from "react";

const DashboardContext =
    createContext<any>(null);

export function DashboardProvider({
    children,
}: any) {

    const [dashboardData,
        setDashboardData] =
        useState(null);

    return (

        <DashboardContext.Provider
            value={{
                dashboardData,
                setDashboardData,
            }}
        >

            {children}

        </DashboardContext.Provider>

    );

}

export function useDashboard(){

    return useContext(
        DashboardContext
    );

}