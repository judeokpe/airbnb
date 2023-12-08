'use client'

import { IconType } from "react-icons";

interface ButtonProps{
    label:string;
    onClick: (e:React.MouseEvent<HTMLButtonElement>)=>void;
    small?: boolean;
    outline?: boolean;
    icon?: IconType;
    disabled?: boolean

}
const button:React.FC<ButtonProps> = ({
    label, 
    onClick, 
    outline, 
    small, 
    icon: Icon,
    disabled

}) => {
    return ( 
        <button 
        onClick={onClick}
        disabled = {disabled}
        className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            w-full
            ${outline ? 'bg-white' : 'bg-rose-500'}
            ${outline ? 'border-black' : 'border-rose-500'}
            ${outline ? 'text-black': 'text-white'}
            ${small ? 'py-1' : 'py-3'}
            ${small ? 'text-sm' : 'text-xl'}
            ${small ? 'font-light': 'font-semibold'}
            ${small ? 'border-[1px]': 'border-2'}
        `}>
             {label}

             {Icon && (
                <div className="absolute top-3 left-4">
                    <Icon  size={24}/>
                </div>
             
             
             )}
           
        </button>
     );
}
 
export default button;