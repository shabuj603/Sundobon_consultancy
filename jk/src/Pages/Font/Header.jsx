
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, X } from 'lucide-react';



    const Header = () => {
            const [isOpen, setIsOpen] = useState(false);
            const [megaOpen, setMegaOpen] = useState(false);
        return (
            <>
            <div className='w-full bg-yellow-600 z-index-50'> 
                <div className='grid grid-cols-3 py-2 text-white'>
                    <div className='px-5 text-center'>Are you ready to grow up your business? Contact Us</div>
                    <div className=' px-5 text-center '><i className="fa-solid fa-envelope pr-3 "></i>info.jkconsultancy603@gmail.com</div>
                    <div className=' px-5 text-center'><i className="fa-solid fa-phone pr-3 text-lg"></i>(+88 ) 0139774753</div>
                  
                    </div>    
             </div>
            <nav className="bg-white border-b border-gray shadow-lg shadow-2xl top-0 sticky">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/"><span className="text-xl font-bold text-blue-600"><span className='text-yellow-600 text-2x1 '> Sundarbon</span > <span className='text-blue-600'>C.</span></span></Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-6">
                            <Link to="/" className="hover:text-blue-500">Home</Link>
                            <Link to="/about" className="hover:text-blue-500">About</Link>

                            <div
                                className="relative"
                                onMouseEnter={() => setMegaOpen(true)}
                                onMouseLeave={() => setMegaOpen(false)}
                            >
                                <button className="hover:text-blue-500 relative">Services</button>
                                {megaOpen && (
                                    <div className="absolute left-20 right-10 top-full bg-white p-6 shadow-xl w-[800px] grid grid-cols-3 gap-4 z-50">
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

                            <Link to="/contract" className="hover:text-blue-500">Contact</Link>
                            <Link to="/contract" className="hover:text-blue-500"></Link>
                            <button className='bg-blue-800 p-3 rounded-sm text-white'><Link to="/login" className="hover:text-white">Career</Link></button>


                            <button className='bg-yellow-400 p-3 rounded-sm'><Link to="/login" className="hover:text-white">Login</Link></button>
                             <button className='' ><Link to="/signup" className="hover:text-white hover:bg-blue-600 p-3 rounded-sm">Sign Up</Link></button>
                             <input type="search" placeholder='search' className='rounded-lg'/>

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

export default Header;