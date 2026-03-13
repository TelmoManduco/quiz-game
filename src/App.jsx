import React, { useState } from "react";
import { countries, quizData } from "./data/countries";
import QuizView from "./components/QuizView";
import ResultsView from "./components/ResultsView";
import ReviewView from "./components/ReviewView"; // Make sure this file exists!

function App() {
  // --- STATE MANAGEMENT ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [gameState, setGameState] = useState("LOBBY"); // LOBBY, PLAYING, RESULTS, REVIEW
  const [results, setResults] = useState({ score: 0, total: 0, answers: {} });

  // --- LOGIC ---
  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleStartQuiz = () => {
    if (quizData[selectedCountry.name]) {
      setGameState("PLAYING");
    } else {
      alert(
        "Mission data for this country is still being decrypted (Coming soon!)",
      );
    }
  };

  const handleFinishQuiz = (score, total, answers) => {
    setResults({ score, total, answers });
    setGameState("RESULTS");
  };

  const handleRestart = () => {
    setGameState("LOBBY");
    setSelectedCountry(null);
    setSearchTerm("");
    setResults({ score: 0, total: 0, answers: {} });
  };

  return (
    <div className="min-h-screen bg-[#281C59] text-slate-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* VISUAL BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-lime-500/10 blur-[100px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-6 py-20 flex flex-col min-h-screen">
        {/* --- VIEW: LOBBY --- */}
        {gameState === "LOBBY" && (
          <div className="animate-in fade-in duration-700">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                World-class explorer{" "}
                <span className="text-[#85C79A]">or just a tourist?</span>
              </h1>
              <p className="text-slate-400 text-lg font-medium">
                Select a destination to test your global intelligence.
              </p>
            </header>

            {!selectedCountry ? (
              <div className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search countries..."
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl p-5 pl-14 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-[#85C79A] transition-all text-white"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                  />
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl opacity-40">
                    🔍
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2 max-h-[400px] overflow-y-auto pr-2">
                  {filteredCountries.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCountry(c)}
                      className="flex items-center justify-between bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-[#85C79A] transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-slate-300 group-hover:text-white">
                          {c.name}
                        </span>
                        <img
                          src={`https://flagcdn.com/w40/${c.code}.png`}
                          alt={c.name}
                          className="w-7 h-auto rounded-sm"
                        />
                      </div>
                      <span className="text-[#85C79A] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-slate-900/80 backdrop-blur-3xl border border-slate-800 p-10 rounded-[2.5rem] text-center shadow-2xl animate-in zoom-in-95">
                <div className="inline-flex items-center gap-4 mb-8 bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                  <h3 className="text-3xl font-black text-white">
                    {selectedCountry.name}
                  </h3>
                  <img
                    src={`https://flagcdn.com/w80/${selectedCountry.code}.png`}
                    className="w-12 h-auto rounded-md shadow-lg"
                    alt="flag"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleStartQuiz}
                    className="w-full py-5 rounded-2xl font-black bg-[#85C79A] text-slate-950 hover:bg-emerald-300 transition-all cursor-pointer text-lg uppercase tracking-wider"
                  >
                    START CHALLENGE
                  </button>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="py-3 text-slate-500 hover:text-slate-300 font-bold transition-all text-sm uppercase cursor-pointer"
                  >
                    Back to search
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- VIEW: PLAYING --- */}
        {gameState === "PLAYING" && (
          <QuizView
            country={selectedCountry}
            questions={quizData[selectedCountry.name]}
            onAbort={handleRestart}
            onFinish={handleFinishQuiz}
          />
        )}

        {/* --- VIEW: RESULTS --- */}
        {gameState === "RESULTS" && (
          <ResultsView
            score={results.score}
            total={results.total}
            country={selectedCountry}
            onRestart={handleRestart}
            onReview={() => setGameState("REVIEW")}
          />
        )}

        {/* --- VIEW: REVIEW --- */}
        {gameState === "REVIEW" && (
          <ReviewView
            questions={quizData[selectedCountry.name]}
            userAnswers={results.answers}
            onBack={() => setGameState("RESULTS")}
          />
        )}
      </main>

      <footer className="relative z-10 py-10 text-center opacity-30">
        <p className="text-xs font-bold text-white uppercase tracking-[0.4em]">
          Quiz World Protocol v1.0
        </p>
      </footer>
    </div>
  );
}

export default App;
