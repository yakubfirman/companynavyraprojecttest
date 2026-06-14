import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Dashboard() {
    const user = usePage().props.auth.user;
    const currentHour = new Date().getHours();
    
    let greeting = "Good evening";
    if (currentHour < 12) greeting = "Good morning";
    else if (currentHour < 18) greeting = "Good afternoon";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold leading-tight text-gray-900 tracking-tight">
                    Overview
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-6 sm:py-10">
                <motion.div 
                    className="mx-auto max-w-7xl space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Welcome Hero Banner */}
                    <motion.div variants={itemVariants} className="relative overflow-hidden rounded-sm bg-gradient-to-r from-gray-900 to-gray-800 p-8 shadow-lg">
                        <div className="relative z-10">
                            <h1 className="text-3xl font-bold text-white mb-2">
                                {greeting}, {user.name.split(' ')[0]}! <span className="inline-block animate-bounce origin-bottom">👋</span>
                            </h1>
                            <p className="text-gray-300 max-w-xl text-lg">
                                Welcome back to your Navyra Client Portal. Here's a quick summary of what's happening with your projects today.
                            </p>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 text-white opacity-5">
                            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/></svg>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div variants={itemVariants} className="group bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex items-center justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
                            <div>
                                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Active Projects</h3>
                                <p className="text-4xl font-black text-gray-900 tracking-tight">2</p>
                            </div>
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="group bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex items-center justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
                            <div>
                                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Pending Invoices</h3>
                                <p className="text-4xl font-black text-gray-900 tracking-tight">0</p>
                            </div>
                            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-sm flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="group bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex items-center justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
                            <div>
                                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Support Tickets</h3>
                                <p className="text-4xl font-black text-gray-900 tracking-tight">1</p>
                            </div>
                            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-sm flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Main Content Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Table */}
                        <motion.div variants={itemVariants} className="lg:col-span-2 bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
                            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                <h3 className="font-bold text-gray-900 text-lg">Recent Projects</h3>
                                <button className="text-sm text-blue-600 font-semibold hover:text-blue-800 flex items-center transition-colors">
                                    View All
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-white border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider">
                                            <th className="px-6 py-4 font-semibold">Project Name</th>
                                            <th className="px-6 py-4 font-semibold">Status</th>
                                            <th className="px-6 py-4 font-semibold">Deadline</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        <tr className="hover:bg-blue-50/50 transition-colors cursor-pointer group">
                                            <td className="px-6 py-5 font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Corporate Website Revamp</td>
                                            <td className="px-6 py-5">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-bold bg-blue-100 text-blue-800">In Progress</span>
                                            </td>
                                            <td className="px-6 py-5 text-gray-500 text-sm flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                Oct 24, 2026
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-blue-50/50 transition-colors cursor-pointer group">
                                            <td className="px-6 py-5 font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Mobile App UI Design</td>
                                            <td className="px-6 py-5">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-bold bg-green-100 text-green-800">Completed</span>
                                            </td>
                                            <td className="px-6 py-5 text-gray-500 text-sm flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                Sep 10, 2026
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-blue-50/50 transition-colors cursor-pointer group">
                                            <td className="px-6 py-5 font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Cloud Migration Setup</td>
                                            <td className="px-6 py-5">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-bold bg-yellow-100 text-yellow-800">Pending Review</span>
                                            </td>
                                            <td className="px-6 py-5 text-gray-500 text-sm flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                Nov 05, 2026
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Quick Actions */}
                        <motion.div variants={itemVariants} className="bg-white rounded-sm shadow-sm border border-gray-100 flex flex-col">
                            <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                                <h3 className="font-bold text-gray-900 text-lg">Quick Actions</h3>
                            </div>
                            <div className="p-6 flex-1 flex flex-col space-y-4">
                                <button className="w-full flex items-center justify-between p-4 rounded-sm border border-gray-200 hover:border-blue-500 hover:bg-blue-50 group transition-all duration-300">
                                    <div className="flex items-center text-gray-700 group-hover:text-blue-700 font-semibold text-sm transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                                            <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                        </div>
                                        Request New Service
                                    </div>
                                    <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transform translate-x-0 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                                <button className="w-full flex items-center justify-between p-4 rounded-sm border border-gray-200 hover:border-orange-500 hover:bg-orange-50 group transition-all duration-300">
                                    <div className="flex items-center text-gray-700 group-hover:text-orange-700 font-semibold text-sm transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 group-hover:bg-orange-100 transition-colors">
                                            <svg className="w-4 h-4 text-gray-500 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                        </div>
                                        Open Support Ticket
                                    </div>
                                    <svg className="w-4 h-4 text-gray-300 group-hover:text-orange-500 transform translate-x-0 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                                <button className="w-full flex items-center justify-between p-4 rounded-sm border border-gray-200 hover:border-green-500 hover:bg-green-50 group transition-all duration-300">
                                    <div className="flex items-center text-gray-700 group-hover:text-green-700 font-semibold text-sm transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3 group-hover:bg-green-100 transition-colors">
                                            <svg className="w-4 h-4 text-gray-500 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                                        </div>
                                        Billing & Invoices
                                    </div>
                                    <svg className="w-4 h-4 text-gray-300 group-hover:text-green-500 transform translate-x-0 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </AuthenticatedLayout>
    );
}
