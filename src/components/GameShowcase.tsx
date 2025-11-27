import Image from 'next/image';
import gameScreen from '@/assets/screenApp/f530d3f310699c37c5784.jpg';

export default function GameShowcase() {
    return (
        <section className="py-24 bg-yellow-50 overflow-hidden relative">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative mx-auto w-64 md:w-80 transform -rotate-3 hover:rotate-0 transition duration-500">
                            <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl transform translate-x-2 translate-y-2"></div>
                            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-gray-900 shadow-inner">
                                <Image
                                    src={gameScreen}
                                    alt="Talking Megalou Game"
                                    className="w-full h-auto"
                                    placeholder="blur"
                                />
                            </div>
                            {/* Shine effect */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/20 to-transparent pointer-events-none rounded-[2.5rem]"></div>
                        </div>

                        {/* Floating badges */}
                        <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl transform rotate-12 animate-bounce">
                            <span className="text-4xl">🎤</span>
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl transform -rotate-12 animate-bounce animation-delay-1000">
                            <span className="text-4xl">🎮</span>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 font-rounded leading-tight">
                            Meet Your New <br />
                            <span className="text-orange-500">Best Friend!</span>
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 font-medium leading-relaxed">
                            Just like Talking Tom, but smarter! Talk, play, and learn with Megalou.
                            He repeats what you say, reacts to your touch, and grows with you.
                        </p>

                        <ul className="space-y-4 mb-10 text-left max-w-md mx-auto lg:mx-0">
                            <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-orange-100">
                                <span className="bg-orange-100 text-orange-600 p-2 rounded-lg text-xl">🗣️</span>
                                <span className="font-bold text-gray-700">Voice Interaction</span>
                            </li>
                            <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-orange-100">
                                <span className="bg-orange-100 text-orange-600 p-2 rounded-lg text-xl">👆</span>
                                <span className="font-bold text-gray-700">Touch Responsive</span>
                            </li>
                            <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-orange-100">
                                <span className="bg-orange-100 text-orange-600 p-2 rounded-lg text-xl">🎁</span>
                                <span className="font-bold text-gray-700">Daily Rewards</span>
                            </li>
                        </ul>

                        <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-orange-600 transition shadow-lg transform hover:scale-105 active:scale-95">
                            Play Now
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
