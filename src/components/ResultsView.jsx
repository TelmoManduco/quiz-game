import React from "react";

const ResultsView = ({ score, total, country, onRestart, onReview }) => {
  const percentage = Math.round((score / total) * 100);

  // Define the Rank and Feedback message based on score
  const getRankInfo = () => {
    if (percentage === 100) {
      return {
        label: "Local Legend 👑",
        color: "text-[#85C79A]",
        msg: "Flawless intel. You clearly know your way around!",
      };
    }
    if (percentage > 80) {
      return {
        label: "Elite Explorer 🧭",
        color: "text-[#85C79A]",
        msg: "Impressive knowledge. Almost a native!",
      };
    }
    if (percentage > 50) {
      return {
        label: "Seasoned Traveler 🧳",
        color: "text-amber-400",
        msg: "Good effort, but there is still more to discover.",
      };
    }
    return {
      label: "Lost Tourist 📸",
      color: "text-rose-400",
      msg: "Might want to check the map again before your next visit!",
    };
  };

  const rank = getRankInfo();

  return (
    <div className="animate-in zoom-in-95 fade-in duration-700 max-w-md mx-auto text-center space-y-8">
      <div className="bg-slate-900/80 border border-slate-800 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
        {/* Decorative Top Glow Bar */}
        <div
          className={`absolute top-0 left-0 w-full h-2 bg-current opacity-50 ${rank.color}`}
        />

        <h2 className="text-slate-500 font-black tracking-[0.3em] uppercase text-[10px] mb-8">
          Mission Complete: {country.name}
        </h2>

        {/* Score Display */}
        <div className="mb-10 scale-110">
          <div className="text-7xl font-black text-white tabular-nums">
            {percentage}%
          </div>
          <div
            className={`text-xl font-bold mt-2 uppercase tracking-tight ${rank.color}`}
          >
            {rank.label}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-800/30 p-4 rounded-2xl border border-slate-700/50">
            <div className="text-slate-500 text-[10px] font-black uppercase mb-1">
              Correct
            </div>
            <div className="text-2xl font-black text-white">{score}</div>
          </div>
          <div className="bg-slate-800/30 p-4 rounded-2xl border border-slate-700/50">
            <div className="text-slate-500 text-[10px] font-black uppercase mb-1">
              Total
            </div>
            <div className="text-2xl font-black text-white">{total}</div>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-10 px-4 italic">
          "{rank.msg}"
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onRestart}
            className="w-full py-5 rounded-2xl font-black bg-[#85C79A] text-slate-950 hover:bg-emerald-300 shadow-xl shadow-emerald-500/10 transition-all active:scale-95 text-lg uppercase tracking-wider cursor-pointer"
          >
            New Mission
          </button>

          <button
            onClick={onReview}
            className="w-full py-3 rounded-xl font-bold border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer text-xs uppercase tracking-[0.2em]"
          >
            Review Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
