import Link from "next/link";

const navigation = [
    { label: "Home", href: "/" },
    { label: "Toolbox", href: "/tools" },
    { label: "About", href: "/about" },
];

export default function Header() {
    return (
        <header className="border-b border-white/10 bg-[#202326] text-[#f4eee5]">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
                <Link
                    href="/"
                    className="group flex shrink-0 items-center gap-3"
                    aria-label="The Collector's Foundry home"
                    >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#b87345] text-lg font-bold text-[#202326] transition-colors group-hover:bg-[#d39a65]">
                        CF
                    </span>

                    <span className="flex flex-col leading-tight">
                        <span className="text-sm font-semibold tracking-wider">
                            THE COLLECTOR'S
                        </span>
                        <span className="text-sm font-semibold tracking-wider text-[#d29a65]">
                            FOUNDRY
                        </span>
                    </span>
                </Link>

                <nav aria-label="Main navigation">
                    <ul className="flex items-center gap-6 text-sm font-medium">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-[#c5b9aa] transition-colors hover:text-[#d39a65]"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}