import React from 'react';
import {Navbar} from "../components/Navbar";
import {Outlet} from "react-router-dom";

export function RootLayout() {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    )
}