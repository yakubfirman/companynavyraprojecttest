import MainLayout from '@/Layouts/MainLayout';
import { Link, Head } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faArrowRight, faHashtag, faQuoteLeft, faCheckCircle, faGlobe, faMobileScreen, faLaptopCode, faHeadset, faComments, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function Home({ products, events }) {
    const faqs = [
        {
            question: "What services does Navyra Studio offer?",
            answer: "We provide a comprehensive suite of digital solutions including enterprise software development, modern web applications, mobile app development, UI/UX design, and digital transformation consulting."
        },
        {
            question: "How long does it take to complete a project?",
            answer: "Project timelines vary depending on complexity and scope. A standard corporate website might take 2-4 weeks, while a full-scale enterprise web application can take 3-6 months. We utilize agile methodology to deliver MVPs quickly."
        },
        {
            question: "Do you provide post-launch maintenance and support?",
            answer: "Yes! We offer 24/7 dedicated support, SLA-backed maintenance, security updates, and performance optimization to ensure your digital products run flawlessly post-launch."
        },
        {
            question: "What technologies do you specialize in?",
            answer: "Our core stack includes Laravel, React, Next.js, Node.js, and Tailwind CSS. We also specialize in cloud infrastructure deployment on AWS and Google Cloud for highly scalable architectures."
        }
    ];

    return (
        <MainLayout 
            title="Innovative Digital Solutions" 
            description="Navyra Studio provides top-tier digital technology solutions. Explore our latest products, services, and events."
        >
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })}
                </script>
            </Head>
            {/* Professional Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/hero-bg.png" alt="Company Office" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full px-6 text-center md:text-left">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <div className="inline-block bg-blue-600/20 text-blue-100 backdrop-blur-sm border border-blue-400/30 font-semibold px-5 py-2 rounded-sm mb-6 text-sm tracking-wide">
                            Top-Tier Digital Agency
                        </div>
                        <h1 className="text-gr-xl md:text-gr-2xl font-bold leading-tight mb-6 text-white">
                            Transforming Ideas Into <span className="text-blue-400">Digital Reality</span>
                        </h1>
                        <p className="text-gr-md text-gray-200 mb-10 leading-relaxed font-light">
                            We provide comprehensive technology solutions for businesses looking to scale, innovate, and dominate their industry.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link href="/products" className="bg-blue-600 text-white px-8 py-3.5 rounded-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                                Discover Our Services
                            </Link>
                            <Link href="/contact" className="bg-white/10 text-white backdrop-blur-sm border border-white/20 px-8 py-3.5 rounded-sm font-semibold hover:bg-white/20 transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trusted By */}
            <section className="py-12 border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by innovative companies</p>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-2xl font-black text-gray-800">TechIndo.</span>
                        <span className="text-2xl font-bold text-gray-800">Global<span className="text-blue-600">Net</span></span>
                        <span className="text-2xl font-black text-gray-800 tracking-tighter">NEXA</span>
                        <span className="text-2xl font-semibold text-gray-800">Smart<span className="font-light">Sense</span></span>
                        <span className="text-2xl font-black text-gray-800 italic">Vortex</span>
                    </div>
                </div>
            </section>

            {/* Professional Services Section */}
            <section className="py-32 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-sm mb-6 border border-blue-200 text-sm tracking-wide">
                            What We Do
                        </div>
                        <h2 className="text-gr-xl font-bold text-gray-900 mb-6">Core Competencies</h2>
                        <p className="text-gr-md text-gray-600 leading-relaxed">We deliver scalable, secure, and intuitive digital products tailored to your unique corporate requirements. From web apps to enterprise systems.</p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products && products.map((product, index) => {
                            const icons = [faLaptopCode, faMobileScreen, faGlobe, faRocket, faComments, faHeadset];
                            return (
                                <motion.div 
                                    key={product.id} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white p-10 rounded-sm border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-sm blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="w-16 h-16 bg-gray-50 text-blue-600 rounded-sm flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm relative z-10">
                                        <FontAwesomeIcon icon={icons[index % icons.length]} className="text-2xl" />
                                    </div>
                                    <h3 className="text-gr-lg font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors relative z-10">{product.name}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-8 text-gr-base relative z-10">{product.description}</p>
                                    <Link href="/products" className="text-gray-900 font-bold text-sm inline-flex items-center group-hover:text-blue-600 transition-colors relative z-10">
                                        Explore Solution <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs transition-transform group-hover:translate-x-2" />
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-sm mb-6 border border-blue-200 text-sm tracking-wide">
                            Why Choose Us
                        </div>
                        <h2 className="text-gr-xl font-bold text-gray-900 mb-6">Built for Excellence, Designed for Impact</h2>
                        <p className="text-gr-md text-gray-600 leading-relaxed mb-8">
                            We don't just build software; we build robust digital ecosystems that drive real business value. Our approach combines strategic thinking with cutting-edge technology.
                        </p>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-sm flex items-center justify-center mr-4 shrink-0">
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Agile Methodology</h4>
                                    <p className="text-gray-600 text-sm">We adapt quickly to changing requirements, ensuring fast delivery without compromising quality.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-sm flex items-center justify-center mr-4 shrink-0">
                                    <FontAwesomeIcon icon={faLaptopCode} className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">Modern Tech Stack</h4>
                                    <p className="text-gray-600 text-sm">Utilizing the latest frameworks and cloud infrastructure for maximum performance and security.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-sm overflow-hidden bg-gray-100 relative">
                            <img src="/hero-bg.png" alt="Our Team" className="w-full h-full object-cover grayscale opacity-80" />
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-sm shadow-xl border border-gray-100 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-blue-600 rounded-sm flex items-center justify-center text-white">
                                    <FontAwesomeIcon icon={faRocket} className="text-2xl" />
                                </div>
                                <div>
                                    <div className="text-gr-lg font-black text-gray-900">10x</div>
                                    <div className="text-gray-500 font-medium text-sm">Faster Delivery</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 px-6 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-white opacity-10 rounded-sm blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-black opacity-10 rounded-sm blur-3xl translate-y-1/2 -translate-x-1/4"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-blue-500/50">
                        <div className="px-4">
                            <div className="text-gr-2xl font-black mb-2">150<span className="text-blue-300">+</span></div>
                            <div className="text-blue-100 font-medium text-gr-base">Projects Delivered</div>
                        </div>
                        <div className="px-4">
                            <div className="text-gr-2xl font-black mb-2">98<span className="text-blue-300">%</span></div>
                            <div className="text-blue-100 font-medium text-gr-base">Client Satisfaction</div>
                        </div>
                        <div className="px-4">
                            <div className="text-gr-2xl font-black mb-2">5<span className="text-blue-300">+</span></div>
                            <div className="text-blue-100 font-medium text-gr-base">Years Experience</div>
                        </div>
                        <div className="px-4 border-transparent md:border-blue-500/50">
                            <div className="text-gr-2xl font-black mb-2">24<span className="text-blue-300">/7</span></div>
                            <div className="text-blue-100 font-medium text-gr-base">Support Available</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Testimonials */}
            <section className="py-20 px-6 bg-white relative overflow-hidden">
                <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-4 left-4 md:top-10 md:left-10 text-gray-50 text-[10rem] md:text-[14rem] -z-0 transform -rotate-12 opacity-50" />
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center relative z-10"
                >
                    <div className="mb-8 flex justify-center">
                        <div className="flex gap-1 text-yellow-400 text-lg">
                            {[1, 2, 3, 4, 5].map(star => <span key={star}>★</span>)}
                        </div>
                    </div>
                    <p className="text-base md:text-gr-lg font-medium leading-relaxed text-gray-800 mb-10">
                        "Navyra Studio demonstrated exceptional professionalism and technical expertise. They delivered our enterprise software ahead of schedule with flawless execution. Their attention to detail and proactive communication made them the perfect technology partner."
                    </p>
                    <div className="inline-flex items-center text-left bg-gray-50 pr-6 rounded-sm border border-gray-100 shadow-sm p-1.5">
                        <div className="w-12 h-12 bg-white rounded-sm mr-4 overflow-hidden border border-gray-200 shadow-sm">
                            <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">BS</div>
                        </div>
                        <div>
                            <div className="font-bold text-sm text-gray-900">Budi Santoso</div>
                            <div className="text-gray-500 text-xs">CEO, TechIndo</div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-sm mb-6 border border-blue-200 text-sm tracking-wide">
                            Knowledge Base
                        </div>
                        <h2 className="text-gr-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gr-md text-gray-600">Everything you need to know about partnering with Navyra Studio.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.details 
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group bg-gray-50 border border-gray-200 rounded-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                            >
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-bold text-gray-900 hover:text-blue-600 transition-colors">
                                    <h3 className="text-gr-base md:text-gr-lg">{faq.question}</h3>
                                    <span className="shrink-0 rounded-sm bg-white p-1.5 text-gray-900 border border-gray-200 shadow-sm group-open:-rotate-180 transition-transform duration-300">
                                        <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 pt-0 leading-relaxed text-gray-600 text-sm md:text-gr-base">
                                    {faq.answer}
                                </div>
                            </motion.details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Events */}
            <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <div className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-sm mb-6 border border-blue-200 text-sm tracking-wide">
                                Community & Learning
                            </div>
                            <h2 className="text-gr-xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                            <p className="text-gr-md text-gray-600">Join our exclusive sessions and connect with industry leaders.</p>
                        </div>
                        <Link href="/events" className="hidden md:inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition">
                            View All Events <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {events && events.slice(0, 2).map((event, index) => (
                            <motion.div 
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-sm p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all group flex gap-8 items-center"
                            >
                                <div className="w-24 h-24 bg-blue-50 rounded-sm flex flex-col items-center justify-center shrink-0 border border-blue-100">
                                    <span className="text-blue-600 font-black text-2xl">{new Date(event.event_date).getDate()}</span>
                                    <span className="text-blue-400 font-bold text-xs uppercase mt-1">{new Date(event.event_date).toLocaleString('en-US', { month: 'short' })}</span>
                                </div>
                                <div>
                                    <h3 className="text-gr-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{event.description}</p>
                                    <Link href="/events" className="text-sm font-bold text-blue-600 group-hover:text-blue-800">Learn More &rarr;</Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10 text-center md:hidden">
                        <Link href="/events" className="inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition">
                            View All Events <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-28 px-6 bg-gray-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-10 object-cover mix-blend-overlay"></div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-gr-xl font-bold text-white mb-6">Ready to Elevate Your Digital Presence?</h2>
                    <p className="text-gr-md text-gray-400 mb-10 leading-relaxed">
                        Let's discuss how Navyra Studio can help you build scalable and impactful technology solutions for your business.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-sm font-bold hover:bg-blue-500 transition shadow-lg shadow-blue-600/30">
                        Start a Conversation <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
                    </Link>
                </div>
            </section>
        </MainLayout>
    );
}
