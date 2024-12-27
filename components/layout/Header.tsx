import link from "next/link"
import { search, User} from "lucid-react";

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
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4">
                {/* Top section */}  
           <div>
             {/* Logo */}
             <link href="/" className="text-2xl font-bold text-primary">
             ListingApp
             </link>

             {/* Search bar */}
             <div className="hidden md:flex items-center space-x2 flex-1 max-w-md mx-8">
              <div className="relative flex-1">
                <input 
                type="text"
                placeholder="Search properties"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary" />
                
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>  
             </div>

             {/* Auth buttons */}
             <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    Sign In
                    </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90">
                Sign Up
                </button>
             </div>
            </div>   

               {/* Accommodation types */}
               <div className="overflow-x-auto pb-4">
                <div className="flex space-x-6">
                    {accomodationTypes.map((type) => (
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