import { SquaresFour, Users, Cloud, Lightning } from "@phosphor-icons/react/dist/ssr";

export function TrustedBySection() {
  return (
    <section className="py-10 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm font-medium mb-6 uppercase tracking-wider">
          Dipercaya oleh tim modern yang menggunakan
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-slate-700">
            <SquaresFour weight="fill" className="text-2xl text-blue-600" /> SharePoint
          </div>
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-slate-700">
            <Users weight="fill" className="text-2xl text-indigo-600" /> Teams
          </div>
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-slate-700">
            <Cloud weight="fill" className="text-2xl text-blue-400" /> OneDrive
          </div>
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-slate-700">
            <Lightning weight="fill" className="text-2xl text-blue-500" /> Automate
          </div>
        </div>
      </div>
    </section>
  );
}
