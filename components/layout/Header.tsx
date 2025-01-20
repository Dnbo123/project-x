import Link from "next/link"
import { Search } from "lucide-react";

const accomodationTypes = [
    "Rooms",
    "Apartments",
    "CountrySide",
    "Beach Houses",
    "Luxury villas",
    "Apartments",
];

const Header: React.FC = () => {
    return(
        <header className="sticky top-0 z-50 shadow-sm bg-gradient-to-r from-baby-blue to-white text-black p-4">
            <div className="container mx-auto px-4">
                
                {/* Top section */}  
           <div>
             {/* Logo */}
             <Link href="/" className="text-2xl font-bold text-primary flex items-start">
             X-BnB
             </Link>

             {/* Search bar */}
             <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8 ">
              <div className="relative flex-1 px-4 py-1 ">
                <input 
                type="text"
                placeholder="Search properties"
                className="w-full px-6 py-3 mb-4 mt-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary" />
                
                <Search className="absolute right-9 top-1/3 transform -translate-y-1/3 text-gray-400" />
                </div>  
             </div>

             {/* Auth buttons */}
             <div className="flex items-center space-x-20">
                <div className="absolute top-2 right-14">
              <button className="bg-primary rounded-full text-gray-500 text-sm px-12 shadow-sm transform transition duration-300 hover:scale-90 hover:shadow-sm hover:text-black">
                    Sign Up
                    </button>
              </div>

                <div className="absolute top-2 right-4"> 
            <button className="bg-primary rounded-full text-gray-600 px-2 text-sm shadow-sm transform transition duration-300 hover:scale-90 hover:shadow-sm hover:text-black">
                Sign In
            </button>
                </div>
              
             </div>
            </div>   

               {/* Accommodation types */}
               <div className="overflow-x-auto pb-4 py-2">
                <div className="flex space-x-6">
                    {accomodationTypes?.map((type) => (
                        <button 
                        key={type}
                        className="text-sm text-gray-600 hover:text-primary whitespace-nowrap"
                         >
                            {type}
                        </button>
                    ))}
                </div>
               </div>
            </div>
        </header>
    );
};


export default Header;