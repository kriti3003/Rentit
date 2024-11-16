import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext); // Added setShowSearch
    const [visible, setVisible] = useState(false); // useState imported and defined
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection') ) {
            setVisible(true);
        } else {
            setVisible(false); 
        }
    }, [location, showSearch]); // Added showSearch to dependency array
    
    return showSearch && visible ? (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'> 
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-inherit text-sm'
                    type='text'
                    placeholder='Search'
                    aria-label='Search'
                />
                <img className='w-4' src={assets.search_icon} alt="Search icon" />
            </div>
            <img
                onClick={() => setShowSearch(false)} // Set to false to hide search bar
                className="inline w-3 cursor-pointer"
                src={assets.cross_icon}
                alt="Close icon"
            />
        </div>  
    ) : null;
};

export default SearchBar;


