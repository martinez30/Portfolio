"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
    children: React.ReactNode;
}

export default function ToastifyProvider({ children }: ToastProviderProps) {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    )
}