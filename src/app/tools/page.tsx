export const metadata = {
  title: "Toolbox",
  description: "Explore tools and utilities built for collectors.",
};

export default function ToolsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-semibold tracking-[0.2em] text-accent">
        THE FOUNDRY TOOLBOX
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        Tools for collectors.
      </h1>

      <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
        A growing collection of practical tools and utilities to help you
        organize, plan, and enjoy your collections.
      </p>

      <div className="mt-12 rounded-xl border border-border bg-surface p-8">
        <p className="text-sm font-semibold text-accent">COMING FIRST</p>

        <h2 className="mt-3 text-2xl font-semibold">Card Storage Calculator</h2>

        <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
          Figure out how much storage you need for your cards, or how many cards
          your existing storage solutions can hold.
        </p>

        <span className="mt-6 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          In development
        </span>
      </div>
    </section>
  );
}
