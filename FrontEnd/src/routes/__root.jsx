import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import NavigationBar from "../components/Navbar";
import TwoToneSidebar from "../components/SideBar";
import { useState } from "react";
import "../components/Navbar/NavigationBar.css";

const isUserLoggedIn = () => {
    return !!localStorage.getItem("authToken");
};

export const Route = createRootRoute({
    component: function RootComponent() {
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
        const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

        // untuk cek apakah pengguna sudah login
        const isLoggedIn = isUserLoggedIn();

        return (
            <>
                <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
                    {isLoggedIn && (
                        <>
                            <TwoToneSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                            <div className="main-content">
                                <NavigationBar toggleSidebar={toggleSidebar} />
                                <Container>
                                    <Outlet />
                                </Container>
                                <TanStackRouterDevtools />
                            </div>
                        </>
                    )}
                    {!isLoggedIn && (
                        // tampilkan konten login atau register tanpa sidebar dan navbar
                        <Container>
                            <Outlet />
                        </Container>
                    )}
                </div>
                <ToastContainer />
            </>
        );
    },
});
