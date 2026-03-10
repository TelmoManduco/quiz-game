import React from "react";

function App() {
  return (
    /* Main container: Dark background, centered content, full height */
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6 font-sans">
      {/* HEADER SECTION */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-3">
          Global Quiz Master
        </h1>
        <p className="text-slate-400 text-lg italic">
          Choose a destination and test your expertise! 🌍
        </p>
      </header>

      {/* SELECTION CARD (The "Front-End" Start Screen) */}
      <main className="bg-slate-800 border border-slate-700 p-10 rounded-3xl shadow-2xl w-full max-w-md transition-all">
        <div className="flex flex-col gap-8">
          <div className="space-y-3">
            <label className="text-sm font-bold uppercase tracking-widest text-amber-500 ml-1">
              Step 1: Select Country
            </label>
            <select className="w-full bg-slate-700 border-2 border-slate-600 rounded-xl p-4 text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all appearance-none cursor-pointer">
              <option value="">-- Choose a country --</option>
              <option value="brazil">Brazil 🇧🇷</option>
              <option value="portugal">Portugal 🇵🇹</option>
              <option value="japan">Japan 🇯🇵</option>
              <option value="canada">Canada 🇨🇦</option>
              <option value="uk">United Kingdom 🇬🇧</option>
            </select>
          </div>

          <div className="space-y-4">
            <button className="group relative w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-black py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-amber-500/20">
              START THE CHALLENGE
              <span className="block text-[10px] opacity-70">
                5 QUESTIONS TOTAL
              </span>
            </button>

            <p className="text-center text-xs text-slate-500 uppercase tracking-tighter">
              Ready to prove you're a local?
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-16 opacity-40 hover:opacity-100 transition-opacity">
        <p className="text-sm">
          Built with <span className="text-red-500">♥</span> using React &
          Tailwind
        </p>
      </footer>
    </div>
  );
}

export default App;
