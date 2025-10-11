"use client";

import { useState, useEffect } from "react";
import "../../app/globals.css";
import Header from "../components/Header";
import Loader from "../post-login/components/Loader";

export default function RootLayout({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
