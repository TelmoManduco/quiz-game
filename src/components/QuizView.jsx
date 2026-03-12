import React, { useState } from "react";

const QuizView = ({ country, questions, onAbort }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // Stores { questionIndex: selectedOption }

  if (!questions)
    return (
      <div className="text-white text-center">Loading Mission Data...</div>
    );

  const activeQ = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const hasAnswered = userAnswers[currentIndex] !== undefined;

  const handleSelect = (option) => {
    setUserAnswers({ ...userAnswers, [currentIndex]: option });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      console.log("Quiz Finished!", userAnswers);
      alert("Quiz Finished! Results logic coming next.");
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
      {/* HEADER: Progress & Abort */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <span className="text-[#85C79A] font-black tracking-widest uppercase text-xs block">
            Mission: {country.name}
          </span>
          <span className="text-slate-500 text-xs font-bold uppercase tracking-tighter">
            Question {currentIndex + 1} / {questions.length}
          </span>
        </div>
        <button
          onClick={onAbort}
          className="text-slate-500 hover:text-rose-400 text-xs font-bold uppercase transition-colors cursor-pointer"
        >
          Abort
        </button>
      </div>

      {/* QUESTION CARD */}
      <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-[2rem] shadow-2xl relative">
        <h2 className="text-2xl font-bold text-white mb-8 leading-tight">
          {activeQ.q}
        </h2>

        <div className="grid gap-3">
          {activeQ.o.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              className={`w-full p-5 rounded-2xl border transition-all text-left font-medium cursor-pointer active:scale-[0.99]
                ${
                  userAnswers[currentIndex] === option
                    ? "border-[#85C79A] bg-[#85C79A]/10 text-white shadow-lg shadow-[#85C79A]/5"
                    : "border-slate-800 bg-slate-800/30 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                }`}
            >
              <div className="flex justify-between items-center">
                {option}
                {userAnswers[currentIndex] === option && (
                  <span className="text-[#85C79A]">●</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-between items-center gap-4">
        {currentIndex > 0 ? (
          <button
            onClick={handlePrev}
            className="flex-1 py-4 rounded-xl font-bold border border-slate-800 text-slate-400 hover:bg-slate-800 transition-all cursor-pointer"
          >
            ← Previous
          </button>
        ) : (
          <div className="flex-1" />
        )}

        {hasAnswered && (
          <button
            onClick={handleNext}
            className={`flex-[2] py-4 rounded-xl font-black transition-all cursor-pointer shadow-xl
              ${
                isLastQuestion
                  ? "bg-rose-500 text-white hover:bg-rose-400 shadow-rose-500/20"
                  : "bg-[#85C79A] text-slate-950 hover:bg-emerald-300 shadow-emerald-500/10"
              }`}
          >
            {isLastQuestion ? "FINISH QUIZ" : "Next Question →"}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizView;
