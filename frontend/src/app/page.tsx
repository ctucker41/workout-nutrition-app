"use client"

import Link from 'next/link'
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        if (!API_URL) {
            alert("API URL is not configured.");
            return;
        }

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
            console.log("Login Error response:", data);
            alert(data.error || data.message || "Login failed.");
            return;
        }

            if (data.token) {
                localStorage.setItem("token", data.token);
            }

        router.push("/auth/dashboards");
    } catch (err) {
            console.error("Login request failed:", err);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-4 max-w-md mx-auto m-6">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Workout App</h1>
            <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-5 mb-4">
                <input className="p-2 border rounded select-none" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="p-2 border rounded select-none" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="text-center bg-blue-600 text-white p-2 rounded-2xl hover:bg-blue-700 select-none" disabled={loading}>Submit</button>
            </form>

            <div className="flex flex-row justify-between">

                <label className="flex items-center gap-2">
                    <Checkbox id="checkbox"/>
                    <span className="select-none" draggable={false}>Remember me</span>
                </label>

                <Link href="/auth/forgotPassword" className="text-blue-600 hover:text-blue-700 underline select-none" draggable={false}> Forgot Password </Link>
            </div>

            <div className="flex flex-col mt-12">
            <p>Don&apos;t have an account?</p>
            <Link href="/auth/signup" className="text-blue-600 hover:text-blue-700 underline select-none" draggable={false}>Create an account</Link>
            </div>

        </div>
    )
}