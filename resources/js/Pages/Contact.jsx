import MainLayout from '@/Layouts/MainLayout';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faPaperPlane, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulation
        setStatus('Message sent successfully! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <MainLayout 
            title="Contact Us" 
            description="Have questions or want to collaborate? Reach out to the Navyra Studio team today."
        >
            {/* Header */}
            <section className="relative pt-40 pb-24 px-6 text-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/hero-bg.png" alt="Company Office" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900"></div>
                </div>
                <div className="relative z-10">
                    <div className="inline-block bg-blue-600/20 text-blue-300 font-semibold px-4 py-1.5 rounded-sm mb-6 border border-blue-500/30 text-sm tracking-wide">
                        Let's Connect
                    </div>
                    <h1 className="text-gr-xl md:text-gr-2xl font-bold mb-6 tracking-tight text-white">
                        Get in <span className="text-blue-400">Touch</span>
                    </h1>
                    <p className="text-gr-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to start your next big project? We are here to listen and help you achieve your goals.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Form */}
                    <div className="bg-white p-10 rounded-sm border border-gray-200 shadow-sm">
                        <h2 className="text-gr-xl font-bold mb-8 text-gray-900">Send a Message</h2>
                        {status && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-sm font-semibold flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="mr-3 text-green-500" /> {status}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
                                <input 
                                    type="text" 
                                    required 
                                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-gray-50 focus:bg-white"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address</label>
                                <input 
                                    type="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none bg-gray-50 focus:bg-white"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                                <textarea 
                                    required 
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none bg-gray-50 focus:bg-white"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-3.5 rounded-sm font-semibold hover:bg-blue-700 transition shadow-sm flex items-center justify-center">
                                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Send Message
                            </button>
                        </form>
                    </div>

                    {/* Info & Map */}
                    <div className="flex flex-col justify-between space-y-12">
                        <div>
                            <h2 className="text-gr-xl font-bold mb-10 tracking-tight text-gray-900">Contact Info</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="font-bold text-gr-lg text-gray-900 mb-1">Email</h4>
                                        <p className="text-gray-600 text-gr-base">hello@navyrastudio.smartsense.my.id</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="font-bold text-gr-lg text-gray-900 mb-1">Phone</h4>
                                        <p className="text-gray-600 text-gr-base">+62 812 3456 7890</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="font-bold text-gr-lg text-gray-900 mb-1">Headquarters</h4>
                                        <p className="text-gray-600 text-gr-base">Jl. Jend. Sudirman No. 123,<br/>South Jakarta, 12190</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="h-80 bg-gray-100 rounded-sm overflow-hidden relative shadow-sm border border-gray-200">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24009384587!2d106.74104253163158!3d-6.229740134442654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5e82dd4b820!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
