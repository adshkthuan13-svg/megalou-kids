'use client';

import { useState } from 'react';

export default function AlphaSignup() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData as any).toString(),
        })
            .then(() => setSubmitted(true))
            .catch((error) => alert(error));
    };

    if (submitted) {
        return (
            <section className="py-24 bg-sky-400 relative overflow-hidden" id="signup">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-12 shadow-2xl transform rotate-1">
                        <h2 className="text-4xl font-black text-green-500 mb-4">You're In! 🎉</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Thank you for joining the Megalou Kids Alpha. We'll be in touch soon!
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="text-sky-500 font-bold hover:underline"
                        >
                            Register another email
                        </button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-24 bg-sky-400 relative overflow-hidden" id="signup">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32 mix-blend-overlay"></div>
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-2xl text-center border-8 border-sky-200">
                    <h2 className="text-3xl md:text-5xl font-black text-sky-500 mb-6 font-rounded">
                        Join the Fun! 🚀
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
                        Be the first to explore Megalou Kids. Sign up for early access and exclusive goodies!
                    </p>

                    <form
                        name="alpha-signup"
                        method="POST"
                        data-netlify="true"
                        onSubmit={handleSubmit}
                        className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
                    >
                        <input type="hidden" name="form-name" value="alpha-signup" />

                        <input
                            type="email"
                            name="email"
                            placeholder="Parent's Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 px-6 py-4 rounded-2xl border-4 border-gray-100 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 outline-none transition text-gray-900 text-lg placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            className="bg-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-pink-600 transition shadow-lg transform hover:scale-105 active:scale-95 whitespace-nowrap"
                        >
                            Join Alpha
                        </button>
                    </form>

                    <p className="mt-6 text-sm text-gray-400 font-medium">
                        🔒 Safe & Secure. Unsubscribe anytime.
                    </p>
                </div>
            </div>
        </section>
    );
}
