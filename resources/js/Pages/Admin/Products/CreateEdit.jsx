import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { motion } from 'framer-motion';

export default function CreateEdit({ product }) {
    const isEdit = !!product;

    const { data, setData, post, processing, errors } = useForm({
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price || '',
        image: null,
        ...(isEdit ? { _method: 'put' } : {}),
    });

    const submit = (e) => {
        e.preventDefault();
        if (isEdit) {
            post(route('admin.products.update', product.id));
        } else {
            post(route('admin.products.store'));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center space-x-3">
                    <h2 className="font-bold text-2xl text-gray-900 leading-tight">
                        {isEdit ? 'Edit Product' : 'Add New Product'}
                    </h2>
                </div>
            }
        >
            <Head title={isEdit ? 'Edit Product' : 'Add Product'} />

            <div className="py-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-3xl mx-auto sm:px-6 lg:px-8"
                >
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-sm border border-gray-200">
                        <form onSubmit={submit} className="p-6 sm:p-8 space-y-6">
                            <div>
                                <InputLabel htmlFor="name" value="Product Name" />
                                <TextInput
                                    id="name"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    isFocused
                                />
                                <InputError className="mt-2" message={errors.name} />
                            </div>

                            <div>
                                <InputLabel htmlFor="description" value="Description" />
                                <textarea
                                    id="description"
                                    className="mt-1 block w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-sm shadow-sm transition-colors"
                                    rows="4"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    required
                                ></textarea>
                                <InputError className="mt-2" message={errors.description} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <InputLabel htmlFor="price" value="Price ($)" />
                                    <TextInput
                                        id="price"
                                        type="number"
                                        step="0.01"
                                        className="mt-1 block w-full"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                    />
                                    <InputError className="mt-2" message={errors.price} />
                                </div>
                                <div>
                                    <InputLabel htmlFor="image" value="Product Image" />
                                    <input
                                        id="image"
                                        type="file"
                                        accept="image/*"
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors cursor-pointer border border-gray-300 rounded-sm shadow-sm"
                                        onChange={(e) => setData('image', e.target.files[0])}
                                    />
                                    {isEdit && product?.image && (
                                        <div className="mt-2 text-sm text-gray-500">
                                            Current image: <a href={product.image} target="_blank" className="text-blue-600 hover:underline">View Image</a>
                                        </div>
                                    )}
                                    <InputError className="mt-2" message={errors.image} />
                                </div>
                            </div>

                            <div className="flex items-center justify-end mt-6 pt-6 border-t border-gray-100 space-x-4">
                                <Link href={route('admin.products.index')} className="text-gray-500 hover:text-gray-800 font-medium text-sm transition-colors">
                                    Cancel
                                </Link>
                                <PrimaryButton disabled={processing} className="flex items-center shadow-sm">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    {isEdit ? 'Update Product' : 'Save Product'}
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </AuthenticatedLayout>
    );
}
