export default function ThankYou() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-sky-100 to-white flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                <div className="bg-white rounded-3xl p-12 shadow-2xl border-8 border-green-200 transform rotate-1">
                    <div className="text-6xl mb-6">🎉</div>
                    <h1 className="text-4xl md:text-5xl font-black text-green-500 mb-6 font-rounded">
                        You're In!
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 font-medium">
                        Thank you for joining the Megalou Kids Alpha program! We'll be in touch soon with your exclusive early access.
                    </p>
                    <a
                        href="/"
                        className="inline-block bg-sky-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-600 transition shadow-lg transform hover:scale-105 active:scale-95"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        </main>
    );
}
