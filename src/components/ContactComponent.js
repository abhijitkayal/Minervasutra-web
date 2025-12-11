// src/components/ContactComponent.js
'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Heart, ArrowRight } from 'lucide-react';

export default function ContactComponent() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        companySize: 'Select Size',
        message: '',
    });
    const [status, setStatus] = useState(''); // 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simple client-side validation
        if (!formData.fullName || !formData.email || !formData.message) {
            setStatus('error');
            alert('Please fill in all required fields (Name, Email, Message).');
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ // Clear form on success
                    fullName: '', email: '', company: '',
                    companySize: 'Select Size', message: ''
                });
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Server failed to send email.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            alert(`Error: ${error.message}. Please try again.`);
        }
    };

    const isSubmitting = status === 'loading';

    // Data from the provided design image (image_703f22.jpg)
    const contactInfo = [
        { icon: Mail, title: 'Email', detail: 'info@hrflow.com', subtext: 'Drop us a line anytime' },
        { icon: Phone, title: 'Phone', detail: '+1 (555) 123-4567', subtext: 'Mon-Fri, 9am-6pm EST' },
        { icon: MapPin, title: 'Office', detail: '123 Innovation Drive', subtext: 'San Francisco, CA 94102' },
        { icon: Clock, title: 'Hours', detail: '9:00 AM - 6:00 PM', subtext: 'Pacific Standard Time' },
    ];


    return (
        <div className="min-h-screen bg-white">

            {/* Header Section */}
            <div className="pt-32 pb-16 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Visual element "We'd love to hear from you" */}
                <div className="inline-flex items-center text-sm font-semibold text-fuchsia-600 mb-2">
                    <Heart className="w-4 h-4 mr-2" />
                    We'd love to hear from you
                </div>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
                    Get in <span className="text-fuchsia-600">Touch</span>
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                    Have questions about HRFlow? Want to schedule a demo? Our team is here to help.
                </p>
            </div>

            {/* Main Content Grid (Form + Info) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* --- 1. Contact Form --- */}
                    <div className="lg:col-span-1 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>

                        {status === 'success' ? (
                            <div className="p-4 text-green-700 bg-green-100 rounded-lg text-center font-semibold">
                                Message Sent Successfully! We will respond within 24 hours.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Full Name */}
                                    <label className="block">
                                        <span className="text-gray-700 font-medium">Full Name <span className="text-red-500">*</span></span>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </label>
                                    {/* Email */}
                                    <label className="block">
                                        <span className="text-gray-700 font-medium">Email <span className="text-red-500">*</span></span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Company */}
                                    <label className="block">
                                        <span className="text-gray-700 font-medium">Company</span>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                                            placeholder="Acme Inc."
                                        />
                                    </label>
                                    {/* Company Size */}
                                    <label className="block">
                                        <span className="text-gray-700 font-medium">Company Size</span>
                                        <select
                                            name="companySize"
                                            value={formData.companySize}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                                        >
                                            <option>Select Size</option>
                                            <option>1-50 employees</option>
                                            <option>51-200 employees</option>
                                            <option>201-1000 employees</option>
                                            <option>1000+ employees</option>
                                        </select>
                                    </label>
                                </div>

                                {/* Message */}
                                <label className="block">
                                    <span className="text-gray-700 font-medium">Message <span className="text-red-500">*</span></span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3 focus:ring-fuchsia-500 focus:border-fuchsia-500"
                                        placeholder="Tell us how we can help..."
                                        required
                                    ></textarea>
                                </label>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 text-lg font-semibold rounded-lg text-white transition duration-200 ${isSubmitting
                                            ? 'bg-fuchsia-400 cursor-not-allowed'
                                            : 'bg-fuchsia-600 hover:bg-fuchsia-700 shadow-lg'
                                        }`}
                                >
                                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                                </button>

                                {status === 'error' && (
                                    <p className="text-sm text-red-500 mt-2">
                                        There was an error sending your message. Please check the console or try again later.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>

                    {/* --- 2. Contact Information and Map --- */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Contact Details */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                            <p className="text-gray-600 mb-6">
                                Reach out through any of these channels and we'll respond within 24 hours.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="p-4 bg-gray-50 rounded-lg flex items-start space-x-3">
                                        <item.icon className="w-5 h-5 text-fuchsia-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                                            <p className="text-base text-fuchsia-600">{item.detail}</p>
                                            <p className="text-xs text-gray-500 mt-1">{item.subtext}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div>
                            <div className="h-64 bg-gray-200 rounded-xl overflow-hidden relative">
                                {/* This is where a Google Map or similar embed would go */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                                    <MapPin className="w-8 h-8 mb-2" />
                                    <p>Map Placeholder</p>
                                    <p className="text-sm">123 Innovation Drive, San Francisco, CA 94102</p>
                                </div>
                            </div>
                        </div>

                        {/* Looking for something specific? */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Looking for something specific?</h3>
                            <ul className="space-y-2 text-sm text-fuchsia-600 font-medium">
                                <li className="flex items-center">
                                    <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> Visit our Help Center
                                </li>
                                <li className="flex items-center">
                                    <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> Check System Status
                                </li>
                                <li className="flex items-center">
                                    <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> Read Documentation
                                </li>
                                <li className="flex items-center">
                                    <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" /> API Reference
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}