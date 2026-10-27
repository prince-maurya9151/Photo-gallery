export default function Footer({ setPage }) {
  return (
    <footer className="mt-20 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold text-white">
            Photo-<span className="text-indigo-600">gallery</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            A simple photo gallery to discover images and save your favourites.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["home", "Home"],
              ["dashboard", "Dashboard"],
              ["about", "About Us"],
            ].map(([id, label]) => (
              <li key={id}>
                <button
                  onClick={() => {
                    setPage(id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="transition hover:text-white"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Credits
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Photos provided by{" "}
            <a href="https://picsum.photos" target="_blank" rel="noreferrer" className="text-indigo-300 underline">
              Picsum Photos
            </a>
            .
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Photo-gallery. Built with React, Vite & Tailwind.
      </div>
    </footer>
  );
}