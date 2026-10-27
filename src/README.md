# PixelVault - Photo Gallery

A responsive photo gallery built with **React, Vite and Tailwind CSS**. It fetches photos from the [Picsum Photos API](https://picsum.photos), lets you search by author name and save your favourite photos, which persist across page refreshes.

## Features

- Fetches 30 photos from the Picsum Photos API on load
- Loading spinner while fetching and a clear error message if the request fails
- Responsive grid: 4 columns on desktop, 2 on tablet, 1 on mobile
- Real-time search by author name (filters already-fetched data, no extra API call)
- Favourite photos with a heart button, saved in `localStorage`
- Header, footer and Home / Dashboard / About Us pages

## Tech Stack

- React (functional components and hooks only)
- Vite
- Tailwind CSS (no other UI libraries)

## React Concepts Used

| Concept | Where | Why |
| --- | --- | --- |
| Custom hook `useFetchPhotos` | `src/hooks/useFetchPhotos.js` | Keeps fetch logic separate from UI. Returns `photos`, `loading`, `error`. |
| `useReducer` | `src/App.jsx`, `src/reducers/favouritesReducer.js` | Manages the favourites list with a `TOGGLE` action. |
| `localStorage` | `src/App.jsx` | Saves favourites so they survive a refresh. |
| `useCallback` | `src/components/Gallery.jsx` | Keeps the search handler function stable between renders. |
| `useMemo` | `src/components/Gallery.jsx` | Recomputes the filtered list only when `photos` or `query` changes. |

## Project Structure

```
src/
  components/
    Gallery.jsx
    Header.jsx
    Footer.jsx
  hooks/
    useFetchPhotos.js
  pages/
    Home.jsx
    Dashboard.jsx
    About.jsx
  reducers/
    favouritesReducer.js
  App.jsx
  main.jsx
  index.css
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
git clone <your-repo-url>
cd photo-gallery
npm install
```

### Environment Variables

Copy the example file:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `VITE_PHOTOS_API_URL` | Picsum endpoint used to fetch the photo list |
| `VITE_IMAGE_BASE_URL` | Base URL used to render each image |

The app has default values built in, so it also works without a `.env` file.

### Run the app

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## API

Photos are fetched from:

```
https://picsum.photos/v2/list?limit=30
```

No API key is required.

## Notes

- Filtering is done on the client with already-fetched data. No API call happens on search.
- Favourites are stored as an array of photo ids under the `favourites` key in `localStorage`.

## Credits

Photos by [Picsum Photos](https://picsum.photos).
