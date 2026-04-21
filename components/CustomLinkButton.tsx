"use client";

import ChevronRightIcon from "./icon/ChevronRightIcon";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const pendingContactScrollKey = "medical-instrument:scroll-contact-us";

const clearHashFromUrl = () => {
    if (!window.location.hash) {
        return;
    }

    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
};

const scrollToContactUs = () => {
    document.getElementById("contactUs")?.scrollIntoView({ behavior: "smooth" });
    clearHashFromUrl();
};

export default function CustomLinkButton({
    href = '#',
    content,
    themeColor = 'light',
    isNewBlank = false,
}: {
    href: string;
    content: string;
    themeColor?: 'light' | 'dark' | 'transparent';
    isNewBlank?: boolean;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const isHomePage = pathname === "/";

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (href === "/contact-us") {
            e.preventDefault();
            if (isHomePage) {
                scrollToContactUs();
                return;
            }

            sessionStorage.setItem(pendingContactScrollKey, "1");
            router.push("/");
            return;
        }

        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.slice(1);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            clearHashFromUrl();
        }
    };
    const colorThemeClass = themeColor === 'light'
    ? 'bg-primary-foreground text-primary hover:bg-[#d5e4ef]'
    : themeColor === 'dark'
    ?'bg-primary text-white hover:bg-[#0e2561]'
    : 'text-primary';

    return (
        <Link
            href={href}
            target={isNewBlank ? "_blank" : "_self"}
            onClick={handleClick}
            className={`
                flex items-center gap-2 w-fit
                py-1.5 font-serif font-semibold text-xl rounded-tl-[1.25rem] rounded-br-[1.25rem]
                ${colorThemeClass}
                ${themeColor === 'transparent' ? "" : "pl-10 pr-8"}
                transition duration-300 hover:translate-x-1
            `}
        >
            {content} <ChevronRightIcon size={20} />
        </Link>
    )
}