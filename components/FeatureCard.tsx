import Image, { type StaticImageData } from "next/image";

export type FeatureCard = {
    iconImage: string | StaticImageData;
    title: string;
    content: string;
    className?: string;
}

export default function FeatureCard({
    iconImage,
    title,
    content,
    className = ""
} : FeatureCard) {
    return (
        <div className={`shadow-lg/5 p-6 pt-4 flex flex-col gap-2 items-center text-center bg-white rounded-4xl ${className}`}>
            <div className="text-primary">
                <Image
                    src={iconImage}
                    alt=""
                    aria-hidden
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                />
            </div>
            <h4 className="font-serif font-extrabold text-xl text-primary">{title}</h4>
            <p className="text-sm">{content}</p>
        </div>
    )
}