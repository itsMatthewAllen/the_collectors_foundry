import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Toolbox", href: "/tools" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="font-semibold tracking-wide">THE COLLECTOR'S FOUNDRY</p>
          <p className="text-sm text-muted-foreground">
            Forge Your Collection.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex gap-5 text-sm text-muted-foreground">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} The Collector's Foundry
        </p>
      </div>
    </footer>
  );
}
