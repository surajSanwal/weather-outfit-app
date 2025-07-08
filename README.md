# Weather Outfit App

A modern, production-ready React + Vite application that recommends outfits based on real-time weather data for any city. The app demonstrates scalable frontend architecture, robust state management, and high test coverage.

GitHub Repository: [https://github.com/surajSanwal/weather-outfit-app](https://github.com/surajSanwal/weather-outfit-app)

---

## 🎥 Demo
*Working demo video will be placed here.*

<!-- Working demo video -->
<video src="https://github.com/user-attachments/assets/6f2c949e-e1ec-4af4-b93f-26a166c9ce34" controls width="600"></video>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **Yarn** or **npm**
- **OpenWeatherMap API Key** ([Get one here](https://openweathermap.org/api))

### Installation

```bash
git clone https://github.com/yourusername/weather-outfit-app.git
cd weather-outfit-app
yarn install
# or
npm install
```

### Environment Setup

Create a `.env` file in the project root:

```
VITE_OWM_API_KEY=your_openweathermap_api_key
```

### Running the App

```bash
yarn dev
# or
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173).

### Running Tests & Coverage

```bash
yarn test
yarn test:coverage
# or
npm run test
npm run test:coverage
```

---

## 🏗️ Code Structure

```
src/
├── app/                # Redux store and saga setup
│   ├── rootSaga.ts
│   └── store.ts
├── components/         # UI components
│   ├── atoms/          # Smallest UI elements (Button, Input, ThemeSwitcher)
│   ├── molecules/      # Composed UI (SearchBar)
│   └── organisms/      # Complex UI (WeatherCard)
├── features/           # Redux slices and sagas for domain logic
│   ├── searchHistory/
│   ├── suggestion/
│   └── weather/
├── hooks/              # Custom React hooks (e.g., useTheme, useDebouncedValue)
├── pages/              # Top-level pages (Home)
├── services/           # API service modules (OpenWeatherMap, city search)
├── utils/              # Utility functions (e.g., outfit suggestion logic)
├── index.css           # Global styles (Tailwind)
└── vite-env.d.ts       # Vite type definitions
```

### Key Architectural Patterns

- **Atomic Design:** Components are organized as atoms, molecules, and organisms for reusability and clarity.
- **Redux Toolkit:** Centralized state management with slices for weather, suggestions, and search history.
- **Redux Saga:** Handles side effects (API calls, debouncing, cancellation).
- **Hooks:** Custom hooks for theme management and debounced values.
- **Service Layer:** All API logic is abstracted into `/services` for testability and separation of concerns.
- **Testing:** All logic and UI are covered by unit/integration tests using Vitest and React Testing Library.

---

## 🎯 Project Objective

- **User-centric:** Help users decide what to wear based on live weather.
- **Modern stack:** Showcase React, Redux Toolkit, Redux Saga, TypeScript, and Vite.
- **Scalable:** Demonstrate modular, maintainable frontend architecture.
- **Testable:** Achieve and maintain 90%+ code coverage.

---

## ✨ Features

- **Live Weather Data:** Fetches current weather for any city using OpenWeatherMap.
- **Outfit Recommendations:** Suggests what to wear based on temperature and weather conditions.
- **Autocomplete City Search:** Debounced, API-powered suggestions as you type.
- **Recent Searches:** Quick access to your last 5 city searches.
- **Dark Mode:** Toggle between light and dark themes, with system preference support.
- **Responsive & Accessible:** Works on all devices and supports keyboard navigation.
- **High Test Coverage:** Unit and integration tests for all logic and UI.

---

## 🧩 Detailed Feature Explanations

### 1. Weather & Outfit Recommendation

- **Weather Fetch:** Enter a city, and the app fetches current weather using OpenWeatherMap’s One Call API.
- **Outfit Logic:** The app suggests what to wear based on temperature and weather conditions (rain, snow, etc).

### 2. City Search & Suggestions

- **Autocomplete:** As you type, the app fetches city suggestions (debounced, with cancellation of previous requests).
- **Selection:** Choose a suggestion or submit your own input.

### 3. Search History

- **Recent Cities:** The last 5 unique searches are shown for quick access.
- **Persistence:** History is kept in Redux state for the session.

### 4. Dark Mode

- **Toggle:** Switch between light and dark themes.
- **Persistence:** Remembers your choice in localStorage and respects system preference.

### 5. Responsive & Accessible

- **Mobile-first:** Layout adapts to all screen sizes.
- **Keyboard Navigation:** All interactive elements are accessible via keyboard.

### 6. Testing

- **Unit Tests:** All logic (reducers, sagas, utils, services) is unit tested.
- **Component Tests:** All UI components have rendering and interaction tests.
- **Coverage:** 90%+ coverage enforced via Vitest.

---

## 🛠️ Tech Stack

- **React 18** (with Suspense/lazy loading)
- **Vite** (fast dev/build)
- **TypeScript**
- **Redux Toolkit** (state management)
- **Redux Saga** (side effects)
- **React Testing Library** + **Vitest** (testing)
- **Tailwind CSS** (styling)
- **OpenWeatherMap API** (weather data)

---

## 🧪 Testing & Quality

- Run `yarn test` or `npm run test` for all tests.
- Run `yarn test:coverage` or `npm run test:coverage` for coverage report.
- All business logic and UI are covered by tests.
- Linting and formatting are recommended via ESLint and Prettier.

---

## 🤝 Contributing

1. Fork the repo and create your branch from `main`.
2. Install dependencies: `yarn install`
3. Add your feature or fix.
4. Add/modify tests as needed.
5. Run tests and ensure coverage is maintained.
6. Submit a pull request!

---

## 📄 License

MIT

---

## 🙋 FAQ

**Q: Why Vite?**  
A: Vite offers fast startup and HMR, ideal for modern React development.

**Q: How is API key managed?**  
A: The OpenWeatherMap API key is stored in `.env` and never committed.

**Q: Can I use this as a starter?**  
A: Yes! The architecture is modular and ready for extension.

---