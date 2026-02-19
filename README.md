# Shopify Video Liquid Challenge

A small, self-contained Shopify-style video embed component built with HTML, CSS, and Liquid-style templating.  
The project demonstrates how to embed a product hero video with multi-language subtitles (WebVTT captions) and how to generate secure CDN-style asset URLs via template filters.

## Goal of the Project

The goal of this mini project is to simulate a realistic front-end task you might receive in a Shopify or e-commerce team:  
implement a reusable video component that is performant, accessible, and easy to configure via template variables.

This repository is structured as a small coding challenge that showcases:

- Clean HTML5 video embedding.
- Liquid-style templating for dynamic asset URLs.
- Multi-language subtitles using WebVTT tracks.
- Minimal, progressive JavaScript enhancement.

## Tech Stack

- **HTML5** – semantic markup and `<video>` element.
- **CSS** – basic layout and responsive styling.
- **Liquid-style templating** – Shopify-like placeholders and filters for dynamic URLs.
- **JavaScript (optional enhancement)** – small UX improvements for subtitles and controls.

There is no build tooling required: everything can be opened directly in a browser.

## Files and Structure

```text
.
├─ index.liquid           # Main template with video component
├─ README.md              # Documentation and challenge description
└─ assets/
   ├─ style.css           # Styling for page and video component
   ├─ video.js            # Optional JavaScript enhancements
   ├─ subtitles-en.vtt    # English subtitles (WebVTT)
   └─ subtitles-de.vtt    # German subtitles (WebVTT)
```

In a real Shopify theme, `index.liquid` (or a section/snippet) would be rendered by Shopify’s Liquid engine, and asset URLs would be resolved to secure CDN links using filters like:

```liquid
{{ 'subtitles-en.vtt' | file_url }}
```

## How to View the Demo

1. Clone the repository:

   ```bash
   git clone https://github.com/<denescsaszar>/shopify-video-liquid-challenge.git
   cd shopify-video-liquid-challenge
   ```

2. Open `index.liquid` in your browser.  
   For local testing without Shopify, you can temporarily rename it to `index.html` or open it through a simple static server.

3. Make sure the `assets` folder stays in the same relative path as in this repo so that the video, CSS, and subtitles load correctly.

## Implementation Highlights

- Uses the native HTML5 `<video>` element for performance and compatibility.
- Adds multiple `<track>` elements for different subtitle languages (e.g., `en`, `de`).
- Uses Liquid-style filters to demonstrate how Shopify would generate secure CDN asset URLs.
- Keeps JavaScript optional and focused on small UX details (e.g., toggling subtitle tracks), avoiding heavy client-side frameworks.

## Git Commit Philosophy

This project is intentionally developed with many small, focused commits to make the implementation process transparent:

- Each commit addresses one clear change (e.g., “add base files”, “add video embed markup”, “add subtitles tracks”).
- Commit messages follow a consistent pattern (e.g., `chore:`, `feat:`, `style:`, `docs:`).
- This style mirrors professional workflows and makes it easy for reviewers to follow your reasoning.

## Possible Extensions

If you want to extend the challenge further:

- Add more subtitle languages (e.g., `fr`, `es`).
- Add a language selector that changes the active `<track>` via JavaScript.
- Add a “poster” image and loading states for the video.
- Integrate the component into a real Shopify theme as a section or snippet.

## About This Repository

This repository is part of my portfolio and is designed to demonstrate:

- Understanding of Shopify/Liquid-style templating.
- Practical front-end skills for e-commerce (video, accessibility, performance).
- A disciplined, commit-by-commit Git workflow suitable for collaborative teams.
