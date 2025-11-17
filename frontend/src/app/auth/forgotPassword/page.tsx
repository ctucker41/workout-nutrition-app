import Link from 'next/link'


export default function ForgotPasswordPage() {
    return (
        <div className="p-4 max-w-md mx-auto m-6">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Workout App</h1>
            <h1 className="text-2xl font-bold mb-8 text-center">Forgot Your Password?</h1>
            <p className="text-center text-lg leading-relaxed mb-4">Please enter the email address associated with your account.</p>
            <form className="flex flex-col gap-5 mb-4">
                <input className="p-2 border rounded" type="email" placeholder="E-mail" />
                <button className="bg-blue-600 text-white p-2 rounded-2xl hover:bg-blue-700">Submit</button>
            </form>

            <div className="flex flex-col mt-4">
                <Link href="/auth" className="text-blue-600 hover:text-blue-700 underline select-none" draggable={false}>Back to Login</Link>
            </div>

        </div>
    )
}