import { PrinterIcon, QueueListIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function CardData({ data: { } }) {
    return (
        <div className='py-2'>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-1">
                {/* Product cards would go here */}
                <div className="bg-white p-4 rounded-lg shadow">
                    <div className=" bg-gray-200 mb-3 rounded grid grid-cols-2">
                        <div className='p-2'>
                            <div className='mb-1'>Order number: <span className='font-bold'>12345-2062083</span></div>
                            <div className='mb-1'>Order placed: <span className='font-bold'>07/03/2025</span></div>
                        </div>
                        <div className='text-right p-2'>
                            <div className='mb-2'>Order Total: <span className='font-bold'>$18.00</span></div>
                            <div className='mb-2 text-blue-400'>Item Ordered: <span className='font-bold'>3</span></div>
                        </div>
                    </div>
                    <div className=" bg-gray-200 mb-3 rounded grid grid-cols-2">
                        <div className='p-2'>
                            <div className='mb-2'>Name: <br />
                                <span className='font-bold'>Alex Morgan</span>
                            </div>
                            <div className='mb-2'>Organization Name: <br />
                                <span className='font-bold'>Burbank Harry E.Fry Elmentary School</span>
                            </div>
                            <div className='mb-2'>Delivery Mode: <br />
                                <span className='font-bold'>Pick up</span>
                            </div>
                            <div className='mb-2'>Meal Period: <br />
                                <span className='font-bold'>Dinner</span>
                            </div>
                            <div className='mb-2'>Pick up time slot: <br />
                                <span className='font-bold'>04:40 PM - 05:00 PM</span>
                            </div>
                            <div className='mb-2'>Delivery Date: <br />
                                <span className='font-bold'>07/11/2025</span>
                            </div>
                            <div className='mb-2'>Pick up/Delivery area: <br />
                                <span className='font-bold'>Loby</span>
                            </div>

                        </div>
                        <div className='text-right p-2'>
                            <div className='mb-2'>Payment Status: <span className='font-bold'>Not Paid</span></div>
                            <div className='mb-2'>Order Status: <span className='font-bold text-blue-400'>Ordered</span></div>
                            <div className='mb-2 flex justify-end'>
                                <button className="flex items-center gap-1 rounded-full bg-black/90 hover:bg-blue-600 text-white px-4 py-1 transition-colors">
                                    <PrinterIcon className="w-4 h-4" />
                                    <span>Invoice</span>
                                </button>
                            </div>
                        </div>
                        {/* Button positioned at bottom-right */}
                        <div className="absolute right-10 bottom-35 grid grid-cols-3 gap-2">
                            <button className="flex items-center gap-1 rounded-full  hover:bg-blue-600 text-white  py-1 transition-colors">
                                <QueueListIcon className="w-4 h-4" />
                            </button>
                            <button className="flex items-center gap-1 rounded-full bg-gray-600 hover:bg-blue-600 text-white px-4 py-1 transition-colors">
                                <span>Cancel Order</span>
                            </button>
                            <button className="flex items-center gap-1 rounded-full bg-orange-800 hover:bg-blue-600 text-white px-4 py-1 transition-colors">
                                <PrinterIcon className="w-4 h-4" />
                                <span>Edit Order</span>
                            </button>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
