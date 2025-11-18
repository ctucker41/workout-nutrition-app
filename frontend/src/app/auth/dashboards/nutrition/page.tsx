import Link from "next/link";

export default function Dashboard() {
    return (

        <div className="w-full h-12 sm:h-12 md:h-14 lg:h-18
            grid grid-cols-3 items-center md:px-6
            bg-blue-600">

            <div className="flex justify-start">
                <Link href="/auth/dashboards/workout" className="text-xs md:text-lg text-white hover:bg-blue-700 px-3 py-2 rounded-2xl select-none" draggable={false}>Training</Link>
            </div>

            <h1 className="text-center text-white font-semibold text-sm md:text-2xl whitespace-nowrap select-none">Nutrition Dashboard</h1>

            <div className="flex justify-end">
                <Link href="/" className="text-xs md:text-lg text-white hover:bg-blue-700 px-3 py-2 rounded-2xl select-none" draggable={false}>Logout</Link>
            </div>

        </div>

    )
}