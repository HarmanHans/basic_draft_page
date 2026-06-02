"use client";

import "./globals.css";
import {useState} from "react";

export default function Home() {
  const [bid, setBid] = useState(58);
  const [input, setInput] = useState("");
  const [players, setPlayers] = useState(["Victor Wembanyama", "LeBron James", "Kevin Durant"]);
  const [currentPlayer, setCurrentPlayer] = useState("");

  function placeBid() {
    const newBid = Number(input);

    if (!input) return;
    if (Number.isNaN(newBid)) return;
    if (newBid < bid + 1) return;

    setBid(newBid);
    setInput("");
  }

  function finishAuction() {
    const newPlayers = players.filter(p => p !== currentPlayer);
    setPlayers(newPlayers);
    setBid(1);
    setInput("");
  }

  return (
      <main>
        <h1>Salary Cap Draft</h1>
        <div className="nominee-list">
          {players.map((p) =>  (
            <button key={p} onClick={() => setCurrentPlayer(p)}>
              Nominate {p}
            </button>
          ))}
        </div>
        <p>Current Player: {currentPlayer}</p>
        <p>Current Bid: ${bid}</p>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={placeBid}>Set Bid</button>
        <button onClick={() => setBid(bid + 1)}>
          Bid ${bid + 1}
        </button>
        <button onClick={finishAuction}> Finish Bid</button>
      </main>
  );
}
