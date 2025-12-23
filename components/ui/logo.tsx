import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
    variant?: "light" | "dark" | "colored";
}

export function Logo({ className, variant = "colored" }: LogoProps) {
    return (
        <span className={cn("text-2xl font-bold tracking-tight inline-flex items-center", className)}>
            <span className={cn(
                "font-extrabold tracking-tighter",
                variant === "light" ? "text-white" : "text-expert-navy"
            )}>
                E
                <span className="text-expert-blue">X</span>
                PERT
            </span>
            <span className={cn(
                "font-light ml-1",
                variant === "light" ? "text-gray-300" : "text-gray-600"
            )}>
                GRUP
            </span>
        </span>
    );
}
