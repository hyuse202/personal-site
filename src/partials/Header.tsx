import Link from "next/link";
import React from "react";
import { NavLinks } from "@/components/data/NavLinks";
import { useRouter } from "next/router";
import ColorModeToggle from "@/components/ColorModeToggle";
const Header = () => {
    const router = useRouter();
    return (
        <header className="fixed w-full pg2 z-50 backdrop-blur-lg header overflow-y-auto">
            <nav className="flex items-center gap-3 text-base m-3">
                <Link href="/" className="group">
                    <h2 className="font-suhoiy font-bold text-xl flex tracking-tighter items-center text-radis-red dark:text-darkish-purple">
                        hyuse202
                    </h2>
                </Link> 
                <div className="headernav ml-1 text-lg hidden md:inline-flex">
                {NavLinks.map((links) => (
                  <Link
                      key={links.link}
                      aria-label={links.title}
                      className={`${
                          links.title === '' ? 'hidden' : ''
                      } px-2 hover:underline underline-offset-[8px] ${
                          router.pathname === links.link
                              ? 'font-extrabold text-purple-500'
                              : 'font-normal'
                      }`}
                      href={links.link}
                  >
                    {links.title}
                  </Link>
              ))}
            </div>
            <div className="flex-1"></div>
            <div className="justify-end">
            <ColorModeToggle />
            </div>
            </nav>
        </header>
    );
}

export default Header;