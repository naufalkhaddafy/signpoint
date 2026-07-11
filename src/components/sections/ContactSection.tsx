import { EnvelopeSimple, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-brand-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-sm font-semibold mb-6">
          <EnvelopeSimple weight="fill" />
          <span>Daftar Waitlist</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ingin Mencoba Lebih Dulu?
        </h2>
        <p className="text-base sm:text-lg text-brand-100 mb-10 max-w-2xl mx-auto">
          Kami sedang membuka akses untuk pengguna awal. Tinggalkan email Anda dan kami akan menghubungi Anda saat SignPoint siap dicoba, atau untuk menjadwalkan demo.
        </p>

        <form
          action="mailto:hello@signpoint.app"
          method="post"
          encType="text/plain"
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <label htmlFor="waitlist-email" className="sr-only">
            Alamat email
          </label>
          <input
            id="waitlist-email"
            type="email"
            name="email"
            required
            placeholder="nama@perusahaan.com"
            className="flex-1 px-5 py-4 rounded-xl border-0 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-white/30 bg-white"
          />
          <button
            type="submit"
            className="bg-white text-brand-700 px-6 py-4 rounded-xl font-bold hover:bg-brand-50 transition flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            Daftar
            <ArrowRight weight="bold" />
          </button>
        </form>

        <p className="text-brand-200 text-sm mt-6">
          Atau email langsung ke{" "}
          <a href="mailto:hello@signpoint.app" className="underline font-semibold hover:text-white transition">
            hello@signpoint.app
          </a>
        </p>
      </div>
    </section>
  );
}
