import React from "react";

const ReviewView = ({ questions, userAnswers, onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8 bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-2xl font-black text-white">Mission Debrief</h2>
          <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mt-1">
            Reviewing Intelligence Report
          </p>
        </div>
        <button
          onClick={onBack}
          className="bg-[#85C79A] text-slate-950 hover:bg-emerald-300 px-6 py-3 rounded-xl font-black text-xs uppercase transition-all cursor-pointer shadow-lg shadow-emerald-500/10 active:scale-95"
        >
          Back to Results
        </button>
      </div>

      {/* QUESTIONS LIST */}
      <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar pb-10">
        {questions.map((q, idx) => {
          const isCorrect = userAnswers[idx] === q.a;

          return (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-[2rem] space-y-4 transition-all hover:border-slate-700"
            >
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-black text-slate-400 border border-slate-700">
                  {idx + 1}
                </span>
                <p className="text-lg font-bold text-white leading-tight pt-1">
                  {q.q}
                </p>
              </div>

              <div className="grid gap-3 pl-12">
                {/* User's Choice */}
                <div
                  className={`p-4 rounded-2xl border flex justify-between items-center ${
                    isCorrect
                      ? "border-emerald-500/30 bg-emerald-500/5"
                      : "border-rose-500/30 bg-rose-500/5"
                  }`}
                >
                  <div className="text-sm">
                    <span className="text-slate-500 block text-[10px] uppercase font-black tracking-tighter mb-1">
                      Your Selection
                    </span>
                    <span
                      className={
                        isCorrect
                          ? "text-emerald-400 font-bold"
                          : "text-rose-400 font-bold"
                      }
                    >
                      {userAnswers[idx] || "No answer provided"}
                    </span>
                  </div>
                  <span className="text-xl">{isCorrect ? "✅" : "❌"}</span>
                </div>

                {/* Show correct answer only if they were wrong */}
                {!isCorrect && (
                  <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 animate-in fade-in slide-in-from-top-2 duration-300">
                    <span className="text-slate-500 block text-[10px] uppercase font-black tracking-tighter mb-1">
                      Correct Intelligence
                    </span>
                    <span className="text-emerald-400 font-bold">{q.a}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewView;
