import Link from "next/link"

export default function Dashboard() {
    return (
        <div className="w-full h-10 sm:h-10 md:h-14 lg:h-14
        grid grid-cols-3 items-center md:px-6
        bg-blue-600">
            <div></div>
            <h1 className="text-center text-white font-semibold text-xl md:text-2xl select-none">Dashboard</h1>
            <div className="flex justify-end">
            <Link href="/auth/login" className="text-md md:text-lg text-white hover:bg-blue-700 px-3 py-2 rounded-2xl select-none">Logout</Link>
            </div>
        </div>

    )
}