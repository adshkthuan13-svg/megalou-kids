import Image from 'next/image';
import banner from '@/assets/banner.png';
import logo from '@/assets/logo.png';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-sky-100 to-white pt-10 pb-24 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Navbar-ish Logo */}
                <div className="flex justify-center md:justify-start mb-10">
                    <div className="w-40 md:w-52">
                        <Image src={logo} alt="Megalou Kids Logo" placeholder="blur" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 z-10 text-center lg:text-left">
                        <h1 className="text-5xl lg:text-7xl font-black text-pink-500 mb-6 drop-shadow-sm font-rounded">
                            Megalou <span className="text-sky-500">Kids</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-medium">
                            A magical world of interactive stories, games, and creativity! 🚀✨
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#signup" className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-pink-600 transition shadow-xl transform hover:scale-105 active:scale-95">
                                Join Alpha 🌟
                            </a>
                            <button className="bg-white text-sky-500 px-8 py-4 rounded-full font-bold text-xl border-4 border-sky-200 hover:border-sky-300 transition shadow-md">
                                Learn More
                            </button>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-semibold">
                            <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
                                🎉 100+ Happy Parents
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative w-full max-w-2xl mx-auto transform hover:scale-105 transition duration-500">
                            <div className="absolute inset-0 bg-sky-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                            <Image
                                src={banner}
                                alt="Megalou Kids App Preview"
                                className="relative z-10 drop-shadow-2xl"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
