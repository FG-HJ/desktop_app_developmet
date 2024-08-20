"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"
import rangBtn from "../assets/icons/rang-btn.svg"
export default function serveryAnswer() {
    const [checkval, setCheckval] = useState(1);
    // const [value, setValue] = useState(0);
    // const [btnpostion, setBtnpostion] = useState(0)
    
    const handleChange = (e) => {
        if(checkval==1){
            setCheckval(0)
        }else{
            setCheckval(1)
        }
    }
    return (
        <div className="servey-item mb-16">
           <label
                htmlFor="customRange3"
                className="mb-12 flex f-14 h-21"
            >
                Do you feel the outcome of the game was fair
            </label>
            <div className="flex servery-val2 items-center">
                
                <button  className=   {checkval == 1? "btn-yes mr-8": "btn-no mr-8" }   onClick={handleChange}></button><span>Yes</span>
                <button  className={checkval == 1? "btn-no mr-8 ml-40": "btn-yes mr-8 ml-40" } onClick={handleChange}></button><span>No</span>
            </div>
        </div>
    );
};

