# DEV_JOURNAL

## A running log of development decisions, thought processes, changes, and learnings throughout the project.

## [2025-04-21] - Refactoring /destination, /crew and /technology routes

- Initially planned to make `/destination` a redirect to `/destination/moon`. But realized that in real-world projects, it's more flexible and UX-friendly to show a list of planets instead of leaving it empty and showing a 404 error fallback. So I built a separate UI for `/destination` and refactored `PlanetDetail` into its own nested route. Also updated route structure and loaders to be cleaner and more scalable. Applied for all routes.
