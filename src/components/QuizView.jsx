import React, { useState, useEffect } from "react";

// --- CONFIGURATION ---
const TIME_LIMIT = 10; // ⏱️ Change this one number to adjust the speed!

const QuizView = ({ country, questions, onAbort, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);

  const activeQ = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const hasAnswered = userAnswers[currentIndex] !== undefined;

  // --- TIMER LOGIC ---
  useEffect(() => {
    if (hasAnswered) return;

    if (timeLeft === 0) {
      handleAutoAdvance();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, hasAnswered]);

  // Resets timer to the constant value whenever the question changes
  useEffect(() => {
    setTimeLeft(TIME_LIMIT);
  }, [currentIndex]);

  const handleAutoAdvance = () => {
    const updatedAnswers = { ...userAnswers, [currentIndex]: null };
    setUserAnswers(updatedAnswers);

    if (isLastQuestion) {
      finishQuiz(updatedAnswers);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleSelect = (option) => {
    setUserAnswers({ ...userAnswers, [currentIndex]: option });
  };

  const finishQuiz = (finalAnswers) => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (finalAnswers[idx] === q.a) correctCount++;
    });
    onFinish(correctCount, questions.length, finalAnswers);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      finishQuiz(userAnswers);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    // The key={currentIndex} makes the whole card animate when the question changes
    <div key={currentIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
      
      {/* HEADER & TIMER */}
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <span className="text-[#85C79A] font-black tracking-widest uppercase text-xs block">
              Mission: {country.name}
            </span>
            <span className="text-slate-500 text-xs font-bold uppercase tracking-tighter">
              Question {currentIndex + 1} / {questions.length}
            </span>
          </div>
          
          <div className={`text-2xl font-black tabular-nums transition-colors ${timeLeft < 4 ? 'text-rose-500 animate-pulse' : 'text-white'}`}>
            00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
          </div>
        </div>

        {/* Visual Timer Bar - Now calculates based on TIME_LIMIT constant */}
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ease-linear ${timeLeft < 4 ? 'bg-rose-500' : 'bg-[#85C79A]'}`}
            style={{ width: `${(timeLeft / TIME_LIMIT) * 100}%` }}
          />
        </div>
      </div>

      {/* QUESTION CARD */}
      <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-[2rem] shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-8 leading-tight">
          {activeQ.q}
        </h2>

        <div className="grid gap-3">
          {activeQ.o.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              className={`w-full p-5 rounded-2xl border transition-all text-left font-medium cursor-pointer active:scale-[0.98]
                ${userAnswers[currentIndex] === option
                  ? "border-[#85C79A] bg-[#85C79A]/10 text-white shadow-lg shadow-[#85C79A]/5"
                  : "border-slate-800 bg-slate-800/30 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                }`}
            >
              <div className="flex justify-between items-center">
                {option}
                {userAnswers[currentIndex] === option && <span className="text-[#85C79A]">●</span>}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-center min-h-[60px]">
        {hasAnswered && (
          <button 
            onClick={handleNext}
            className={`w-full py-5 rounded-2xl font-black transition-all shadow-xl active:scale-95 text-lg animate-in fade-in zoom-in-95
              ${isLastQuestion 
                ? "bg-rose-500 text-white hover:bg-rose-400 shadow-rose-500/20" 
                : "bg-[#85C79A] text-slate-950 hover:bg-emerald-300 shadow-emerald-500/10"}`}
          >
            {isLastQuestion ? "COMPLETE MISSION" : "NEXT QUESTION →"}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizView;