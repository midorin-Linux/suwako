"use client";

import { shipporiMincho } from "@/data/fonts";
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

    return (
        <>
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
        </>
    );
}
