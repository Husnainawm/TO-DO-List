# To-Do List App

A simple, responsive to-do list built with vanilla HTML, CSS, and JavaScript — no frameworks or libraries. Built as a practice project to work with arrays, dynamic DOM rendering, and event handling.

## Features

- Add new tasks (via button click or pressing Enter)
- Delete tasks
- Mark tasks as done (with a strikethrough style)
- Clean, gradient-styled UI with hover animations

## Tech Stack

- **HTML** — structure and layout
- **CSS** — styling, gradients, and hover animations
- **JavaScript (Vanilla)** — app logic, no libraries or frameworks

## How It Works

Tasks are stored in a simple array (`tasks`), which acts as the single source of truth for what's on the list. Instead of manually adding/removing individual DOM elements, the app re-renders the entire list from the array every time something changes:

1. User types a task and clicks **Add** (or presses Enter) → the task is pushed into the `tasks` array.
2. `renderTasks()` clears the task list container and rebuilds it from scratch, looping through the `tasks` array with `.forEach()`.
3. Each rendered task gets a **Delete** button. Clicking it removes that task from the array (`splice()`) and re-renders the list.
4. Each rendered task also gets a **Done** button. Clicking it toggles a `.completed` CSS class on that task, applying a strikethrough style.

### Key Concepts Used

| Concept | Where it's used |
|---|---|
| Arrays (`push`, `splice`, `forEach`) | Storing and managing the list of tasks |
| `document.createElement()` | Dynamically building task elements |
| Event listeners | Handling Add, Delete, and Done button clicks |
| `classList.toggle()` | Marking tasks as done/undone without inline styles |
| `closest()` | Finding a task's parent element from a button click |

## Running the Project

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Open `index.html` in your browser — no build steps or installs required.

## What I Learned

Building this project helped me practice:
- Managing app state with a plain JavaScript array instead of directly manipulating the DOM for every change
- Re-rendering a UI from data (a pattern used in frameworks like React)
- The difference between inline styles (`element.style`) and toggling CSS classes (`classList.toggle()`), and why the latter is usually the better approach
- Debugging real issues like undefined variables, mismatched HTML tags, and invalid property access

## Possible Improvements

- Save tasks to `localStorage` so they persist after refreshing the page
- Edit existing tasks
- Filter tasks (all / active / completed)
- Task counter (e.g. "3 tasks left")

## License

This project is open source and available for anyone to use or modify.