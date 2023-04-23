"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";

export const Navbar: React.FC = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BoosterLog</h1>
                <ul className='hidden md:flex'>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/"}>Games</Link></li>
                    <li><Link href={"/"}>Booster Applications</Link></li>
                    <li><Link href={"/"}>Contact</Link></li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>
                    Sign In
                </button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <HiMenuAlt1 className='w-5' /> : <HiX className='w-5' />}

            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>Home</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>Games</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>Booster Applications</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>Contact</Link></li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>
    </div>
};