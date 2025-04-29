import circleGrey from './assets/circle-grey.png';
import generateCode from './GenerateCode.js';

function OutcomeModal({ gameStatus, turns, setTurnCount, setGameStatus, setTestResult, setDragInputCircleOne, setDragInputCircleTwo, setDragInputCircleThree, setDragInputCircleFour, setSecretCode }) {

  const playAgain = () => {
    setTurnCount(0);
    setGameStatus('');
    setTestResult(Array(12).fill(["GRY", "GRY", "GRY", "GRY", "GRY", "GRY", "GRY", "GRY"]));
    setDragInputCircleOne({ color: circleGrey, value: '' });
    setDragInputCircleTwo({ color: circleGrey, value: '' });
    setDragInputCircleThree({ color: circleGrey, value: '' });
    setDragInputCircleFour({ color: circleGrey, value: '' });
    setSecretCode(generateCode());
  };

  if (!gameStatus) return null;

  return (
    <div className="outcome-modal">
      <div className="modal-content">
        {gameStatus === 'Win' ? (
          <p>You won with {turns} turns!</p>
        ) : (
          <p>You lost? lol dumbass.</p>
        )}
        <button onClick={playAgain}>Play again?</button>
      </div>
    </div>
  );
}

export default OutcomeModal;
