interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <p className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
