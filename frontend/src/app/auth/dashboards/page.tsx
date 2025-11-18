import Link from "next/link"

export default function Dashboard() {
    return (
        <div>
            <div className="w-full h-10 sm:h-10 md:h-14 lg:h-14
            grid grid-cols-3 items-center md:px-6
            bg-blue-600">
                <div></div>
                <h1 className="text-center text-white font-semibold text-md md:text-2xl select-none">Workout App</h1>
                <div className="flex justify-end">
                <Link href="/" className="text-sm md:text-lg text-white hover:bg-blue-700 px-3 py-2 rounded-2xl select-none" draggable={false}>Logout</Link>
                </div>
            </div>

            <div className="flex flex-col">

                <h1 className="text-center text-2xl font-semibold mt-12 md:mt-16">Getting active, or time for a post-workout snack?</h1>

                <div className="flex flex-row justify-between mx-4 mt-12 md:m-16 gap-4">

                    <div className="w-full h-auto md:mx-56 text-center bg-gray-800 hover:bg-gray-900 rounded-2xl">
                        <Link href="/auth/dashboards/workout" className="block py-2 text-md md:text-lg font-semibold text-white m-4">Training</Link>
                    </div>

                    <div className="w-full h-auto md:mx-56 text-center bg-gray-800 hover:bg-gray-900 rounded-2xl">
                        <Link href="/auth/dashboards/nutrition" className="block py-2 text-md md:text-lg font-semibold text-white m-4">Nutrition</Link>
                    </div>

                </div>

            </div>


        </div>
    )
}