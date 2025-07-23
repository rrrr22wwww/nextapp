"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/contact", label: "Контакты" },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-end gap-4 items-center">
                {Links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium ${
                            pathname === link.href ? "bg-blue-500 text-white" : "bg-blue-200 text-blue-800 hover:bg-blue-300"}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}