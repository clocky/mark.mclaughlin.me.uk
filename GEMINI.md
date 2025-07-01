# Gemini Project Details

## Overview

This project is a personal resume website for Mark McLaughlin. It is a static site built with Eleventy and uses Pug for templating and Tufte.css for styling.

## Tech Stack

*   **Framework:** Eleventy
*   **Templating:** Pug
*   **Styling:** Tufte.css
*   **Asset Pipeline:** Vite (via `@11ty/eleventy-plugin-vite`)
*   **Image Optimization:** `vite-plugin-image-optimizer`, `sharp`, `svgo`
*   **Analytics:** Plausible

## Project Structure

*   `src/`: Contains the source files for the website.
    *   `index.pug`: The main resume page.
    *   `_includes/`: Contains the Pug templates and mixins.
    *   `assets/`: Contains the CSS, fonts, and images.
*   `eleventy.config.js`: The Eleventy configuration file.
*   `package.json`: The project's dependencies and scripts.
*   `dist/`: The output directory for the built site.

## Available Scripts

*   `npm run build`: Builds the site for production.
*   `npm run start`: Starts a local development server with hot-reloading.
*   `npm run debug`: Runs Eleventy in debug mode.
