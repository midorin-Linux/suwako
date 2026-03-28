import { notoSansJP, shipporiMincho } from "@/data/fonts";
import { navItems } from "@/data/navigate";

export default  function Footer() {
    return (
        <footer className={`bg-[#5a5359]`}>
            <div className={`mx-auto max-w-7xl px-6 py-10`}>
                <div className={`flex flex-col gap-8 md:flex-row md:gap-12`}>
                    <div className={`shrink-0`}>
                        <p className={`${shipporiMincho.className} text-2xl font-semibold text-white`}>守矢神社</p>
                        <hr className={`mt-1 h-0.5 w-16 border-none bg-[#e6b422]`} />
                    </div>
                    <div className={`grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6`}>
                        {navItems.map((item) => (
                            <div key={item.title}>
                                <a
                                    href={item.url}
                                    className={`${shipporiMincho.className} text-sm font-normal text-white transition-colors duration-200 hover:text-[#e6b422]`}
                                >
                                    {item.title}
                                </a>
                                <hr className={`mt-1 border-white/30`} />
                                {item.column && (
                                    <ul className={`mt-2 space-y-1`}>
                                        {item.column.map((columnItem) => (
                                            <li key={columnItem.title}>
                                                <a
                                                    href={columnItem.url}
                                                    className={`${notoSansJP.className} text-xs text-white/70 transition-colors duration-200 hover:text-[#e6b422]`}
                                                >
                                                    {columnItem.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <hr className={`mt-8 border-white/20`} />
                <p className={`${notoSansJP.className} mt-4 text-center text-xs font-light tracking-wide text-white/60`}>
                    Copyright(C) 2026 midorin-linux All rights reserved.
                </p>
            </div>
        </footer>
    )
}