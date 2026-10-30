import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Useful Tools",
    description:
      "Practical calculators and utilities designed to make collecting easier.",
  },
  {
    number: "02",
    title: "Organize Your Collection",
    description:
      "Bring structure to your collecting goals and keep track of what matters.",
  },
  {
    number: "03",
    title: "Build Your Collection",
    description:
      "Plan your next collecting goals and work toward completing the collections you dream about.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="max-w-3xl space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <span className="text-sm font-semibold tracking-[0.2em] text-accent">
                TOOLS FOR COLLECTORS
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm-text-6xl lg:text-7xl">
              Forge Your <span className="text-accent">Collection.</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Whether you're chasing a childhood favorite or building a
              collection from the ground up, the Foundry provides tools and
              resources to help bring your collection ambitions to life.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Explore the Toolbox
                <span aria-hidden="true" className="ml-2">
                  &rarr;
                </span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Discover the Foundry
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-accent/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-accent/10"
        />
      </section>

      {/* Features */}
      <section id="toolbox" className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="mb-12 max-w-2xl space-y-3">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent">
            THE FOUNDRY TOOLBOX
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for collectors.
          </h2>

          <p className="text-muted-foreground leading-7">
            Collecting should be about enjoying the things you love. We're
            building practical tools to make the experience a little easier.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-xl border border-border bg-surface p-7 transition-colors hover:border-accent/50"
            >
              <span className="text-sm font-semibold tracking-widest text-metallic">
                {feature.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-y border-border bg-surface-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent">
              COLLECT WHAT YOU LOVE
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              It's your collection. Build it your way.
            </h2>

            <p className="text-lg leading-8 text-muted-foreground">
              You don't need the most expensive cards, the rarest finds, or
              someone else's definition of a complete collection. The Foundry is
              here to help you define what matters to you and enjoy the process
              of getting there on your own terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
