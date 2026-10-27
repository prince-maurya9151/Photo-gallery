import { useMemo } from "react";
import { useFetchPhotos } from "../hooks/useFetchPhotos";

const IMAGE_BASE =
  import.meta.env.VITE_IMAGE_BASE_URL || "https://picsum.photos/id";

export default function Dashboard({ favourites, dispatch }) {
  const { photos, loading, error } = useFetchPhotos();

  const favPhotos = useMemo(
    () => photos.filter((p) => favourites.includes(p.id)),
    [photos, favourites]
  );

  const stats = [
    { label: "Total Photos", value: photos.length },
    { label: "Favourites", value: favourites.length },
    { label: "Photographers", value: new Set(photos.map((p) => p.author)).size },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Your Dashboard
      </h1>
      <p className="mt-2 text-slate-500">A quick look at your saved photos.</p>

      {loading && (
        <div className="mt-16 flex justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
        </div>
      )}
      {error && <p className="mt-10 text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-semibold text-slate-500">{s.label}</p>
                <p className="mt-2 font-display text-4xl font-extrabold text-indigo-600">{s.value}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">Saved Photos</h2>

          {favPhotos.length === 0 ? (
            <div className="mt-6 rounded-2xl border-2 border-dashed border-slate-300 p-12 text-center text-slate-500">
              No favourites yet. Go to Home and tap the heart on a photo.
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {favPhotos.map((p) => (
                <article key={p.id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                  <img
                    src={`${IMAGE_BASE}/${p.id}/400/300`}
                    alt={p.author}
                    className="h-44 w-full object-cover"
                  />
                  <div className="flex items-center justify-between px-4 py-3">
                    <p className="font-display font-semibold text-slate-800">{p.author}</p>
                    <button
                      onClick={() => dispatch({ type: "TOGGLE", id: p.id })}
                      className="rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-600 hover:bg-fuchsia-100"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}