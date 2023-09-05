"use client"
import {BiSearch} from 'react-icons/bi'
 const Search = () => {
    return ( 
        <div className=" border-[1px]  w-full   md:w-auto py-2 hover:shadow-md transition cursor-pointer shadow-sm rounded-full p-2 ">
            <div className="flex flex-row justify-between items-center">
            <div className="text-sm font-semibold px-4">Anything</div>
            <div className="hidden sm:block text-sm font-semibold px-6 flex-1 border-x-[1px] text-center">Any Work</div>
                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                    <div className="hidden sm:block">Add Guest</div>
                    <div className="bg-rose-500 rounded-full p-2 text-white">
                    <BiSearch  size={18} />
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Search;