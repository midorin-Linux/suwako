import {Noto_Sans_JP, Shippori_Mincho} from "next/font/google";

export const shipporiMincho = Shippori_Mincho({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
})