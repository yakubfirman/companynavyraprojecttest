import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Helper for active navigation link
    const isActive = (routeName) => route().current(routeName) || route().current(routeName + '.*');

    return (
        <div className="flex h-screen bg-gray-50 font-sans selection:bg-blue-600 selection:text-white overflow-hidden">
            
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside 
                className={`fixed inset-y-0 left-0 z-50 bg-gray-900 text-gray-300 transition-all duration-300 ease-in-out flex flex-col shadow-xl lg:static lg:shadow-none overflow-hidden ${
                    sidebarOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:w-0 lg:-translate-x-full'
                }`}
            >
                {/* Logo Area */}
                <div className="flex items-center justify-center h-16 border-b border-gray-800 shrink-0 whitespace-nowrap overflow-hidden">
                    <Link href="/">
                        <ApplicationLogo className="h-8 brightness-0 invert object-contain" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto whitespace-nowrap">
                    <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Main Menu</p>
                    
                    <Link
                        href={route('dashboard')}
                        className={`flex items-center px-4 py-3 rounded-sm transition-colors ${isActive('dashboard') ? 'bg-blue-600 text-white font-semibold shadow-sm' : 'hover:bg-gray-800 hover:text-white'}`}
                    >
                        <svg className="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        <span>Dashboard</span>
                    </Link>

                    <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-8 mb-4">Content</p>
                    
                    <Link
                        href={route('admin.products.index')}
                        className={`flex items-center px-4 py-3 rounded-sm transition-colors ${isActive('admin.products') ? 'bg-blue-600 text-white font-semibold shadow-sm' : 'hover:bg-gray-800 hover:text-white'}`}
                    >
                        <svg className="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                        <span>Products</span>
                    </Link>
                    
                    <Link
                        href={route('admin.events.index')}
                        className={`flex items-center px-4 py-3 rounded-sm transition-colors ${isActive('admin.events') ? 'bg-blue-600 text-white font-semibold shadow-sm' : 'hover:bg-gray-800 hover:text-white'}`}
                    >
                        <svg className="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span>Events</span>
                    </Link>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-gray-50">
                {/* Top Global Header */}
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-6 z-10 shrink-0 shadow-sm">
                    <div className="flex items-center flex-1 min-w-0 pr-4 space-x-4">
                        <button 
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none p-2 rounded-sm hover:bg-gray-100 transition-colors shrink-0"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>

                        {/* Page specific Header (Integrated into Top Nav for Desktop) */}
                        {header && (
                            <div className="hidden sm:block flex-1 min-w-0">
                                {header}
                            </div>
                        )}
                    </div>

                    {/* Profile Dropdown in Header */}
                    <div className="flex items-center relative shrink-0">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="flex items-center space-x-3 focus:outline-none p-2 rounded-sm hover:bg-gray-50 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                                        {user.name.charAt(0)}
                                    </div>
                                    <span className="hidden md:block text-sm font-medium text-gray-700">{user.name}</span>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </button>
                            </Dropdown.Trigger>

                            <Dropdown.Content align="right" width="48">
                                <Dropdown.Link href={route('profile.edit')}>Profile Settings</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">Log Out</Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </header>

                {/* Mobile Page specific Header */}
                {header && (
                    <div className="sm:hidden bg-white border-b border-gray-200 shrink-0">
                        <div className="px-4 py-4">
                            {header}
                        </div>
                    </div>
                )}

                {/* Scrollable Main Content */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
