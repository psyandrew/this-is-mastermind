import './styles.css';
import { useState, useEffect } from 'react';

import generateCode from './GenerateCode.js';
import codeTest from './CodeTest.js';
import OutcomeModal from './GameResultsModal';
import RoundOutput from './RoundOutput.js';
import DragAndDropHandler from './DragDropHandler';
import GameControls from './GameControls';

import circleWhite from './assets/circle-white.png';
import circleBlack from './assets/circle-black.png';
import circleBlue from './assets/circle-blue.png';
import circleRed from './assets/circle-red.png';
import circleYellow from './assets/circle-yellow.png';
import circleOrange from './assets/circle-orange.png';
import circleGreen from './assets/circle-green.png';
import circleViolet from './assets/circle-violet.png';

import circleGrey from './assets/circle-grey.png';




function App() {

  const [screen, setScreen] = useState('start')
  const [testResult, setTestResult] = useState(Array(12).fill(["GRY", "GRY", "GRY", "GRY", "GRY", "GRY", "GRY", "GRY"]))

  const [dragInputCircleOne, setDragInputCircleOne] = useState({ color: circleGrey, value: '' })
  const [dragInputCircleTwo, setDragInputCircleTwo] = useState({ color: circleGrey, value: '' })
  const [dragInputCircleThree, setDragInputCircleThree] = useState({ color: circleGrey, value: ''})
  const [dragInputCircleFour, setDragInputCircleFour] = useState({ color: circleGrey, value: ''})

  const [turnCount, setTurnCount] = useState(0);
  const [gameStatus, setGameStatus] = useState('');
  const [secretCode, setSecretCode] =useState([]);

  const { onDragStart, onDragOver, onDrop } = DragAndDropHandler({
    setDragInputCircleOne,
    setDragInputCircleTwo,
    setDragInputCircleThree,
    setDragInputCircleFour
  });
  
  //creates the code to break
  useEffect(() =>{    
    setSecretCode(generateCode());;

  },[]);

  console.log(secretCode)



  //runs the test logic
  const runCodeTest = () => {
                    //codeTest is the logic module that determines if the user got it right
    const result = codeTest([dragInputCircleOne['value'], dragInputCircleTwo['value'], dragInputCircleThree['value'], dragInputCircleFour['value']], secretCode)

    const updateArray = (index, newArray) => {
      setTestResult(prevState => {
        const newState = [...prevState];
        newState[index] = newArray;
        return newState;
      });
    };

    if (result.slice(4).every(el => el === 'H') === true) {
      // win show modal
      setGameStatus('Win')
    }
    updateArray(turnCount, result)

    setTurnCount(Num => Num + 1)

    if (turnCount > 12) return setGameStatus('Lose')
  }

  const colorMap = {
    'WHT': circleWhite,
    'BLK': circleBlack,
    'BLU': circleBlue,
    'RED': circleRed,
    'YLW': circleYellow,
    'ORG': circleOrange,
    'GRN': circleGreen,
    'VLT': circleViolet,
    'GRY': circleGrey,
    'H': circleBlack,
    'M': circleWhite,
    'F': circleGrey
  };

  const Start=()=> {
    return(
      <div className='intro'>
        <div className='intrographic'>
        </div>
        <p>
          My favorite puzzle game as a child. The code-breaking game that challenges your logic and deduction skills.
          Invented in 1970 by Mordecai Meirowitz.
        </p>

        <button className='start-btn' onClick={()=> setScreen('game')}>
          Start
        </button>
        <div className='how-to'>
          <p>
            <strong>How to Play:</strong>
            The computer selects a secret code — a sequence of colored pegs.
          </p>
          <p>Sample Code: Blue White Blue White </p>
          <div className="ref-output">
            <span className='circle-input'><img alt="circle 1 color" draggable="false" src={circleBlue} className='circle-controls-1' /></span>
            <span className='circle-input'><img alt="circle 2 color" draggable="false" src={circleWhite} className='circle-controls-1' /></span>
            <span className='circle-input'><img alt="circle 3 color" draggable="false" src={circleBlue} className='circle-controls-1' /></span>
            <span className='circle-input'><img alt="circle 4 color" draggable="false" src={circleWhite} className='circle-controls-1' /></span>
          </div>
          
          <p>Your goal is to guess the exact colors in the correct order. After each guess, you receive clues:</p>
          <div className='sample-output '>
            <div className="ref-output">
              <span className='circle-input'><img alt="circle 1 color" draggable="false" src={circleBlue} className='circle-controls-1' /></span>
              <span className='circle-input'><img alt="circle 2 color" draggable="false" src={circleWhite} className='circle-controls-1' /></span>
              <span className='circle-input'><img alt="circle 3 color" draggable="false" src={circleRed} className='circle-controls-1' /></span>
              <span className='circle-input'><img alt="circle 4 color" draggable="false" src={circleBlue} className='circle-controls-1' /></span>
            </div>
            <div className="box-output">
              <span><img alt="result color" draggable="false" src={circleBlack} className='circle-output' /></span>
              <span><img alt="result color" draggable="false" src={circleBlack} className='circle-output' /></span>
              <span><img alt="result color" draggable="false" src={circleWhite} className='circle-output' /></span>
              <span><img alt="result color" draggable="false" src={circleGrey} className='circle-output' /></span>
            </div>
          </div>
          <p>How many pegs are the right color and in the right place (Black)</p>
          <p>How many are the right color but in the wrong place (White)</p>
          <p>And how many pegs are the wrong color and are not part of the code(Grey)</p>
          <div>
          </div>
          <p>Use logic to crack the code in as few guesses as possible.</p>
        </div>
        
      </div>
    )
  }

  const Game =()=>{
    return(
      <>
        {/*game outcome Modal*/}
      <OutcomeModal
        gameStatus={gameStatus}
        turns={turnCount}
        setTurnCount={setTurnCount}
        setGameStatus={setGameStatus}
        setTestResult={setTestResult}
        setDragInputCircleOne={setDragInputCircleOne}
        setDragInputCircleTwo={setDragInputCircleTwo}
        setDragInputCircleThree={setDragInputCircleThree}
        setDragInputCircleFour={setDragInputCircleFour}
        setSecretCode={setSecretCode}
      />

      <div className="backdrop">
        {/*output circles that will give clues to the player */}
        <span className='top'></span>
        <RoundOutput data={testResult[11]} colorMap={colorMap} />
        <RoundOutput data={testResult[10]} colorMap={colorMap} />
        <RoundOutput data={testResult[9]} colorMap={colorMap} />
        <RoundOutput data={testResult[8]} colorMap={colorMap} />
        <RoundOutput data={testResult[7]} colorMap={colorMap} />
        <RoundOutput data={testResult[6]} colorMap={colorMap} />
        <RoundOutput data={testResult[5]} colorMap={colorMap} />
        <RoundOutput data={testResult[4]} colorMap={colorMap} />
        <RoundOutput data={testResult[3]} colorMap={colorMap} />
        <RoundOutput data={testResult[2]} colorMap={colorMap} />
        <RoundOutput data={testResult[1]} colorMap={colorMap} />
        <RoundOutput data={testResult[0]} colorMap={colorMap} />
        <span className='bot'></span>

        <GameControls
          dragInputCircleOne={dragInputCircleOne}
          dragInputCircleTwo={dragInputCircleTwo}
          dragInputCircleThree={dragInputCircleThree}
          dragInputCircleFour={dragInputCircleFour}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onDragStart={onDragStart}
          runCodeTest={runCodeTest}
        />
      </div>
      </>
    )
  }


  return (
    <div className="App">
      <div className="header">
        <p className="mastermind-logo">MASTERMIND</p>
      </div>
      {screen === 'start' && <Start/>}
      {screen === 'game' && <Game/>}
    </div>
  );
}




export default App;
