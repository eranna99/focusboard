# AI Usage Disclosure

AI-assisted development was used for this project.

- **Tools:** GitHub Copilot
- **Representative prompts:** "Build a responsive React task dashboard", "Implement localStorage task persistence and derived statistics", "Create the task modal and carousel interactions", "Make the layout responsive at desktop, tablet, and mobile widths".
- **Assisted areas:** React component structure, state and filtering logic, responsive CSS, form validation, accessibility markup, and project documentation.
- **Checked/revised suggestion:** The final implementation uses a browser storage guard so malformed or unavailable localStorage data falls back to sample tasks. I also verified that task mutations create new arrays/objects rather than changing existing state directly.
