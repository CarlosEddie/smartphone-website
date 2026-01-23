import { useState } from "react";

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">   
                <button className="md:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>☰</button>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#design" className="hover:text-gray-300">Design</a>
                    <a href="#performance" className="hover:text-gray-300">Performance</a>
                    <a href="#camera" className="hover:text-gray-300">Camera</a>
                    <a href="#colors" className="hover:text-gray-300">Colors</a>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer hover:scale-105 transition-all duration-300 px-12 py-4 rounded-full">Buy</button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black/90 px-6 py-4 flex flex-col gap-4">
                    <a href="#design" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Design</a>
                    <a href="#performance" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Performance</a>
                    <a href="#camera" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Camera</a>
                    <a href="#colors" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Colors</a>
                </div>
            )}
        </nav>
    )
}

export default NavBar;