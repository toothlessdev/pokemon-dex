import { Outlet } from "react-router-dom";

export const RootLayout = () => {
    return (
        <main>
            <Outlet />
        </main>
    );
};
