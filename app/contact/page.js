import React from 'react';

export default function Contact() {
    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-5 text-center">Contact Us</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter your name</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                 <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">message</label>
                 <input type="desc" id="desc" name="mdesc" className="mt-1 block w-full px-6 py-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                 </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                </button>
            </form>
        </div>
    );

}   





