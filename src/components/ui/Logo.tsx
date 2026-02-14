import Image from "next/image";

export default function Logo({ className = "", isScrolled = false }: { className?: string, isScrolled?: boolean }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Logo Image - changes based on navbar background */}
            <div className="relative w-[160px] h-[54px] md:w-[230px] md:h-[88px] shrink-0">
                <Image
                    src={isScrolled ? "/black_logo.png" : "/white_logo.png"}
                    alt="Gigacore Energy Logo"
                    fill
                    className="object-contain object-left transition-opacity duration-300"
                />
            </div>
        </div>
    );
}
