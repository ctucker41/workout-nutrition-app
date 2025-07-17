import Link from 'next/link'
import { Checkbox } from "@/components/ui/checkbox";


export default function LoginPage() {
    return (
        <div className="p-4 max-w-md mx-auto m-6">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Workout App</h1>
            <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
            <form className="flex flex-col gap-5 mb-4">
                <input className="p-2 border rounded" type="email" placeholder="E-mail" />
                <input className="p-2 border rounded" type="password" placeholder="Password" />
                <button className="bg-blue-600 text-white p-2 rounded-2xl hover:bg-blue-700">Submit</button>
            </form>

            <div className="flex flex-row justify-between">

                <label className="flex items-center gap-2">
                    <Checkbox id="checkbox"/>
                    <span className="select-none" >Remember me</span>
                </label>

                <Link href="../.." className="text-blue-600 hover:text-blue-700 underline select-none" draggable={false}> Forgot Password </Link>
            </div>

            <div className="flex flex-col mt-12">
            <p>Don&apos;t have an account?</p>
            <Link href="../.." className="text-blue-600 hover:text-blue-700 underline select-none" draggable={false}>Create an account</Link>
            </div>

        </div>
    )
}