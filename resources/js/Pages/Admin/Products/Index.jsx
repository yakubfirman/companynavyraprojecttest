import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { motion, AnimatePresence } from 'framer-motion';

export default function Index({ products, flash }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            destroy(route('admin.products.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-bold text-2xl text-gray-900 leading-tight">Products</h2>
            }
        >
            <Head title="Products" />

            <div className="py-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"
                >
                    <AnimatePresence>
                        {flash?.success && (
                            <motion.div 
                                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-green-50 border-l-4 border-green-500 p-4 rounded-sm shadow-sm flex items-start"
                            >
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-green-700 font-medium">{flash.success}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-sm border border-gray-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white">
                            <h3 className="font-bold text-gray-900 text-lg">Product List</h3>
                            <Link href={route('admin.products.create')}>
                                <PrimaryButton className="shadow-sm hover:shadow-md transition-shadow text-xs py-2 px-4">
                                    + New Product
                                </PrimaryButton>
                            </Link>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100 text-sm text-gray-500 uppercase tracking-wide">
                                        <th className="px-6 py-4 font-semibold">Image</th>
                                        <th className="px-6 py-4 font-semibold">Name</th>
                                        <th className="px-6 py-4 font-semibold">Price</th>
                                        <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <motion.tbody 
                                    className="divide-y divide-gray-100"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                                    }}
                                >
                                    {products.map(product => (
                                        <motion.tr 
                                            key={product.id} 
                                            className="hover:bg-blue-50/50 transition-colors group"
                                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                        >
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                {product.image ? (
                                                    <img src={product.image} alt={product.name} className="w-14 h-14 object-cover rounded-sm border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow" />
                                                ) : (
                                                    <div className="w-14 h-14 bg-gray-50 rounded-sm border border-gray-100 flex items-center justify-center text-xs text-gray-400">No Img</div>
                                                )}
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{product.name}</div>
                                                <div className="text-sm text-gray-500 truncate max-w-xs mt-1">{product.description}</div>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-bold bg-green-100 text-green-800">
                                                    ${Number(product.price).toFixed(2)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                                                <Link href={route('admin.products.edit', product.id)} className="inline-flex items-center text-blue-600 hover:text-blue-900 mr-4 p-2 hover:bg-blue-100 rounded-full transition-colors" title="Edit">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                                </Link>
                                                <button onClick={() => handleDelete(product.id)} className="inline-flex items-center text-red-600 hover:text-red-900 p-2 hover:bg-red-100 rounded-full transition-colors" title="Delete">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                </button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                    {products.length === 0 && (
                                        <tr>
                                            <td colSpan="4" className="px-10 py-16 text-center">
                                                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                </svg>
                                                <h3 className="text-sm font-medium text-gray-900">No products</h3>
                                                <p className="mt-1 text-sm text-gray-500">Get started by creating a new product.</p>
                                            </td>
                                        </tr>
                                    )}
                                </motion.tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AuthenticatedLayout>
    );
}
