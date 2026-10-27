// import { useState, useCallback, useMemo } from "react";
// import { useFetchPhotos } from "../hooks/useFetchPhotos";

// export default function Gallery({ favourites, dispatch }) {
//   const { photos, loading, error } = useFetchPhotos();
//   const [query, setQuery] = useState("");

//   const handleSearch = useCallback((e) => {
//     setQuery(e.target.value);
//   }, []);

//   const filteredPhotos = useMemo(() => {
//     return photos.filter((p) =>
//       p.author.toLowerCase().includes(query.toLowerCase())
//     );
//   }, [photos, query]);

//   if (loading)
//     return (
//       <div className="flex h-72 items-center justify-center">
//         <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
//       </div>
//     );

//   if (error)
//     return (
//       <div className="mx-auto max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
//         {error}
//       </div>
//     );

//   return (
//     <section id="gallery" className="mx-auto max-w-6xl px-4 sm:px-6">
//       <div className="mb-10 text-center">
//         <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//           Explore the Gallery
//         </h2>
//         <p className="mt-2 text-slate-500">Search by author and tap the heart to save.</p>
//       </div>

//       <div className="relative mx-auto mb-10 max-w-xl">
//         <svg
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
//         >
//           <circle cx="11" cy="11" r="7" />
//           <path d="m21 21-4.3-4.3" />
//         </svg>
//         <input
//           type="text"
//           value={query}
//           onChange={handleSearch}
//           placeholder="Search by author name..."
//           className="w-full rounded-full border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
//         />
//       </div>

//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {filteredPhotos.map((photo) => {
//           const isFav = favourites.includes(photo.id);
//           return (
//             <article
//               key={photo.id}
//               className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={`https://picsum.photos/id/${photo.id}/400/300`}
//                   alt={photo.author}
//                   loading="lazy"
//                   className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="flex items-center justify-between px-4 py-3">
//                 <div>
//                   <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
//                     Photo by
//                   </p>
//                   <p className="font-display text-base font-semibold text-slate-800">
//                     {photo.author}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => dispatch({ type: "TOGGLE", id: photo.id })}
//                   aria-label="Toggle favourite"
//                   className="rounded-full p-2 transition hover:bg-fuchsia-50 active:scale-90"
//                 >
//                   <svg
//                     viewBox="0 0 24 24"
//                     strokeWidth="2"
//                     className={`h-6 w-6 transition ${
//                       isFav ? "fill-fuchsia-500 stroke-fuchsia-500" : "fill-none stroke-slate-400"
//                     }`}
//                   >
//                     <path d="M12 21s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.65-9.5 9-9.5 9z" />
//                   </svg>
//                 </button>
//               </div>
//             </article>
//           );
//         })}
//       </div>

//       {filteredPhotos.length === 0 && (
//         <p className="mt-10 text-center text-slate-500">No photos found.</p>
//       )}
//     </section>
//   );
// }












import { useState, useCallback, useMemo } from "react";
import { useFetchPhotos } from "../hooks/useFetchPhotos";

const IMAGE_BASE =
  import.meta.env.VITE_IMAGE_BASE_URL || "https://picsum.photos/id";

export default function Gallery({ favourites, dispatch }) {
  const { photos, loading, error } = useFetchPhotos();
  const [query, setQuery] = useState("");

  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((p) =>
      p.author.toLowerCase().includes(query.toLowerCase())
    );
  }, [photos, query]);

  if (loading)
    return (
      <div className="flex h-72 items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
      </div>
    );

  if (error)
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
        {error}
      </div>
    );

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Explore the Gallery
        </h2>
        <p className="mt-2 text-slate-500">Search by author and tap the heart to save.</p>
      </div>

      <div className="relative mx-auto mb-10 max-w-xl">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search by author name..."
          className="w-full rounded-full border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredPhotos.map((photo) => {
          const isFav = favourites.includes(photo.id);
          return (
            <article
              key={photo.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={`${IMAGE_BASE}/${photo.id}/400/300`}
                  alt={photo.author}
                  loading="lazy"
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                    Photo by
                  </p>
                  <p className="font-display text-base font-semibold text-slate-800">
                    {photo.author}
                  </p>
                </div>
                <button
                  onClick={() => dispatch({ type: "TOGGLE", id: photo.id })}
                  aria-label="Toggle favourite"
                  className="rounded-full p-2 transition hover:bg-fuchsia-50 active:scale-90"
                >
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    className={`h-6 w-6 transition ${
                      isFav ? "fill-fuchsia-500 stroke-fuchsia-500" : "fill-none stroke-slate-400"
                    }`}
                  >
                    <path d="M12 21s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.65-9.5 9-9.5 9z" />
                  </svg>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {filteredPhotos.length === 0 && (
        <p className="mt-10 text-center text-slate-500">No photos found.</p>
      )}
    </section>
  );
}