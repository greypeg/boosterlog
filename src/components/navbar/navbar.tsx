"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { SignInButton, SignOutButton } from "@clerk/clerk-react";
import { Logo } from "../logo";
import { useUser } from "@clerk/nextjs";

export const Navbar: React.FC = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const user = useUser();

    return <div className='w-screen h-[80px] z-10 bg-[#00043C] fixed drop-shadow-lg text-white'>
        <div className='px-2 flex md:justify-around justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <Logo />
            </div>
            <div className='hidden md:flex pr-4'>
                <div className='flex items-center gap-16'>
                    <ul className='grid gap-4 hidden md:flex'>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/"}>Games</Link></li>
                        <li><Link href={"/"}>Booster Applications</Link></li>
                        <li><Link href={"/"}>FAQ</Link></li>
                        <li><Link href={"/"}>Contact</Link></li>
                    </ul>
                    {!user.isSignedIn ?
                        <SignInButton>
                            <button className='bg-transparent text-black px-3 py-2 bg-amber-200 border-none rounded-2xl'>Login</button>
                        </SignInButton>
                        : <SignOutButton>
                            <button className='bg-transparent text-black px-3 py-2 bg-amber-200 border-none rounded-2xl'>Sign out</button>
                        </SignOutButton>}
                </div>
            </div>

            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <HiMenuAlt1 className='w-5' /> : <HiX className='w-5' />}

            </div>
        </div>
        <div className="grid gap-5">
            <ul className={!nav ? 'hidden' : 'absolute bg-[#00043C] flex flex-col gap-12 w-full h-screen px-8 py-8'}>
                <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>About</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>Get Boosting</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>Boosters</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>FAQ</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>Contact</Link></li>
                <div className='flex flex-col'>
                    {!user.isSignedIn ?
                        <SignInButton>
                            <button className='bg-transparent text-black px-3 py-2 bg-amber-200 border-none rounded-2xl'>Login</button>
                        </SignInButton>
                        : <SignOutButton>
                            <button className='bg-transparent text-black px-3 py-2 bg-amber-200 border-none rounded-2xl'>Sign out</button>
                        </SignOutButton>}
                </div>
            </ul>
        </div>
    </div>
};