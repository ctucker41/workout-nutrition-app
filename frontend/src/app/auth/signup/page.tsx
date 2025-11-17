import Link from 'next/link'


export default function SignupPage() {
    return (
        <div className="p-4 max-w-md mx-auto m-6">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Workout App</h1>
            <h1 className="text-2xl font-bold mb-4 text-center">Create An Account</h1>
            <form className="flex flex-col gap-5 mb-4">
                <input className="p-2 border rounded" type="name" placeholder="Name" />
                <input className="p-2 border rounded" type="email" placeholder="E-mail" />
                <input className="p-2 border rounded" type="password" placeholder="Password" />
                <input className="p-2 border rounded" type="confirmpassword" placeholder="Confirm Password" />
                <button className="bg-blue-600 text-white p-2 rounded-2xl hover:bg-blue-700">Create Account</button>
            </form>

            <div className="flex flex-col mt-4">
                <p>Already have an account?</p>
                <Link href="/" className="text-blue-600 hover:text-blue-700 underline select-none" draggable={false}>Sign In</Link>
            </div>

        </div>
    )
}