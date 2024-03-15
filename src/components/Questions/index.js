import React, { useState } from 'react';
import maqChopp from "../../assets/maqchopp.webp";

const questions = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor?",
    answer: "Incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor?",
    answer: "Incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor?",
    answer: "Incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor?",
    answer: "Incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor?",
    answer: "Incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id='perguntas' className="bg-off-white" >
      <div className="flex flex-col lg:flex-row justify-center xl:gap-22 2xl:gap-44 bg-off-white container mx-auto max-w-[2500px]" >
        <div className="lg:w-8/12 lg:pr-10 px-5 lg:px-10 py-14">
          <h1 className="text-2xl lg:text-4xl 2xl:text-5xl font-bold mb-8">PERGUNTAS FREQUENTES</h1>
          {questions.map((item, index) => (
            <article key={index} className="mb-4 border-b border-gray-400">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex items-center justify-between w-full py-4 focus:outline-none "
                aria-expanded={activeIndex === index}
                aria-controls={`answer-${index}`}
              >
                <h2 className="text-lg 2xl:text-xl text-start">{item.question}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <p id={`answer-${index}`} className="p-4 bg-[#F5F3EA] text-lg lg:text-xl">{item.answer}</p>
              )}
            </article>
          ))}
        </div>
        <div className="hidden lg:flex flex-1 bg-black">
          <img src={maqChopp} className="w-full h-full object-cover" alt="Máquina de Chopp"/>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FAQ);