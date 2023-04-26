import { useState, useEffect } from 'react'

const options = [
  { id: 0, name: "Rock", emoji: "🗿", beats: [2, 3] },
  { id: 1, name: "Paper", emoji: "📄", beats: [0] },
  { id: 2, name: "Scissors", emoji: "✂️", beats: [1, 3] },
  { id: 3, name: "Lizard", emoji: "🦎", beats: [1] },
  { id: 4, name: "Spock", emoji: "🖖", beats: [3, 0] },
];

function OptionButton({ option, handlePlay, disabled }) {
  return (
    <button
      className="px-4 py-2 m-2 text-xl font-bold text-white bg-yellow-500 rounded-full hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={() => handlePlay(option.id)}
      title={option.name}
    >
      {option.emoji}
    </button>
  )

}

function useChoices() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userMessage, setUserMessage] = useState(null);
  const [computerMessage, setComputerMessage] = useState(null);

  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(null);




  useEffect(() => {
    if (userChoice !== null) {
      setUserMessage(`Player choose ${options[userChoice]?.emoji} - ${options[userChoice]?.name}`)
    }

  }, [userChoice])

  useEffect(() => {
    if (computerChoice !== null) {
      setComputerMessage(`Computer choose ${options[computerChoice]?.emoji} - ${options[computerChoice]?.name}`)
    }

  }, [computerChoice])

  const handlePlay = (choice) => {
    setUserChoice(choice)
    setDisabled(true)
    const randomChoice = Math.floor(Math.random() * 5)

    setTimeout(() => {
      setComputerChoice(randomChoice)
    }, 1500);

    setTimeout(() => {
      setResult(getResult(choice, randomChoice))
    }, 3000);

    clearTimeout()
  }

  const reset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setUserMessage(null);
    setComputerMessage(null);
    setResult(null);
    setDisabled(false);
  }

  return {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset
  }
}
const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 0
  }

  if (options[userChoice].beats.includes(computerChoice)) {
    return 1
  }

  return 2
}

export default function Game() {
  const {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    disabled,
    handlePlay,
    reset,
  } = useChoices()


return (
  <div className='flex items-center justify-center h-screen bg-gray-800'>
    <div className="rounded-lg p-4 bg-gray-500">
      <h1 className="text-3xl mb-4 text-center font-bold">Lets Play</h1>
      <div className="max-w-md mx-auto">
        {options.map(option => (
          <OptionButton
            key={option.id}
            option={option}
            handlePlay={handlePlay}
            disabled={disabled}>
          </OptionButton>
        ))}
        {userChoice !== null && (
          <p className="text-xl mt-4">{userMessage}</p>
        )}
        {computerChoice !== null && (
          <p className="text-xl mt-4">{computerMessage}</p>
        )}
        {result !== null && (
          <div className="mt-8">
            {result === 0 && <p className='text-xl mt-4'>It's a Draw!</p>}
            {result === 1 && (<p className='text-xl mt-4'>
              You WON! {options[userChoice]?.name + " " + options[userChoice]?.emoji} beat{" "}  {options[computerChoice]?.emoji + " " + options[computerChoice]?.name}
            </p>)}
            {result === 2 && (<p className='text-xl mt-4'>
              You Lose {":("} {options[userChoice]?.name + " " + options[userChoice]?.emoji} is beated by {" "}  {options[computerChoice]?.emoji + " " + options[computerChoice]?.name}
            </p>)}
          </div>
        )}
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-700"
          onClick={reset}
        >
          Play Again
        </button>
      </div>
    </div>
  </div>
)
}




