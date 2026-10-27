export default function About() {
  const items = [
    { title: "Fast & Simple", text: "Photos load from a public API with clear loading and error states." },
    { title: "Search Instantly", text: "Filter by author name in real time, without any extra API calls." },
    { title: "Save Favourites", text: "Your favourites stay saved even after you refresh the page." },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          About <span className="text-indigo-600">Photo-gallery</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
          Photo-gallery is a small photo gallery app built with React, Vite and Tailwind CSS. It
          shows how data fetching, custom hooks, reducers and memoization work together in a
          real interface.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-500" />
            <h3 className="font-display text-lg font-bold text-slate-900">{i.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{i.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}