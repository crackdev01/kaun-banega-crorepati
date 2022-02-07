import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Trivia from './component/Trivia/Trivia';

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const moneyPyramid = useMemo(() => 
    [
      {id:1, amount: "$ 100"},
      {id:2, amount: "$ 200"},
      {id:3, amount: "$ 300"},
      {id:4, amount: "$ 500"},
      {id:5, amount: "$ 1000"},
      {id:6, amount: "$ 2000"},
      {id:7, amount: "$ 4000"},
      {id:8, amount: "$ 8000"},
      {id:9, amount: "$ 16000"},
      {id:10, amount: "$ 32000"},
      {id:11, amount: "$ 64000"},
      {id:12, amount: "$ 125000"},
      {id:13, amount: "$ 250000"},
      {id:14, amount: "$ 500000"},
      {id:15, amount: "$ 1000000"},
    ].reverse()
  , []);
  
  useEffect(() => {
    questionNumber > 1 && setEarned(() => moneyPyramid.find((money) => money.id == questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);
  
  const questions = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  return (
    <div className="app">
      <div className="main">
        { stop ? <h1 className="trivia-end">You Earned {earned}</h1> : (
          <>
            <div className="top">
              <div className="timer">
                30
              </div>
            </div>
            <div className="bottom">
              <Trivia
                questions={questions}
                setStop={setStop}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
                />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
        {
          moneyPyramid.map((m) => (
            <li className={questionNumber == m.id ? 'moneyListItem active' : 'moneyListItem'} key={m.amount}>
              <span className="moneyListNumber">
                {m.id}
              </span>
              <span className="moneyListAmount">
                {m.amount}
              </span>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
