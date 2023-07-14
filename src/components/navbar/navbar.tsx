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

    return (
        <div className='w-full h-[80px] z-10 bg-[#1A1A1D] drop-shadow-lg text-white'>
            <div className='px-2 flex md:justify-around justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <Logo />
                </div>
                <div className='hidden md:flex pr-4'>
                    <div className='flex items-center gap-16'>
                        <ul className='grid gap-4 hidden md:flex'>
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/boosting"}>Boosting</Link></li>
                            <li><Link href={"/boosters"}>Join BoostersInn</Link></li>
                            <li><Link href={"/faq"}>FAQ</Link></li>
                            <li><Link href={"/contact"}>Contact</Link></li>
                        </ul>
                        {!user.isSignedIn ?
                            <SignInButton>
                                <button className='text-black px-3 py-2 bg-amber-200 border-none rounded-2xl'>Login</button>
                            </SignInButton>
                            : <SignOutButton>
                                <button className='text-black px-3 py-2 bg-amber-200 border-none rounded-2xl'>Sign out</button>
                            </SignOutButton>}
                    </div>
                </div>

                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <HiMenuAlt1 className='w-5' /> : <HiX className='w-5' />}

                </div>
            </div>
            <div className="grid gap-5">
                <ul className={!nav ? 'hidden' : 'absolute bg-[#1A1A1D] w-full px-8 py-8 h-screen flex flex-col gap-8 overscroll-none'}>
                    <li className='w-full text-2xl'><Link href={"/"} onClick={() => setNav(false)}>Home</Link></li>
                    <li className='w-full text-2xl'><Link href={"/about"} onClick={() => setNav(false)}>About</Link></li>
                    <li className='w-full text-2xl'><Link href={"/boosting"} onClick={() => setNav(false)}>Get Boosting</Link></li>
                    <li className='w-full text-2xl'><Link href={"/boosters"} onClick={() => setNav(false)}>Boosters</Link></li>
                    <li className='w-full text-2xl'><Link href={"/faq"} onClick={() => setNav(false)} >FAQ</Link></li>
                    <li className='w-full text-2xl'><Link href={"/contact"} onClick={() => setNav(false)}>Contact</Link></li>
                    {user &&  <li className='w-full text-2xl'><Link href={"/profile"} onClick={() => setNav(false)}>Profile</Link></li>}
                    <div className='flex flex-col'>
                        {!user.isSignedIn ?
                            <SignInButton>
                                <button className='text-black px-3 py-2 bg-amber-200 border-none rounded-2xl'>Login</button>
                            </SignInButton>
                            : <SignOutButton>
                                <button className='text-black px-3 py-2 bg-amber-200 border-none rounded-2xl'>Sign out</button>
                            </SignOutButton>}
                    </div>
                </ul>
            </div>
        </div>
    );
};