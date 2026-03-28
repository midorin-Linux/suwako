"use client"

import { useState } from "react";
import { shipporiMincho } from "@/data/fonts";
import { navItems } from "@/data/navigate";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`fixed inset-x-0 top-0 z-50 flex w-full flex-col bg-white sm:h-13.5 xl:flex-row xl:justify-between`}>
            <div className={`flex items-center justify-between m-1.5 ml-3`}>
                <div className={`shrink-0`}>
                    <a className={`${shipporiMincho.className} scroll-m-20 pb-1.5 text-2xl font-semibold tracking-wide sm:text-3xl`} href={`/`}>守矢神社</a>
                    <hr className={`h-1 w-20 border-none bg-[#e6b422]`} />
                </div>
                <button
                    className={`mr-3 flex flex-col justify-center gap-1.5 xl:hidden`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="メニューを開く"
                    aria-expanded={menuOpen}
                >
                    <span className={`block h-0.5 w-6 bg-[#8b0000] transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-[#8b0000] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-[#8b0000] transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>
            </div>
            <div className={`w-full bg-[#8b0000] xl:flex xl:h-full xl:w-3/4 xl:p-3 ${menuOpen ? "block" : "hidden xl:flex"}`}>
                <nav className={`h-full w-full xl:hidden`}>
                    <ul className={`flex flex-col divide-y divide-white/30`}>
                        {navItems.map((item) => (
                            <li key={item.title}>
                                <a
                                    href={item.url}
                                    className={`${shipporiMincho.className} whitespace-nowrap text-xs text-white transition-colors duration-200 hover:text-[#e6b422] sm:text-sm xl:text-base block px-4 py-3`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav className={`hidden h-full w-full xl:block`}>
                    <ul className={`flex h-full min-w-0 divide-x divide-white/50`}>
                        {navItems.map((item) => (
                            <li key={item.title} className={`flex min-w-24 flex-1 items-center justify-center px-2`}>
                                <a href={item.url} className={`${shipporiMincho.className} whitespace-nowrap text-xs text-white transition-colors duration-200 hover:text-[#e6b422] sm:text-sm xl:text-base`}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}