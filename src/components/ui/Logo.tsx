import Image from "next/image";

export default function Logo({ className = "", textClassName = "text-gray-900" }: { className?: string, textClassName?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Logo Image */}
            <div className="relative w-32 h-10 md:w-48 md:h-16 shrink-0">
                <Image
                    src="/logo.png"
                    alt="Gigacore Energy Logo"
                    fill
                    className="object-contain object-left"
                />
            </div>

            {/* Text REMOVED as per user request */}
            {/* <div className={`flex flex-col leading-none ${textClassName}`}>
                <span className="font-bold text-xl tracking-tighter uppercase">Gigacore</span>
            </div> */}
        </div>
    );
}
