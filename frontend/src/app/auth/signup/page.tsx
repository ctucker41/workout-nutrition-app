"use client"

import Link from 'next/link'
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {

    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleSignup(e: React.FormEvent) {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        if (!API_URL) {
            alert("API URL is not configured.");
            return;
        }

        const res = await fetch(`${API_URL}/api/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || "Signup failed.");
            return;
        }

        router.push("/");
    }

    return (
        <div className="p-4 max-w-md mx-auto m-6">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Workout App</h1>
            <h1 className="text-2xl font-bold mb-4 text-center">Create An Account</h1>
            <form onSubmit={handleSignup} className="flex flex-col gap-5 mb-4">
                <input className="p-2 border rounded select-none" type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="p-2 border rounded select-none" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="p-2 border rounded select-none" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className="p-2 border rounded select-none" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button className="bg-blue-600 text-white p-2 rounded-2xl hover:bg-blue-700 select-none">Create Account</button>
            </form>

            <div className="flex flex-col mt-4">
                <p>Already have an account?</p>
                <Link href="/" className="text-blue-600 hover:text-blue-700 underline select-none" draggable={false}>Sign In</Link>
            </div>

        </div>
    )
}