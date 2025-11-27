import Image from 'next/image';

// Import all images
import img1 from '@/assets/screenApp/0085fa4739ddb583eccc11.jpg';
import img2 from '@/assets/screenApp/0e67e6a4253ea960f02f5.jpg';
import img3 from '@/assets/screenApp/2da3416182fb0ea557ea7.jpg';
import img4 from '@/assets/screenApp/3af6d23611ac9df2c4bd3.jpg';
import img5 from '@/assets/screenApp/3cbb417982e30ebd57f26.jpg';
import img6 from '@/assets/screenApp/406935abf6317a6f23208.jpg';
import img7 from '@/assets/screenApp/434f218de2176e4937069.jpg';
import img8 from '@/assets/screenApp/6584ec482fd2a38cfac317.jpg';
import img9 from '@/assets/screenApp/80307df2be6832366b7914.jpg';
import img10 from '@/assets/screenApp/901a3ed8fd42711c285312.jpg';
import img11 from '@/assets/screenApp/a06e59ae9a34166a4f252.jpg';
import img12 from '@/assets/screenApp/c1403d82fe1872462b0910.jpg';
import img13 from '@/assets/screenApp/dafb8c364facc3f29abd13.jpg';
import img14 from '@/assets/screenApp/e27216bfd525597b003416.jpg';
import img15 from '@/assets/screenApp/e5c78b0a4890c4ce9d8115.jpg';
import img16 from '@/assets/screenApp/e6243fe5fc7f7021296e1.jpg';
import img17 from '@/assets/screenApp/f530d3f310699c37c5784.jpg';

const screenshots = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17
];

export default function Gallery() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-sky-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6 font-rounded">
                    Peek Inside <span className="text-pink-500">Megalou</span>
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                    See what makes our app so special!
                </p>
            </div>

            {/* Marquee Effect Container */}
            <div className="relative w-full">
                <div className="flex gap-8 animate-scroll whitespace-nowrap py-4 px-4">
                    {/* Double the list for seamless looping */}
                    {[...screenshots, ...screenshots].map((src, index) => (
                        <div
                            key={index}
                            className="inline-block w-64 md:w-80 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition duration-300"
                        >
                            <Image
                                src={src}
                                alt={`Screenshot ${index + 1}`}
                                className="w-full h-auto"
                                placeholder="blur"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
