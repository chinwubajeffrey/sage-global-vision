

## Plan: Make "Our Disciplines" a responsive grid

**Change**: In `src/pages/Index.tsx` (lines 140-154), replace the horizontal scroll container with a simple responsive grid.

- Remove the outer `overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0` wrapper div
- Change the inner div from `flex gap-6 lg:grid lg:grid-cols-2 min-w-max lg:min-w-0` to `grid grid-cols-1 md:grid-cols-2 gap-6`
- Remove the fixed `w-72` width from service cards, use `w-auto` for all breakpoints

This eliminates both scrollbars and makes the cards stack on mobile, 2-column on tablet+.

