# Movie Website

Modern carousel-based landing page for movies, anime, and series with trailer previews and responsive layout.

## Features
- Hero carousel with next/previous controls and animated thumbnails.
- Inline trailer playback: click a Trailer button to start the matching video while other trailers reset.
- Quick metadata badges (year, rating, seasons) and themed CTA buttons.
- Responsive adjustments for smaller screens (navigation hides, spacing optimizes).

## Getting Started
1. Open `index.html` in your browser.
2. Ensure media assets are present:
	- Images inside `image/` (e.g., `1.png`, `2.png`, ...).
	- Trailer video at `video/squid game.mp4` (update the `src` in `index.html` if you use a different file name).
3. Use the carousel arrows or thumbnails to switch titles; click **Trailer** to play the associated clip.

## File Structure
- `index.html` — page markup and carousel items.
- `style.css` — layout, typography, animations, and responsive rules.
- `app.js` — carousel logic and trailer playback controls.
- `image/` — poster assets.
- `video/` — trailer media.

## Author
Md. Mosabbir Sadik
