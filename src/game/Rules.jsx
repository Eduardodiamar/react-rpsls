import React, { useState } from 'react';

function Rules() {
  const [showRules, setShowRules] = useState(false);

  function handleShowRules() {
    setShowRules(true);
  }

  function handleHideRules() {
    setShowRules(false);
  }

  return (
    <div>
      {showRules && (
        <>
          <p>
            Rock Paper Scissors Lizard Spock is a variation of the classic game of Rock Paper Scissors. The game is played between two players, and the objective is to choose a gesture that beats the opponent's gesture.
          </p>
          <p>
            The game has five gestures: 
          </p>
          <ul>
            <li>Rock, represented by a closed fist</li>
            <li>Paper, represented by an open hand</li>
            <li>Scissors, represented by the index and middle fingers extended and separated</li>
            <li>Lizard, represented by the hand in the shape of an "L"</li>
            <li>Spock, represented by the Vulcan salute from Star Trek</li>
          </ul>
          <p>
            Each gesture can beat two of the other gestures and lose to two of the other gestures. The rules are as follows:
          </p>
          <ul>
            <li>Rock beats Scissors and Lizard</li>
            <li>Paper beats Rock and Spock</li>
            <li>Scissors beats Paper and Lizard</li>
            <li>Lizard beats Paper and Spock</li>
            <li>Spock beats Rock and Scissors</li>
          </ul>
          <p>
            If both players choose the same gesture, the game is a tie and must be played again. Otherwise, the player with the winning gesture gets a point, and the first player to reach a predetermined number of points wins the game.
          </p>
          <button className='rounded-full bg-red-500 p-2	' onClick={handleHideRules}>Hide Rules</button>
        </>
      )}
      {!showRules && (
        <button className='rounded-full bg-yellow-300 p-2	' onClick={handleShowRules}>Show Rules</button>
      )}
    </div>
  );
}

export default Rules;
