import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function MainLayout({ children, title, description }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-blue-600 selection:text-white">
            <Head>
                <title>{title ? `${title} | Navyra Studio` : 'Navyra Studio - Solusi Digital Profesional'}</title>
                <meta name="description" content={description || 'Navyra Studio (Navyra) adalah agensi digital terdepan yang menghadirkan solusi teknologi inovatif untuk website, aplikasi, dan enterprise.'} />
                <meta name="keywords" content="Navyra, Navyra Studio, Solusi Digital, Agensi Digital, Web Development" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://navyrastudio.smartsense.my.id/" />
                <meta property="og:title" content={title ? `${title} | Navyra Studio` : 'Navyra Studio - Solusi Digital Profesional'} />
                <meta property="og:description" content={description || 'Navyra Studio (Navyra) adalah agensi digital terdepan yang menghadirkan solusi teknologi inovatif untuk website, aplikasi, dan enterprise.'} />
                <meta property="og:image" content="http://navyrastudio.smartsense.my.id/hero-bg.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="http://navyrastudio.smartsense.my.id/" />
                <meta property="twitter:title" content={title ? `${title} | Navyra Studio` : 'Navyra Studio - Solusi Digital Profesional'} />
                <meta property="twitter:description" content={description || 'Navyra Studio (Navyra) adalah agensi digital terdepan yang menghadirkan solusi teknologi inovatif untuk website, aplikasi, dan enterprise.'} />
                <meta property="twitter:image" content="http://navyrastudio.smartsense.my.id/hero-bg.png" />
                
                {/* Canonical */}
                <link rel="canonical" href="http://navyrastudio.smartsense.my.id/" />

                {/* JSON-LD for AEO / GEO / AIO */}
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Navyra Studio",
                        "alternateName": "Navyra",
                        "url": "http://navyrastudio.smartsense.my.id/",
                        "logo": "http://navyrastudio.smartsense.my.id/navyralogo.webp",
                        "description": "Navyra Studio (Navyra) provides top-tier digital technology solutions.",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+62-800-123-456",
                            "contactType": "Customer Service"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/company/navyrastudio",
                            "https://twitter.com/navyrastudio",
                            "https://www.instagram.com/navyrastudio"
                        ]
                    }
                    `}
                </script>
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Navyra Studio",
                        "url": "http://navyrastudio.smartsense.my.id/",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "http://navyrastudio.smartsense.my.id/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    }
                    `}
                </script>
            </Head>

            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
                <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/navyralogo.webp" alt="Navyra Studio Logo" className={`object-contain transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10 brightness-0 invert'}`} />
                    </Link>

                    {/* Desktop Menu */}
                    <div className={`hidden md:flex items-center space-x-8 text-gr-base font-semibold transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'}`}>
                        <Link href="/" className={`transition-colors duration-200 ${isScrolled ? 'hover:text-blue-600' : 'hover:text-white drop-shadow-md'}`}>Home</Link>
                        <Link href="/about" className={`transition-colors duration-200 ${isScrolled ? 'hover:text-blue-600' : 'hover:text-white drop-shadow-md'}`}>About</Link>
                        <Link href="/products" className={`transition-colors duration-200 ${isScrolled ? 'hover:text-blue-600' : 'hover:text-white drop-shadow-md'}`}>Services</Link>
                        <Link href="/events" className={`transition-colors duration-200 ${isScrolled ? 'hover:text-blue-600' : 'hover:text-white drop-shadow-md'}`}>Events</Link>
                        <Link href="/contact" className={`transition-colors duration-200 ${isScrolled ? 'hover:text-blue-600' : 'hover:text-white drop-shadow-md'}`}>Contact</Link>
                    </div>

                    <div className="hidden md:block">
                        <Link href="/login" className={`px-6 py-2.5 rounded font-semibold text-gr-base transition-all duration-300 flex items-center gap-2 ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'}`}>
                            <FontAwesomeIcon icon={faRightToBracket} /> Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button aria-label="Open main menu" className={`md:hidden transition-colors ${isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-gray-200'}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                </nav>
            </header>

            <main className="min-h-screen">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <img src="/navyralogo.webp" alt="Navyra Studio Logo" className="h-8 object-contain brightness-0 invert mb-6" />
                        <p className="mb-6 text-gray-400 text-gr-base leading-relaxed max-w-sm">Navyra Studio provides premium digital solutions. We combine elegant design with robust engineering to accelerate your business.</p>
                        <p className="text-gray-400 text-gr-xs">&copy; {new Date().getFullYear()} Navyra Studio. All Rights Reserved.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gr-lg mb-6">Company</h3>
                        <ul className="space-y-3 text-gr-base text-gray-400">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="/products" className="hover:text-blue-400 transition-colors">Services</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gr-lg mb-6">Legal</h3>
                        <ul className="space-y-3 text-gr-base text-gray-400">
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
