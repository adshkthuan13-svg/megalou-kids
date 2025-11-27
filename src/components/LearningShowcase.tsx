import Image from 'next/image';
import readBook from '@/assets/screenApp/ReadBook.jpg';
import checkRead from '@/assets/screenApp/CheckRead.jpg';
import mathScreen from '@/assets/screenApp/math.jpg';

export default function LearningShowcase() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-rounded">
                        Master Skills with <span className="text-blue-500">Fun Learning</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                        Comprehensive curriculum designed to boost confidence in reading and math.
                    </p>
                </div>

                {/* Reading Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <div className="relative">
                            {/* Background Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

                            <div className="flex gap-6 justify-center">
                                {/* Read Book Screen */}
                                <div className="relative w-48 md:w-64 transform -rotate-6 hover:rotate-0 transition duration-500 z-10">
                                    <div className="rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                                        <Image src={readBook} alt="Reading Practice" className="w-full h-auto" placeholder="blur" />
                                    </div>
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                                        <span className="text-2xl mr-2">📖</span>
                                        <span className="font-bold text-gray-700">Read Along</span>
                                    </div>
                                </div>

                                {/* Check Read Screen */}
                                <div className="relative w-48 md:w-64 transform rotate-6 hover:rotate-0 transition duration-500 z-20 mt-12">
                                    <div className="rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                                        <Image src={checkRead} alt="Pronunciation Check" className="w-full h-auto" placeholder="blur" />
                                    </div>
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                                        <span className="text-2xl mr-2">🎤</span>
                                        <span className="font-bold text-gray-700">Speak & Check</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
                        <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold mb-4">
                            📚 Reading & Phonics
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-rounded">
                            Build Reading Confidence
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our interactive reading coach listens to your child read and provides instant feedback.
                            It helps improve pronunciation, fluency, and comprehension in a supportive environment.
                        </p>
                        <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                                <span className="font-medium text-gray-700">Real-time pronunciation correction</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                                <span className="font-medium text-gray-700">Huge library of engaging stories</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                                <span className="font-medium text-gray-700">Progress tracking for parents</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Math Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-bold mb-4">
                            🧮 Mathematics
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-rounded">
                            US Standard Math Curriculum
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            From Grade 1 to Grade 5, we cover it all! Our math exercises are aligned with US educational standards
                            to ensure your child stays ahead in class while having fun.
                        </p>
                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                            {['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'].map((grade) => (
                                <div key={grade} className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-center font-bold text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition cursor-default">
                                    {grade}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="relative mx-auto w-64 md:w-80">
                            <div className="absolute inset-0 bg-purple-200 rounded-[3rem] transform rotate-6 scale-105"></div>
                            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl transform hover:scale-105 transition duration-500">
                                <Image
                                    src={mathScreen}
                                    alt="Math Learning"
                                    className="w-full h-auto"
                                    placeholder="blur"
                                />
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-6 -right-6 bg-yellow-400 text-white w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl shadow-lg animate-bounce">
                                A+
                            </div>
                            <div className="absolute bottom-10 -left-8 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2 animate-pulse">
                                <span className="text-2xl">➗</span>
                                <span className="font-bold text-gray-800">Fun Logic!</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
