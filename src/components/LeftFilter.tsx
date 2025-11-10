'use client'; // Mark as Client Component

import { useState } from 'react';

export default function LeftFilter() {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        category: true,
        price: false,
        rating: false,
        color: false
    });

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
            <>
                <h2 className="text-lg font-semibold mb-4">Filters</h2>

                {/* Category Filter */}
                <div className="mb-2 border-b border-gray-100 pb-2">
                    <button
                        onClick={() => toggleSection('category')}
                        className="w-full flex justify-between items-center py-2 font-medium"
                    >
                        <span>Category</span>
                        <svg
                            className={`w-5 h-5 transform transition-transform ${openSections.category ? 'rotate-0' : 'rotate-180'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div className={`${openSections.category ? 'block' : 'hidden'} pl-2 mt-1 space-y-2`}>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded text-blue-500" />
                            <span>Electronics</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded text-blue-500" />
                            <span>Clothing</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded text-blue-500" />
                            <span>Home & Garden</span>
                        </label>
                    </div>
                </div>

                {/* Price Filter */}
                <div className="mb-2 border-b border-gray-100 pb-2">
                    <button
                        onClick={() => toggleSection('price')}
                        className="w-full flex justify-between items-center py-2 font-medium"
                    >
                        <span>Price Range</span>
                        <svg
                            className={`w-5 h-5 transform transition-transform ${openSections.price ? 'rotate-0' : 'rotate-180'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div className={`${openSections.price ? 'block' : 'hidden'} pl-2 mt-1 space-y-2`}>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded text-blue-500" />
                            <span>$0 - $50</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded text-blue-500" />
                            <span>$50 - $100</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded text-blue-500" />
                            <span>$100+</span>
                        </label>
                    </div>
                </div>

                {/* Add more filter sections as needed */}

            </>
    );
}