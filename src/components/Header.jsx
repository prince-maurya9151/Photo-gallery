import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "dashboard", label: "Dashboard" },
  { id: "about", label: "About Us" },
];

export default function Header({ page, setPage, favCount }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setPage(id);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <button onClick={() => go("home")} className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-500 text-lg font-bold text-white">
            P
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-slate-900">
            Photo-<span className="text-indigo-600">gallery</span>
          </span>
        </button>

       
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                page === l.id
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {l.label}
              {l.id === "dashboard" && favCount > 0 && (
                <span className="ml-2 rounded-full bg-fuchsia-500 px-2 py-0.5 text-xs text-white">
                  {favCount}
                </span>
              )}
            </button>
          ))}
        </nav>

        
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

     
      {open && (
        <nav className="flex flex-col gap-1 border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`rounded-lg px-4 py-2 text-left text-sm font-semibold ${
                page === l.id ? "bg-indigo-50 text-indigo-700" : "text-slate-600"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}