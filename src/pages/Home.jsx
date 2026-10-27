import Gallery from "../components/Gallery";

export default function Home({ favourites, dispatch }) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-700 to-fuchsia-600">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:py-32">
          <span className="rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            Photo Gallery
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Discover photos that
            <br />
            <span className="text-fuchsia-200">tell a story</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-indigo-100 sm:text-lg">
            Browse a curated collection, search by photographer and save the ones you love.
          </p>
          <a
            href="#gallery"
            className="mt-10 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-indigo-700 shadow-lg transition hover:scale-105"
          >
            Explore Gallery
          </a>
        </div>
      </section>

      <div className="pt-16">
        <Gallery favourites={favourites} dispatch={dispatch} />
      </div>
    </>
  );
}