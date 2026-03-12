// src/App.jsx
import React, { useState } from "react";
import { countries, quizData } from "./data/countries";
import QuizView from "./components/QuizView";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [gameState, setGameState] = useState("LOBBY");
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#281C59] text-slate-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Visual Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-lime-500/10 blur-[100px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-6 py-20 flex flex-col min-h-screen">
        {/* VIEW: LOBBY */}
        {gameState === "LOBBY" && (
          <>
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                World-class explorer{" "}
                <span className="text-[#85C79A]">or just a tourist?</span>
              </h1>
              <p className="text-slate-400 text-lg font-medium">
                Select a country to begin.
              </p>
            </div>

            {!selectedCountry ? (
              /* Search & List Logic (Could also be a component!) */
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-500">
                <input
                  type="text"
                  placeholder="Type a country name..."
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl p-5 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-[#85C79A] transition-all text-white"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredCountries.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCountry(c)}
                      className="flex items-center justify-between bg-slate-900/40 p-5 rounded-xl border border-slate-800 
               hover:border-[#85C79A] hover:bg-slate-800/80 hover:shadow-lg hover:shadow-[#85C79A]/5
               transition-all duration-200 group text-left
               cursor-pointer active:scale-[0.98]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bold">{c.name}</span>
                        <img
                          src={`https://flagcdn.com/w40/${c.code}.png`}
                          className="w-6"
                          alt="flag"
                        />
                      </div>
                      <span className="text-[#85C79A] opacity-0 group-hover:opacity-100">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Selection Confirmation */
              <div className="bg-slate-900/80 backdrop-blur-3xl border border-slate-800 p-10 rounded-[2rem] text-center animate-in zoom-in-95">
                <h3 className="text-3xl font-black text-white mb-6">
                  {selectedCountry.name}
                </h3>
                <button
                  onClick={() => setGameState("PLAYING")}
                  className="cursor-pointer w-full py-5 rounded-2xl font-black bg-[#85C79A] text-slate-950 hover:bg-emerald-300 transition-all uppercase tracking-wider"
                >
                  START CHALLENGE
                </button>
                <button
                  onClick={() => setSelectedCountry(null)}
                  className="cursor-pointer mt-4 text-slate-500 text-sm font-bold"
                >
                  Back to list
                </button>
              </div>
            )}
          </>
        )}

        {/* VIEW: PLAYING */}
        {gameState === "PLAYING" && (
          <QuizView
            country={selectedCountry}
            questions={quizData[selectedCountry.name]}
            currentQuestion={currentQuestionIdx}
            onAbort={() => {
              setGameState("LOBBY");
              setCurrentQuestionIdx(0);
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;
