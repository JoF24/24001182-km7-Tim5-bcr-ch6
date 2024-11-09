import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import NavigationBar from "../components/Navbar";
import TwoToneSidebar from "../components/SideBar"; // Pastikan komponen ini diimpor
import { useState } from "react"; // Tambahkan useState
import "../components/Navbar/NavigationBar.css"

export const Route = createRootRoute({
    component: function RootComponent() {
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
        const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

        return (
            <>
                <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
                    <TwoToneSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <div className="main-content">
                        <NavigationBar toggleSidebar={toggleSidebar} />
                        <Container>
                            <Outlet />
                        </Container>
                        <TanStackRouterDevtools />
                    </div>
                </div>
                <ToastContainer />
            </>
        );
    },
});
