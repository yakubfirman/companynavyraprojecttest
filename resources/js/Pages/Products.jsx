import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function Products({ products }) {
    return (
        <MainLayout 
            title="Premium Products & Services" 
            description="Explore the top-tier digital products and services from Navyra Studio designed to support your business needs."
        >
            {/* Header */}
            <section className="relative pt-40 pb-24 px-6 text-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/hero-bg.png" alt="Company Office" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900"></div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="inline-block bg-blue-600/20 text-blue-300 font-semibold px-4 py-1.5 rounded-sm mb-6 border border-blue-500/30 text-sm tracking-wide">
                        Our Expertise
                    </div>
                    <h1 className="text-gr-xl md:text-gr-2xl font-bold mb-6 tracking-tight text-white">
                        Premium <span className="text-blue-400">Services</span>
                    </h1>
                    <p className="text-gr-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        A curated catalog of technology solutions designed to accelerate your business growth in the digital landscape.
                    </p>
                </motion.div>
            </section>

            {/* Products Grid */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {products && products.map((product, index) => (
                            <motion.div 
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-200 group"
                            >
                                <div className="h-48 bg-gray-50 flex items-center justify-center relative overflow-hidden border-b border-gray-100">
                                    {product.image ? (
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                    ) : (
                                        <div className="text-gray-400 font-bold text-2xl flex items-center">
                                            <FontAwesomeIcon icon={faBoxOpen} className="mr-3 text-blue-600 opacity-70" />
                                            Navyra<span className="text-blue-600 opacity-70">Pro</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-8 flex-grow flex flex-col bg-white">
                                    <h2 className="text-gr-lg font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h2>
                                    <p className="text-gr-base text-gray-600 mb-6 flex-grow leading-relaxed">{product.description}</p>
                                    <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-100">
                                        <span className="text-gr-md font-bold text-gray-900">
                                            ${product.price}
                                        </span>
                                        <Link href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-sm font-semibold hover:bg-blue-700 transition shadow-sm">
                                            Order Now
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Our Process */}
            <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-sm mb-6 border border-blue-200 text-sm tracking-wide">
                            How We Work
                        </div>
                        <h2 className="text-gr-xl font-bold text-gray-900 mb-4">A Proven Delivery Model</h2>
                        <p className="text-gr-md text-gray-600">Structured phases to ensure your project's success from day one.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Discovery', desc: 'Understanding your business needs and technical requirements deeply.' },
                            { step: '02', title: 'Design', desc: 'Crafting intuitive UI/UX and scalable system architecture.' },
                            { step: '03', title: 'Development', desc: 'Agile sprints with transparent progress and continuous delivery.' },
                            { step: '04', title: 'Deployment', desc: 'Secure launch, performance monitoring, and ongoing support.' }
                        ].map((phase, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-gray-200 relative group hover:-translate-y-2 transition-all duration-300">
                                <div className="text-5xl font-black text-gray-100 absolute top-4 right-4 group-hover:text-blue-50 transition-colors">{phase.step}</div>
                                <div className="relative z-10 pt-8">
                                    <h3 className="text-gr-lg font-bold text-gray-900 mb-3">{phase.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">{phase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA */}
            <section className="py-24 px-6 bg-blue-600 text-white text-center relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-sm blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-10 rounded-sm blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-gr-xl font-bold mb-6">Need a Custom Solution?</h2>
                        <p className="text-gr-md mb-10 text-blue-100 font-medium">
                            We are ready to listen to your specific needs and build a tailor-made product that hits the mark.
                        </p>
                        <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3.5 rounded-sm font-semibold hover:bg-gray-50 transition shadow-md">
                            Get a Free Consultation
                        </Link>
                    </div>
                </motion.div>
            </section>
        </MainLayout>
    );
}
