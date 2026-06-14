import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { motion } from 'framer-motion';

export default function CreateEdit({ event }) {
    const isEdit = !!event;

    // Convert datetime from DB to local datetime-local format if editing
    const formatDateTimeLocal = (dateString) => {
        if (!dateString) return '';
        const d = new Date(dateString);
        // adjust to local timezone string format YYYY-MM-DDThh:mm
        const tzOffset = d.getTimezoneOffset() * 60000;
        return (new Date(d - tzOffset)).toISOString().slice(0, 16);
    };

    const { data, setData, post, put, processing, errors } = useForm({
        title: event?.title || '',
        description: event?.description || '',
        event_date: isEdit ? formatDateTimeLocal(event.event_date) : '',
        location: event?.location || '',
        image: event?.image || '',
        registration_link: event?.registration_link || '',
    });

    const submit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(route('admin.events.update', event.id));
        } else {
            post(route('admin.events.store'));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center space-x-3">
                    <h2 className="font-bold text-2xl text-gray-900 leading-tight">
                        {isEdit ? 'Edit Event' : 'Add New Event'}
                    </h2>
                </div>
            }
        >
            <Head title={isEdit ? 'Edit Event' : 'Add Event'} />

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
                                <InputLabel htmlFor="title" value="Event Title" />
                                <TextInput
                                    id="title"
                                    type="text"
                                    className="mt-1 block w-full"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    required
                                    isFocused
                                />
                                <InputError className="mt-2" message={errors.title} />
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
                                    <InputLabel htmlFor="event_date" value="Date & Time" />
                                    <TextInput
                                        id="event_date"
                                        type="datetime-local"
                                        className="mt-1 block w-full"
                                        value={data.event_date}
                                        onChange={(e) => setData('event_date', e.target.value)}
                                        required
                                    />
                                    <InputError className="mt-2" message={errors.event_date} />
                                </div>
                                <div>
                                    <InputLabel htmlFor="location" value="Location" />
                                    <TextInput
                                        id="location"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.location}
                                        onChange={(e) => setData('location', e.target.value)}
                                        required
                                    />
                                    <InputError className="mt-2" message={errors.location} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <InputLabel htmlFor="image" value="Image URL (Optional)" />
                                    <TextInput
                                        id="image"
                                        type="url"
                                        className="mt-1 block w-full"
                                        value={data.image}
                                        onChange={(e) => setData('image', e.target.value)}
                                    />
                                    <InputError className="mt-2" message={errors.image} />
                                </div>
                                <div>
                                    <InputLabel htmlFor="registration_link" value="Registration Link (Optional)" />
                                    <TextInput
                                        id="registration_link"
                                        type="url"
                                        className="mt-1 block w-full"
                                        value={data.registration_link}
                                        onChange={(e) => setData('registration_link', e.target.value)}
                                    />
                                    <InputError className="mt-2" message={errors.registration_link} />
                                </div>
                            </div>

                            <div className="flex items-center justify-end mt-6 pt-6 border-t border-gray-100 space-x-4">
                                <Link href={route('admin.events.index')} className="text-gray-500 hover:text-gray-800 font-medium text-sm transition-colors">
                                    Cancel
                                </Link>
                                <PrimaryButton disabled={processing} className="flex items-center shadow-sm">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    {isEdit ? 'Update Event' : 'Save Event'}
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </AuthenticatedLayout>
    );
}
