import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen font-sans bg-white selection:bg-blue-600 selection:text-white">
            {/* Left Side - Branding/Image (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/hero-bg.png" alt="Office" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-gray-900/90"></div>
                </div>
                <div className="relative z-10 p-16 text-white max-w-lg">
                    <Link href="/" className="inline-block mb-12">
                        <ApplicationLogo className="h-12 brightness-0 invert object-contain" />
                    </Link>
                    <h1 className="text-gr-xl font-bold mb-6 leading-tight">Empowering your digital transformation.</h1>
                    <p className="text-gray-300 text-gr-base leading-relaxed mb-10">Access your client portal to track project milestones, manage invoices, and collaborate with our engineering team.</p>
                    
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-600/30 rounded-sm flex items-center justify-center border border-blue-500/30">
                            <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div>
                            <p className="font-semibold">Fast & Secure</p>
                            <p className="text-sm text-gray-400">Enterprise-grade infrastructure</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 bg-gray-50">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex justify-center mb-10">
                        <Link href="/">
                            <ApplicationLogo className="h-10 object-contain" />
                        </Link>
                    </div>

                    <div className="bg-white px-8 py-10 sm:px-10 sm:py-12 shadow-sm border border-gray-200 rounded-sm">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
