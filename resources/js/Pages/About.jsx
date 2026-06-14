import MainLayout from '@/Layouts/MainLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <MainLayout 
            title="About Us" 
            description="Learn more about Navyra Studio's journey, vision, and mission in delivering impactful technology solutions."
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
                        Discover Navyra
                    </div>
                    <h1 className="text-gr-xl md:text-gr-2xl font-bold mb-6 tracking-tight text-white">
                        About <span className="text-blue-400">Us</span>
                    </h1>
                    <p className="text-gr-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Get to know who we are, what we believe in, and how we craft digital excellence.
                    </p>
                </motion.div>
            </section>

            {/* Story */}
            <section className="py-24 px-6 bg-white relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-sm blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-gr-md text-gray-600 leading-relaxed relative z-10"
                >
                    <h2 className="text-gr-xl font-black mb-8 text-gray-900 tracking-tight">Our Journey</h2>
                    <p className="mb-8">
                        Founded in 2026, Navyra Studio was born from a simple vision: to make high-end technology accessible and deliver real, measurable impact for businesses of all scales. We believe that every great idea deserves brilliant digital execution.
                    </p>
                    <p className="mb-8">
                        Our team consists of top-tier software engineers, product designers, and digital strategists who are highly dedicated to delivering their absolute best work. From initial concept to final deployment, we obsess over every pixel and line of code.
                    </p>
                    <div className="flex items-center gap-6 mt-12 pt-12 border-t border-gray-100">
                        <div className="text-center">
                            <span className="block text-4xl font-black text-blue-600">100+</span>
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Projects Delivered</span>
                        </div>
                        <div className="text-center border-l border-gray-200 pl-6">
                            <span className="block text-4xl font-black text-blue-600">50+</span>
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Happy Clients</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Visi Misi */}
            <section className="py-24 px-6 bg-gray-50">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-10 rounded-sm shadow-sm border border-gray-200"
                    >
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-sm flex items-center justify-center mb-6">
                            <FontAwesomeIcon icon={faEye} className="text-2xl" />
                        </div>
                        <h3 className="text-gr-lg font-bold mb-4 text-gray-900">Our Vision</h3>
                        <p className="text-gray-600 text-gr-base leading-relaxed">
                            To become the pioneer of digital solutions in Southeast Asia that consistently prioritizes world-class innovation and user experience.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-blue-600 p-10 rounded-sm text-white shadow-lg relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-sm blur-2xl translate-x-1/3 -translate-y-1/3"></div>
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md text-white rounded-sm flex items-center justify-center mb-6">
                            <FontAwesomeIcon icon={faBullseye} className="text-2xl" />
                        </div>
                        <h3 className="text-gr-lg font-bold mb-6 text-white">Our Mission</h3>
                        <ul className="space-y-4 text-gr-base text-blue-50">
                            <li className="flex items-start">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-300 text-xl mr-3 mt-1 flex-shrink-0" />
                                Build digital products that are intuitive and scalable.
                            </li>
                            <li className="flex items-start">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-300 text-xl mr-3 mt-1 flex-shrink-0" />
                                Provide highly responsive and collaborative client services.
                            </li>
                            <li className="flex items-start">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-blue-300 text-xl mr-3 mt-1 flex-shrink-0" />
                                Nurture and develop the best technology talents.
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-sm mb-6 border border-blue-200 text-sm tracking-wide">
                            Our People
                        </div>
                        <h2 className="text-gr-xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
                        <p className="text-gr-md text-gray-600">The visionaries behind Navyra Studio's success.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {['Firmansyah', 'Sarah Wijaya', 'David Chen'].map((name, idx) => (
                            <div key={idx} className="group text-center">
                                <div className="w-48 h-48 mx-auto bg-gray-100 rounded-sm mb-6 overflow-hidden relative shadow-sm border border-gray-200">
                                    <img src="/hero-bg.png" alt={name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" />
                                </div>
                                <h3 className="text-gr-lg font-bold text-gray-900 mb-1">{name}</h3>
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">{idx === 0 ? 'Founder & CEO' : idx === 1 ? 'Chief Design Officer' : 'Chief Technology Officer'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
