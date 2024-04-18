import Link from "next/link";
import React from "react";

export default function Header (){
    return(
        <nav className="flex justify-between items-center pl-10 pr-10 pt-8 pb-8" >
            <div><img src="next.svg" width={145} className="flex justify-center items-center"></img></div>
            <div className="flex flex-row justify-between">
                <ul className="flex flex-row justify-evenly items-center gap-10">
                    <li><Link href="/home" className="text-2xl">HOME</Link></li>
                    <li><Link href="/home" className="text-2xl">PRODUCT</Link></li>
                    <li><Link href="/home" className="text-2xl">STORE</Link></li>
                    <li><Link href="/home" className="text-2xl">ABOUT US</Link></li>
                </ul>
                
               
            </div>
        </nav>
    );
}