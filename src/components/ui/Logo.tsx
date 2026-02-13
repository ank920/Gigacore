import Image from "next/image";

export default function Logo({ className = "", isScrolled = false }: { className?: string, isScrolled?: boolean }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Logo Image - changes based on navbar background */}
            <div className="relative w-36 h-12 md:w-52 md:h-20 shrink-0">
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
