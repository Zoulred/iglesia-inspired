
# Project Memory

## Framework & Architecture
- **Framework**: React (Vite-based)
- **Styling**: Tailwind CSS
- **Architecture**: Clean Architecture / SOLID principles
- **Organization**:
  - `src/components/ui`: Reusable, atomic UI components (Button, Card, Badge).
  - `src/components/sections`: Business-specific sections of the page.
  - `src/components/layout`: Structural components (MainLayout, Grid).
  - `src/data`: Static data and configuration.
  - `src/types`: TypeScript interfaces and types.
  - `src/utils`: Business-agnostic utility functions.

## Conventions
- **Naming**: PascalCase for components, camelCase for functions and variables.
- **Responsiveness**: Mobile-first approach using Tailwind's responsive utilities (`sm:`, `md:`, `lg:`, `xl:`).
- **Data-Driven**: UI components should render based on data passed via props or imported from data files.
- **Modularity**: Keep components small and focused on a single responsibility.

## UI/UX Standards
- **Shadows**: Use `card-shadow` and `card-shadow-hover` for consistent depth.
- **Colors**: Primary blue (#2563eb) for actions, Slate for text and secondary elements.
- **Layout**: Two-column grid on desktop (1/3 sidebar, 2/3 content), single column on mobile.
- **Typography**: Inter or system-sans, focus on readability and hierarchy.
