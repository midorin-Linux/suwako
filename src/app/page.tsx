"use client";

import { Shippori_Mincho, Noto_Sans_JP } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";

import { newsArticles } from "@/data/news";

const getVisibleArticleCount = (width: number) => {
    if (width >= 1280) {
        return 4;
    }
    if (width >= 1024) {
        return 3;
    }
    if (width >= 640) {
        return 2;
    }

    return 1;
};

const shipporiMincho = Shippori_Mincho({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
})

const renderVerticalDate = (date: string) =>
    date.split(/(\d+)/).filter(Boolean).map((part, index) =>
        /^\d+$/.test(part) ? (
            <span key={`${part}-${index}`} className={`inline-block whitespace-nowrap [writing-mode:horizontal-tb]`}>
                {part}
            </span>
        ) : (
            <span key={`${part}-${index}`}>{part}</span>
        )
    );

const ctaButtonClass =
    "group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#8b0000]/30 bg-white px-5 py-3 text-[#8b0000] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8b0000] hover:bg-[#fff8e6] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b0000] focus-visible:ring-offset-2 active:translate-y-0 active:shadow-sm sm:w-fit sm:py-2";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visibleArticleCount, setVisibleArticleCount] = useState(1);

    useEffect(() => {
        const updateVisibleArticleCount = () => {
            setVisibleArticleCount(getVisibleArticleCount(window.innerWidth));
        };

        updateVisibleArticleCount();
        window.addEventListener("resize", updateVisibleArticleCount);

        return () => {
            window.removeEventListener("resize", updateVisibleArticleCount);
        };
    }, []);

    const visibleNewsArticles = newsArticles.slice(0, visibleArticleCount);

    const navItems: { title: string; url: string; column?: { title: string; url: string; }[]; }[] = [
        { title: "守矢神社とは", url: "#", column: [{ title: "守矢神社について", url: "#" }, { title: "守矢神社の歴史と神話", url: "#" }, { title: "土着信仰について", url: "#" }] },
        { title: "御参拝のご案内", url: "#", column: [{ title: "境内のご案内", url: "#" }, { title: "守矢神社の一年", url: "#" }, { title: "はじめての諏訪大社", url: "#" }] },
        { title: "お知らせ", url: "#" },
        { title: "神事・行事", url: "#" },
        { title: "交通アクセス", url: "#" },
        { title: "よくあるご質問", url: "#" },
    ];

    return (
        <>
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
            <main className={`relative z-0`}>
                <div className={`relative h-screen`}>
                    <Image src={`/background.png`} alt={`背景画像`} fill className={`object-cover right-0`} />
                    <div className={`absolute inset-0`}>
                        <div className={`z-10 flex h-full w-full items-center justify-center pt-[49.5px] sm:pt-[53.5px]`}>
                            <div className={`mb-[49.5px] flex items-center justify-center sm:mb-[53.5px]`}>
                                <h2 className={`${shipporiMincho.className} text-9xl`}>守矢神社</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={`bg-[#5a5359]`}>
                    <article className={`relative mx-auto flex w-full min-h-120 flex-col justify-between overflow-hidden px-4 pt-8 sm:px-0 sm:min-h-140 sm:pl-8 sm:pt-10 lg:min-h-0 lg:flex-row lg:items-center lg:gap-10 lg:pl-12`}>
                        <div className={`absolute inset-0 lg:hidden`}>
                            <Image src={`/waterfall.png`} alt={`滝`} fill className={`object-cover`} sizes="(min-width: 640px) 100vw, 100vw" />
                            <div className={`absolute inset-0 bg-[#2b1f2c]/60`} />
                        </div>
                        <div className={`relative z-10 flex flex-1 flex-col gap-6`}>
                            <div>
                                <h1 className={`${shipporiMincho.className} scroll-m-20 pb-1.5 text-2xl font-semibold tracking-wide text-white sm:text-3xl`}>守矢神社</h1>
                                <hr className={`my-1 h-1 w-20 border-none bg-[#e6b422]`} />
                                <p className={`${shipporiMincho.className} text-base leading-relaxed text-white sm:text-lg`}>
                                    守矢神社は、幻想郷の「妖怪の山」の山頂付近に位置する神社です。元々は外の世界に存在していましたが、外の世界での信仰心の希薄化を危惧し、神社と湖ごと幻想郷へと移設されました。
                                </p>
                                <p className={`${shipporiMincho.className} mt-4 text-base leading-relaxed text-white sm:text-lg`}>
                                    当初は妖怪の山の妖怪の皆様から信仰されていましたが、現在では幻想郷全体の神社として、様々な種族の皆様から信仰されています。
                                </p>
                            </div>
                            <div className={`flex w-full items-center justify-center sm:justify-start`}>
                                <a
                                    href={`#`}
                                    aria-label="守矢神社とはのページへ移動"
                                    className={`${shipporiMincho.className} ${ctaButtonClass}`}
                                >
                                    <span>詳しく知る</span>
                                    <MoveRight className={`h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1`} strokeWidth={1.5} />
                                </a>
                            </div>
                        </div>
                        <div className={`relative z-10 mx-auto hidden w-full max-w-md overflow-hidden rounded-tl-sm sm:max-w-xl lg:block lg:max-w-md`}>
                            <div className={`relative aspect-4/5 w-full`}>
                                <Image src={`/waterfall.png`} alt={`滝`} fill className={`object-cover`} sizes="(min-width: 1024px) 420px, (min-width: 640px) 70vw, 92vw" />
                            </div>
                        </div>
                    </article>
                </section>
                <section className={`bg-white`}>
                    <div className={`flex flex-col py-6`}>
                        <div className={`px-4 pt-6 sm:px-8 lg:px-12`}>
                            <h1 className={`${shipporiMincho.className} scroll-m-20 pb-1.5 text-2xl font-semibold tracking-wide sm:text-3xl`}>最新情報</h1>
                            <hr className={`h-1 w-20 my-1 border-none bg-[#e6b422]`} />
                        </div>
                        <div className={`flex w-full flex-col gap-6 px-4 pb-6 sm:px-8 lg:px-12`}>
                            <div className={`grid w-full grid-cols-1 mt-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
                            {visibleNewsArticles.map((article) => (
                                <article key={`${article.date} ${article.title}`} className={`flex h-full w-full flex-col gap-2`}>
                                    <img src={article.thumbnail} alt={article.title} className={`aspect-7/5 w-full object-cover`} />
                                    <div className={`flex gap-2`}>
                                        <div className={`mt-2 flex items-start gap-1`}>
                                            <p className={`${shipporiMincho.className} inline-block w-fit self-start bg-[#192f60] px-1 text-white text-sm [writing-mode:vertical-lr]`}>
                                                {article.category}
                                            </p>
                                            <p className={`${shipporiMincho.className} inline-block w-fit self-start text-sm [writing-mode:vertical-lr]`}>
                                                {renderVerticalDate(article.date)}
                                            </p>
                                        </div>
                                        <div className={`flex flex-1 flex-col gap-1`}>
                                            <h1 className={`${shipporiMincho.className} font-semibold`}>{article.title}</h1>
                                            <hr />
                                            <p className={`${shipporiMincho.className} text-sm`}>{article.explanation}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                            </div>
                            <div className={`flex w-full items-center justify-center sm:justify-end`}>
                                <a
                                    href={`#`}
                                    aria-label="最新情報一覧ページへ移動"
                                    className={`${shipporiMincho.className} ${ctaButtonClass}`}
                                >
                                    <span>最新情報一覧</span>
                                    <MoveRight className={`h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1`} strokeWidth={1.5} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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
        </>
    );
}
