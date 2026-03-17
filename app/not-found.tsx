import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-serif text-4xl lg:text-6xl font-light text-text mb-4">
          Seite nicht gefunden
        </h1>
        <p className="font-sans text-text-muted text-base mb-8 max-w-md mx-auto">
          Die Seite, die du suchst, existiert nicht oder wurde verschoben.
        </p>
        <Link href="/" className="btn-primary">
          Zurück zur Startseite
        </Link>
      </div>
    </section>
  );
}
