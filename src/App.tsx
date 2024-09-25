import "./global.css";
import DarkModeToggle from "./utils/DarkModeToggle";

function App() {
  return (
    <main className="h-screen bg-white px-6 py-8 ring-slate-900/5 dark:bg-slate-800">
      <DarkModeToggle />

      <div className="container mx-auto">
        <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-200 p-6 shadow dark:border-gray-700 dark:bg-gray-800">
          <div className="bg-gradient-to-r from-gray-900 to-gray-300 bg-clip-text text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-transparent md:text-5xl lg:text-6xl dark:text-white">
            Tailwind CSS
          </div>
          <div className="text-slate-500 dark:text-slate-400">
            Tailwind CSS is an open-source CSS framework. The main feature of
            this library is that, unlike other CSS frameworks like Bootstrap, it
            does not provide a series of predefined classes for elements such as
            buttons or tables. Instead, it creates a list of "utility" CSS
            classes that can be used to style each element by mixing and
            matching.
          </div>

          <div>
            <button
              type="button"
              className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Click Me
            </button>
            <button
              type="button"
              className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
            >
              More info
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
