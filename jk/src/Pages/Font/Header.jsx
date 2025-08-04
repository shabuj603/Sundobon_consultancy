
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';



    const Header = () => {
            const [isOpen, setIsOpen] = useState(false);
            const [megaOpen, setMegaOpen] = useState(false);
        return (
            <>
            <div className='w-full bg-yellow-600'> top nav bar </div>
            <nav className="bg-white shadow-lg shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href=""><span className="text-xl font-bold text-blue-600"><span className='text-yellow-600 text-2x1 '> JK</span > <span className='text-blue-600'>Consultancy</span></span></a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#" className="hover:text-blue-500">Home</a>
                            <a href="#" className="hover:text-blue-500">About</a>

                            <div
                                className="relative"
                                onMouseEnter={() => setMegaOpen(true)}
                                onMouseLeave={() => setMegaOpen(false)}
                            >
                                <button className="hover:text-blue-500">Services</button>
                                {megaOpen && (
                                    <div className="absolute right-0 top-full bg-white p-6 shadow-xl w-[800px] grid grid-cols-3 gap-4 z-50">
                                        <div>
                                            <h4 className="font-bold mb-2">ENTITY FORMATION</h4>
                                            <ul>
                                                <li><a href="#" className="text-sm hover:text-blue-500">PRIVATE LIMITED COMPANY</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">PUBLIC LIMITED COMPANY</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">JOINT VENTURE INCORPORATION</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">LIAISON OFFICE </a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">BRANCH OFFICE</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">PUBLIC LIMITED COMPANY</a></li>
                                            </ul>
                                        </div>
                                           <div>
                                            <h4 className="font-bold mb-2">LICENSING</h4>
                                            <ul>
                                                <li><a href="#" className="text-sm hover:text-blue-500">TRADE LICENSE</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">TAX ID (TIN)</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">VAT REGISTRATION</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">IMPORT REGISTRATION CERTIFICATE</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">FACTORY/ESTABLISHMENT REGISTRATION</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">EXPORT REGISTRATION CERTIFICATE</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">FIRE LICENSE</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">ENVIRONMENTAL CLEARANCE CERTIFICATE</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-2">LEGAL</h4>
                                            <ul>
                                                <li><a href="#" className="text-sm hover:text-blue-500">ARBITRATION</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">BANKING & FINANCE</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">CRIMINAL LITIGATION</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">INSURANCE</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">SEXUAL HARASSMENT</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">LAND VETTING</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500"> EMPLOYMENT</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500"> REGULATORY COMPLIANCE</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">BRIBERY & ANTI-BRIBERY</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">AVIATION</a></li>
                                           
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-2">LICENSING</h4>
                                            <ul>
                                                <li><a href="#" className="text-sm hover:text-blue-500">TRADE LICENSE</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">TAX ID (TIN)</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">VAT REGISTRATION</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">IMPORT REGISTRATION CERTIFICATE</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">FACTORY/ESTABLISHMENT REGISTRATION</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">EXPORT REGISTRATION CERTIFICATE</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">FIRE LICENSE</a></li>
                                                <li><a href="#" className="text-sm hover:text-blue-500">ENVIRONMENTAL CLEARANCE CERTIFICATE</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="hover:text-blue-500">Contact</a>
                            <button className='bg-yellow-400 p-3 rounded-sm'><a href="" className="hover:text-white">Login</a></button>
                             <button className='' ><a href="" className="hover:text-white hover:bg-blue-600 p-3 rounded-sm">Sign Up</a></button>

                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden px-4 pb-4">
                        <a href="#" className="block py-2">Home</a>
                        <a href="#" className="block py-2">About</a>
                        <div className="py-2">
                            <span className="block font-semibold">Services</span>
                            <div className="pl-4 text-sm text-gray-600">
                                <a href="#" className="block py-1">React Development</a>
                                <a href="#" className="block py-1">Next.js Apps</a>
                                <a href="#" className="block py-1">UI/UX Design</a>
                                <a href="#" className="block py-1">SEO</a>
                            </div>                           
                        </div>
                        
                        
                        <a href="#" className="block py-2">Contact</a>
                    </div>
                )}
            </nav>
            </>
        );
    };

export default Header