import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Events({ events }) {
    return (
        <MainLayout 
            title="Latest Events & Activities" 
            description="Stay updated with the latest events, seminars, and activities hosted by Navyra Studio."
        >
            {/* Header */}
            <section className="relative pt-40 pb-24 px-6 text-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/hero-bg.png" alt="Company Office" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900"></div>
                </div>
                <div className="relative z-10">
                    <div className="inline-block bg-blue-600/20 text-blue-300 font-semibold px-4 py-1.5 rounded-sm mb-6 border border-blue-500/30 text-sm tracking-wide">
                        Upcoming Events
                    </div>
                    <h1 className="text-gr-xl md:text-gr-2xl font-bold mb-6 tracking-tight text-white">
                        Navyra <span className="text-blue-400">Events</span>
                    </h1>
                    <p className="text-gr-md text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Join our exclusive webinars, tech meetups, and workshops designed for digital innovators.
                    </p>
                </div>
            </section>

            {/* Events List */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto space-y-12">
                    {events && events.map(event => (
                        <div key={event.id} className="bg-white rounded-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col md:flex-row border border-gray-200 group">
                            <div className="md:w-1/3 bg-gray-50 flex flex-col items-center justify-center p-10 border-r border-gray-100">
                                <span className="text-blue-600 font-bold text-gr-2xl">{new Date(event.event_date).getDate()}</span>
                                <span className="text-gray-500 font-semibold text-gr-base uppercase tracking-wider mt-2">{new Date(event.event_date).toLocaleString('en-US', { month: 'short', year: 'numeric' })}</span>
                            </div>
                            <div className="p-10 md:w-2/3 flex flex-col justify-center bg-white">
                                <h3 className="text-gr-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                                <div className="text-gray-500 mb-6 flex items-center space-x-6 text-sm font-semibold">
                                    <span className="flex items-center">
                                        <FontAwesomeIcon icon={faClock} className="mr-2 text-blue-600" />
                                        {new Date(event.event_date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                    <span className="flex items-center">
                                        <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-blue-600" />
                                        {event.location}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-8 leading-relaxed text-gr-base">{event.description}</p>
                                <div>
                                    <Link href="/contact" className="inline-block bg-white text-blue-600 border border-blue-600 px-6 py-2.5 rounded-sm font-semibold hover:bg-blue-50 transition">
                                        Register Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Newsletter */}
            <section className="py-24 px-6 bg-gray-900 text-white border-t border-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-gr-xl font-bold mb-6">Never Miss an Update</h2>
                    <p className="text-gr-md text-gray-400 mb-10 leading-relaxed">
                        Subscribe to our newsletter to receive the latest news about our upcoming events, webinars, and tech insights directly to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="w-full sm:w-2/3 px-6 py-4 rounded-sm border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                        />
                        <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-sm font-bold hover:bg-blue-700 transition whitespace-nowrap">
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </section>
        </MainLayout>
    );
}
