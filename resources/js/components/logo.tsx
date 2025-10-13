import { Link } from "@inertiajs/react";

interface LogoProps {
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
    showText?: boolean;
    className?: string;
    href?: string;
}

export function Logo({
    size = "md",
    showText = false,
    className = "",
    href = "/",
}: LogoProps) {
    const sizeClasses = {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-20 w-20",
    };

    const textSizeClasses = {
        sm: "text-lg",
        md: "text-2xl",
        lg: "text-3xl",
        xl: "text-4xl",
        "2xl": "text-5xl",
    };

    const LogoContent = () => (
        <div className={`flex items-center space-x-3 ${className}`}>
            <img
                src="/digied-logo.png"
                alt="DigiEd Logo"
                className={`${sizeClasses[size]} object-contain`}
            />
            {showText && (
                <span className={`${textSizeClasses[size]} font-bold`}>
                    <span className="text-primary">Digi</span>
                    <span className="text-secondary">Ed</span>
                </span>
            )}
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="inline-flex">
                <LogoContent />
            </Link>
        );
    }

    return <LogoContent />;
}
