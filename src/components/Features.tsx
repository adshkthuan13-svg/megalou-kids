import Image from 'next/image';
import storyIcon from '@/assets/storyIcon.png';
import gameIcon from '@/assets/gameIcon.png';
import musicIcon from '@/assets/musicIcon.png';
import videoIcon from '@/assets/videoIcon.png';
import libraryIcon from '@/assets/libraryIcon.png';
import playMusicIcon from '@/assets/playMusicIcon.png';
import mediaIcon from '@/assets/mediaIcon.png';
import challengeIcon from '@/assets/challengeIcon.png';

const features = [
    {
        title: 'Magical Stories',
        description: 'Read and listen to enchanting tales that spark imagination.',
        image: storyIcon,
        bgColor: 'bg-pink-50',
        borderColor: 'border-pink-200',
        textColor: 'text-pink-600',
    },
    {
        title: 'Fun Games',
        description: 'Learn math and logic through exciting interactive puzzles.',
        image: gameIcon,
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-600',
    },
    {
        title: 'Creative Studio',
        description: 'Draw, color, and make music in our creative zone.',
        image: musicIcon,
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        textColor: 'text-purple-600',
    },
    {
        title: 'Safe Videos',
        description: 'Curated educational videos in a safe, ad-free environment.',
        image: videoIcon,
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200',
        textColor: 'text-sky-600',
    },
    // New Features
    {
        title: 'Offline Library',
        description: 'Load your own PDF books and read them anywhere, anytime.',
        image: libraryIcon,
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        textColor: 'text-orange-600',
    },
    {
        title: 'Music Player',
        description: 'Listen to your favorite songs offline with our built-in player.',
        image: playMusicIcon,
        bgColor: 'bg-teal-50',
        borderColor: 'border-teal-200',
        textColor: 'text-teal-600',
    },
    {
        title: 'Video Cinema',
        description: 'Watch downloaded videos offline. Perfect for long trips!',
        image: mediaIcon,
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-200',
        textColor: 'text-indigo-600',
    },
    {
        title: 'AI Story Creator',
        description: 'Create unique stories with AI based on your own ideas!',
        image: challengeIcon,
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-200',
        textColor: 'text-rose-600',
    },
];

export default function Features() {
    return (
        <section className="py-24 bg-white relative" id="features">
            {/* Decorative background elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6 font-rounded">
                        Explore <span className="text-purple-500">Megalou</span> World
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                        Designed for curious minds, our app combines learning and play in a safe, colorful environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className={`p-8 rounded-3xl ${feature.bgColor} border-4 ${feature.borderColor} hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 text-center`}>
                            <div className="w-32 h-32 mx-auto mb-6 relative drop-shadow-md">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <h3 className={`text-2xl font-bold ${feature.textColor} mb-3 font-rounded`}>{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
