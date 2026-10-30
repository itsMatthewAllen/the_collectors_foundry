export const metadata = {
  title: "About",
  description: "Learn about The Collector's Foundry.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-semibold tracking-[0.2em] text-accent">
        ABOUT THE FOUNDRY
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        Collect what you love.
      </h1>

      <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-muted-foreground">
        <p>
          The Collector's Foundry exists to help collectors define, plan,
          organize, and complete the collections they dream about.
        </p>

        <p>
          Our goal is to build practical tools and resources that make
          collecting more enjoyable, accessible, and organized.
        </p>
      </div>
    </section>
  );
}
