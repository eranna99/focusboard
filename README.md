# FocusBoard

FocusBoard is a responsive single-user task dashboard for planning work, monitoring progress, and organizing tasks.

## Project Overview

The application allows users to:

- View total, in-progress, and completed task counts
- Create, edit, and delete tasks
- Change task status directly or through the task form
- Search tasks by title
- Filter tasks by status and priority
- View dynamic completion percentages
- Navigate a three-slide focus carousel
- Preserve tasks across browser sessions

## Technology Stack

- HTML5
- CSS3
- JavaScript ES6+
- React 19
- React Hooks: `useState`, `useEffect`, `useMemo`
- Vite
- Lucide React icons
- Browser `localStorage`
- Git and GitHub

## Project Folder Structure

```text
focusboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FilterTabs.jsx
│   │   ├── FocusNotes.jsx
│   │   ├── Header.jsx
│   │   ├── Icon.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   ├── data/
│   │   └── sampleTasks.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   └── formatDate.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── screenshots/
├── .gitignore
├── AI_USAGE.md
├── package.json
└── README.md
```

## Install Dependencies

Requirements: Node.js and npm.

```powershell
cd "C:\Users\keran\OneDrive\Desktop\focusboard\focusboard"
npm install
```

## Run Locally

```powershell
npm run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173`.

## Available Commands

```powershell
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## State Management

FocusBoard uses React Hooks instead of an external state-management library.

- `useState` manages search text, filters, form visibility, editing state, and the carousel slide.
- `useMemo` derives statistics and filtered tasks from the task collection.
- `useEffect` inside `useLocalStorage` synchronizes task state with browser storage.
- Tasks are updated using immutable array and object operations.

This approach keeps state predictable and avoids unnecessary dependencies for a small single-user dashboard.

## Task State and CRUD Behavior

Every task contains `id`, `title`, `description`, `category`, `status`, `priority`, and `dueDate`.

- **Create:** `TaskForm` validates the title, trims text, and generates a unique ID.
- **Read:** Tasks are loaded from localStorage or initialized from `sampleTasks`.
- **Update:** Editing the form replaces the selected task; status controls also update the matching task.
- **Delete:** `window.confirm()` asks for confirmation before removing a task.
- **Status values:** `To do`, `In progress`, and `Completed`.
- **Priority values:** `Low`, `Medium`, and `High`.

## Derived Statistics

Statistics are recalculated whenever tasks change:

- Total tasks: task array length
- In progress: tasks with status `In progress`
- Completed: tasks with status `Completed`
- Completion percentage: `round((completed / total) * 100)`

## Search and Filters

Search is case-insensitive and matches task titles. Status filters use all, to-do, in-progress, and completed tabs. The priority filter shows all, low, medium, or high priority tasks.

## Carousel State

`FocusNotes` maintains the current slide index with `useState`. Previous and next controls wrap between all three slides. Indicator buttons select a slide directly.

## localStorage Implementation

The custom `useLocalStorage` hook:

1. Reads `focusboard.tasks.v1` during initial state setup.
2. Parses and validates that the stored value is an array.
3. Falls back to the initial sample-task array when storage is unavailable or malformed.
4. Saves updated tasks whenever the task state changes.

Task data remains synchronized with browser storage after creates, edits, status updates, and deletes.

## Responsive Layout

The interface supports desktop, tablet, and mobile layouts:

- Desktop: sidebar, header, overview, carousel, and task list
- Tablet: narrower sidebar and responsive grid layout
- Mobile: bottom navigation and stacked, touch-friendly content

## Deployment

Hosted application URL:

```text
Add the final HTTPS deployment URL here.
```

The recommended deployment option is Vercel or Netlify.

## Repository

GitHub repository URL:

```text
Add the final public GitHub repository URL here.
```

## Screenshots

Before final submission, add:

- `screenshots/focusboard-desktop.png`
- `screenshots/focusboard-mobile.png`

## Known Limitations

- Task data is stored in the current browser only and is not shared across devices.
- Clearing browser storage resets the dashboard to its sample tasks.
- Navigation items other than the dashboard are placeholders.
- The UI is designed for a single local user.
