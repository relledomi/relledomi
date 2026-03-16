import { Navbar } from '@/components/ui/Navbar';

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background-main overflow-y-auto [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
      <Navbar />
      <main className="pt-14">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-heading text-sm text-text-secondary tracking-tight">RELLEDOMI ENTERTAINMENT</span>
          <span className="text-xs text-text-secondary font-mono">Nairobi &times; US &mdash; Street Games for the world</span>
        </div>
      </footer>
    </div>
  );
}
