
import { useState, useEffect } from "react";

const API_URL =
  import.meta.env.VITE_PHOTOS_API_URL ||
  "https://picsum.photos/v2/list?limit=30";

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("photos not loaded");
        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { photos, loading, error };
}