"use client";

import { useCallback, useEffect, useState } from "react";
import {IoMdClose} from 'react-icons/io'
import Button from "../Button";
interface ModalProps{
    onSubmit: ()=> void;
    onClose:()=>void;
    isOpen?:boolean;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryLabel?: string;
    secondaryAction?: ()=> void;
}

const Modal:React.FC<ModalProps> = ({isOpen, onClose, secondaryAction, onSubmit, title, body, footer, actionLabel, disabled , secondaryLabel}) => {

    const [showModal, setShowModal] = useState(isOpen)
    useEffect(()=>{
        setShowModal(isOpen)
    }, [isOpen])


    const handleClose = useCallback(()=>{
        if(disabled){
            return;
        }
        setShowModal(false);
        setTimeout(()=>{
            onClose()
        }, 300)
    },[disabled, onClose])

    const handleSubmit = useCallback(()=>{
        if(disabled) return;
        onSubmit()
    }, [disabled, onSubmit])

    const handleScondaryAction = useCallback(()=>{
        if(disabled || !secondaryAction) return;
       
            secondaryAction();
    }, [disabled, secondaryAction])

    if(!isOpen) return;

    return ( 
        <div className="flex justify-center items-center overflow-x-hidden fixed inset-0 z-50 overflow-y-auto bg-neutral-800/70 focus:outline-none">
            <div className="relative w-full md:w-4/6 lg:3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
                {/* content */}
                <div className={
                    `
                    translate
                    bg-white
                    duration-300
                    rounded-t
                    h-full
                    ${showModal ? `translate-y-0`: 'translate-y-full'
                }
                ${showModal ? 'opacity-100': 'opacity-0'}
                    `
                }>
                    <div className="translate h-full lg:h-auto md:h-auto rounded-lg shadow-lg flex flex-col w-full bg white outline-none focus:outline-none">
                        {/* header */}
                        <div className="flex items-center p-6  rounded-t justify-center relative border-b-[1px]">
                            <button 
                            onClick={handleClose}
                            className="p-1    
                            hover:opacity-70 border-0 transition absolute left-9">
                            <IoMdClose size = {18} />
                            </button>
                            <div className="text-lg font-semibold">
                                {title}
                            </div>
                        </div>
                        <div className="body relative p-6 flex-auto">
                            {body}
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <div className="flex flex-row items-center gap-4 w-full">
                                <Button 
                                disabled = {disabled}
                                label= {actionLabel}
                                onClick={handleSubmit}
                                />
                                {secondaryAction && secondaryLabel && (
                                    <Button 
                                    outline
                                    disabled = {disabled}
                                    label= {secondaryLabel}
                                    onClick={handleScondaryAction}
                                    />
                                )}


                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;