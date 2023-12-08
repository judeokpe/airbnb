'use client'
import { useCallback, useState } from 'react';
import Avatar from '../Avatar';
import {AiOutlineMenu } from 'react-icons/ai'
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';






const UserMenu = () => {
const [isOpen, setIsOpen] = useState(false);

const toggleOpen = useCallback(()=>{
    setIsOpen((value)=> !value)
}, [])
const registerModal = useRegisterModal();
    return (  
        <div className="usermenu relative">
            <div className="flex flex-row items-center gap-3">
                <div
                onClick={()=>{}}
                className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    Airbnb Your Home
                </div>
                <div
                onClick={toggleOpen}
                className="rounded-full p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 items-center flex flex-row cursor-pointer transition hover:shadow-md">
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>

            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow md w-[40vw] md:w-3/4 top-14 right-0 text-sm bg-white overflow-hidden">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem  onClick={()=>{}} label='login'/>
                            <MenuItem  onClick={registerModal.onOpen} label='Sign Up'/>
                            <MenuItem  onClick={()=>{}} label='Logout'/>
                            <div className="flex p-2 flex-row  items-center px-4 border-[2px] rounded-full cursor-pointer mb-4">
                                <Avatar />
                                <p className='ml-2'>User</p>
                            </div>
                        </>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default UserMenu;