"use client";

export default function ScrollAnchor({
    targetId,
    className,
    children,
}: {
    targetId: string;
    className?: string;
    children: React.ReactNode;
}) {
    const clearHashFromUrl = () => {
        if (!window.location.hash) {
            return;
        }

        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        clearHashFromUrl();
    };

    return (
        <a href="/contact-us" className={className} onClick={handleClick}>
            {children}
        </a>
    );
}
