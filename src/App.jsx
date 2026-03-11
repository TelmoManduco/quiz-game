import React, { useState } from "react";

// We use 2-letter country codes to fetch the SVG flags
const countries = [
  { id: 1, name: "Portugal", code: "pt" },
  { id: 2, name: "Brazil", code: "br" },
  { id: 3, name: "Japan", code: "jp" },
  { id: 4, name: "Canada", code: "ca" },
  { id: 5, name: "United Kingdom", code: "gb" },
  { id: 6, name: "France", code: "fr" },
  { id: 7, name: "Germany", code: "de" },
  { id: 8, name: "Italy", code: "it" },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* GLOWING BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-cyan-600/10 blur-[100px] rounded-full"></div>
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-6 py-20 flex flex-col min-h-screen">
        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Where's your <span className="text-cyan-400">Expertise?</span>
          </h1>
          <p className="text-slate-400 text-lg font-medium">
            Search and select a country to begin the challenge.
          </p>
        </div>

        {!selectedCountry ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-500">
            {/* SEARCH INPUT */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Type a country name..."
                className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl p-5 pl-14 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all shadow-inner placeholder:text-slate-600"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl opacity-40">
                🔍
              </span>
            </div>

            {/* THE LIST: NAME + SVG FLAG */}
            <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredCountries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => setSelectedCountry(country)}
                  className="flex items-center justify-between bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-slate-600 hover:bg-slate-800/80 transition-all active:scale-[0.99] group text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors">
                      {country.name}
                    </span>
                    {/* SVG FLAG FROM CDN */}
                    <img
                      src={`https://flagcdn.com/w40/${country.code}.png`}
                      alt={country.name}
                      className="w-8 h-auto rounded-sm shadow-sm group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-cyan-400 text-xs">→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* "LET'S PLAY" BOX */
          <div className="bg-slate-900/80 backdrop-blur-3xl border border-slate-800 p-10 rounded-[2rem] shadow-2xl animate-in zoom-in-95 duration-500">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-3xl font-black text-white leading-tight">
                {selectedCountry.name}
              </h3>
              <img
                src={`https://flagcdn.com/w80/${selectedCountry.code}.png`}
                alt={selectedCountry.name}
                className="w-12 h-auto rounded-md shadow-lg"
              />
            </div>

            <p className="text-slate-400 text-lg mb-10">
              Think you're a local expert? Let's find out.
            </p>

            <div className="flex flex-col gap-3">
              <button className="w-full py-5 rounded-2xl font-black bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-xl shadow-cyan-500/10 transition-all active:scale-95 text-lg uppercase">
                START CHALLENGE
              </button>
              <button
                onClick={() => setSelectedCountry(null)}
                className="w-full py-3 text-slate-500 hover:text-slate-300 font-bold transition-all text-sm"
              >
                Choose another country
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="relative z-10 py-10 text-center">
        <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em]">
          Quiz Game v1.0
        </p>
      </footer>
    </div>
  );
}

export default App;
