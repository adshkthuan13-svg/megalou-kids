import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-white border-t-4 border-sky-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
                        <div className="w-32 mb-4">
                            <Image src={logo} alt="Megalou Kids" />
                        </div>
                        <p className="text-gray-500 font-medium text-center md:text-left">Making learning magical for everyone.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 hover:bg-sky-200 hover:scale-110 transition">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-200 hover:scale-110 transition">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 hover:bg-purple-200 hover:scale-110 transition">
                            <Twitter size={24} />
                        </a>
                        <a href="mailto:contact@megaloukids.com" className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 hover:bg-yellow-200 hover:scale-110 transition">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-medium">
                    <p>&copy; {new Date().getFullYear()} Megalou Kids. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-sky-500 transition">Privacy Policy</a>
                        <a href="#" className="hover:text-sky-500 transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
