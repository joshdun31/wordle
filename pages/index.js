import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [gameState, setgameState] = useState(null);
  const [currentRow, setcurrentRow] = useState(3);
  const [currentRowValues, setcurrentRowValues] = useState([]);
  useEffect(() => {
    setgameState(JSON.parse(localStorage.getItem("gameState")));

    return () => { };
  }, []);

  useEffect(() => {
    function handlePress(e){
      if (
        ((e.keyCode >= 65 && e.keyCode <= 90) ||
          (e.keyCode >= 97 && e.keyCode <= 122)) &&
        currentRowValues.length < 5
      ) {
        let val = String(e.key).toLowerCase();
        setcurrentRowValues((prev) => [...prev, val]);
      }
      if (e.keyCode == 8 && currentRowValues.length>0) {
        let val =currentRowValues.length - 1;
        setcurrentRowValues((prev) => prev.filter((item,i) => i != val));
      }
    }
    window.addEventListener("keydown",handlePress )

    return () => {
      window.removeEventListener("keydown",handlePress)
     };
  }, [currentRowValues]);

  

  const emptyBoxRow = () => {
    return (
      <div className="box-row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    );
  };
  const handleKeyValues = () => {
    let a = currentRowValues.map((item, i) => (
      <div key={i} className="box">
        {item}
      </div>
    ));
    let b = [];
    for (let i = currentRowValues.length; i < 5; i++) {
      b.push(<div key={i} className="box"></div>);
    }
    return [...a, ...b];
  };
  return (
    <div>
      <Head>
        <title>Wordle - A daily word game</title>
        <meta
          name="description"
          content="Guess the hidden word in 6 tries. A new puzzle is available each day."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />

        <title>Wordle - A daily word game</title>
        <meta
          name="description"
          content="Guess the hidden word in 6 tries. A new puzzle is available each day."
        />

        <meta
          property="og:url"
          content="https://www.powerlanguage.co.uk/wordle/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wordle - A daily word game" />
        <meta
          property="og:description"
          content="Guess the hidden word in 6 tries. A new puzzle is available each day."
        />
        <meta
          property="og:image"
          content="https://www.dailywordle.com/images/wordle_og_1200x630.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="powerlanguage.co.uk" />

        <meta name="theme-color" content="#6aaa64" />
        <link rel="manifest" href="manifest.json" />
        <link
          href="images/wordle_logo_32x32.png"
          rel="icon shortcut"
          sizes="3232"
        />
        <link href="images/wordle_logo_192x192.png" rel="apple-touch-icon" />
      </Head>
      <main className="main">
        <div className="app-header">
          <h1>WORDLE</h1>
        </div>
        <div className="box-container">
          <div className="box-row">
            {gameState?.boardState[0].length
              ? [1, 2, 3, 4, 5].map((item, i) => (
                <div key={i} className={"box " + gameState.evaluations[0][i]}>
                  {gameState.boardState[0][i]}
                </div>
              ))
              : null}
          </div>
          <div className="box-row">
            {gameState?.boardState[1].length
              ? [1, 2, 3, 4, 5].map((item, i) => (
                <div key={i} className={"box " + gameState.evaluations[1][i]}>
                  {gameState.boardState[1][i]}
                </div>
              ))
              : null}
          </div>
          <div className="box-row">
            {gameState?.boardState[2].length
              ? [1, 2, 3, 4, 5].map((item, i) => (
                <div key={i} className={"box " + gameState.evaluations[2][i]}>
                  {gameState.boardState[2][i]}
                </div>
              ))
              : emptyBoxRow()}
          </div>
          <div className="box-row">
            {currentRow === 3
              ? handleKeyValues()
              : gameState?.boardState[3].length
                ? [1, 2, 3, 4, 5].map((item, i) => (
                  <div key={i} className={"box " + gameState.evaluations[3][i]}>
                    {gameState.boardState[3][i]}
                  </div>
                ))
                : emptyBoxRow()}
            { }
          </div>
          <div className="box-row">
            {gameState?.boardState[4].length
              ? [1, 2, 3, 4, 5].map((item, i) => (
                <div key={i} className={"box " + gameState.evaluations[4][i]}>
                  {gameState.boardState[4][i]}
                </div>
              ))
              : emptyBoxRow()}
          </div>
          <div className="box-row">
            {gameState?.boardState[5].length
              ? [1, 2, 3, 4, 5].map((item, i) => (
                <div key={i} className={"box " + gameState.evaluations[5][i]}>
                  {gameState.boardState[5][i]}
                </div>
              ))
              : emptyBoxRow()}
          </div>
        </div>
      </main>
    </div>
  );
}

const gameState = {
  boardState: ["hello", "moist", "boost", "", "", ""],
  evaluations: [
    ["absent", "absent", "absent", "absent", "present"],
    ["correct", "correct", "correct", "correct", "correct"],
    ["absent", "correct", "present", "correct", "correct"],
    ,
    null,
    null,
    null,
  ],
  rowIndex: 2,
  solution: "moist",
  gameStatus: "WIN",
  lastPlayedTs: 1643813205553,
  lastCompletedTs: 1643813205552,
  restoringFromLocalStorage: null,
  hardMode: false,
};
