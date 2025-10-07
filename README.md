# Portfolio (bowenzhu21.github.io/bowen)

Personal site built with React and React Router to highlight my engineering work and interests. Deployed on GitHub Pages via the built-in `npm run deploy` workflow.

## Pages & Content
- **Home** – Landing page with quick navigation into showcase and wellness content.
- **Showcase** – Hippos BLE firmware + full-stack demo video, LearnLog, GymBro, Steady, and SmartMixer project cards.
- **Fitness** – Training plans, movement patterns, and visual references.
- **Nutrition** – Goal-based nutrition guides and recommendations.
- **Contact** – Contact form plus links to reach me directly.

## Tech Stack
- React 19 + React Router DOM 7
- react-scripts 5 build system
- CSS modules + custom styles in `src/pages/Engineering.css`, `Fitness.css`, and `Nutrition.css`
- Hosted on GitHub Pages (route base `/bowen`)

## Local Development
```bash
npm install
npm start
```
The app runs at `http://localhost:3000` with live reload.

## Deployment
```bash
npm run deploy
```
`predeploy` triggers `npm run build`, then `gh-pages` publishes the `build/` folder to `https://bowenzhu21.github.io/bowen`.

## Contact
Use the contact form on the site or connect via the links provided in the footer.
