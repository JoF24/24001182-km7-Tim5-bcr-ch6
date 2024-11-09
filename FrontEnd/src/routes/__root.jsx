import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import NavigationBar from "../components/Navbar";
import TwoToneSidebar from "../components/SideBar";
import { useState, useEffect } from "react";
import "../components/Navbar/NavigationBar.css";

const checkUserLoggedIn = () => {
    return !!localStorage.getItem("Token");
};

export const Route = createRootRoute({
    component: function RootComponent() {
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
        const [isLoggedIn, setIsLoggedIn] = useState(checkUserLoggedIn);

        const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

        useEffect(() => {
            const authToken = localStorage.getItem("token");
            setIsLoggedIn(!!authToken);
        }, []);

        return (
            <>
                <div className={`app-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
                    {isLoggedIn ? (
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
                    ) : (
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
