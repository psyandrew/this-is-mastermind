import circleWhite from './assets/circle-white.png';
import circleBlack from './assets/circle-black.png';
import circleBlue from './assets/circle-blue.png';
import circleRed from './assets/circle-red.png';
import circleYellow from './assets/circle-yellow.png';
import circleOrange from './assets/circle-orange.png';
import circleGreen from './assets/circle-green.png';
import circleViolet from './assets/circle-violet.png';



function GameControls({dragInputCircleOne,dragInputCircleTwo,dragInputCircleThree,dragInputCircleFour,onDragOver,onDrop,onDragStart,runCodeTest,}) {
  return (
    <div className="game-controls">
      <div className='controls1'>
        {/* Target circles that will hold the user’s choices */}
        <span className='circle-input'>
          <img alt="Control circle Input" draggable="false" src={dragInputCircleOne['color']} onDragOver={onDragOver} onDrop={(e) => onDrop(e, 'target1')} className='circle-controls-2' />
        </span>
        <span className='circle-input'>
          <img alt="Control circle Input" draggable="false" src={dragInputCircleTwo['color']} onDragOver={onDragOver} onDrop={(e) => onDrop(e, 'target2')} className='circle-controls-2' />
        </span>
        <span className='circle-input'>
          <img alt="Control circle Input" draggable="false" src={dragInputCircleThree['color']} onDragOver={onDragOver} onDrop={(e) => onDrop(e, 'target3')} className='circle-controls-2' />
        </span>
        <span className='circle-input'>
          <img alt="Control circle Input" draggable="false" src={dragInputCircleFour['color']} onDragOver={onDragOver} onDrop={(e) => onDrop(e, 'target4')} className='circle-controls-2' />
        </span>

        {/* Button to check if all inputs are filled */}
        <button
          className='buttoncheck'
          disabled={[dragInputCircleOne['value'], dragInputCircleTwo['value'], dragInputCircleThree['value'], dragInputCircleFour['value']].some(circle => circle === '')}
          onClick={runCodeTest}
        >
          CHECK
        </button>
      </div>

      <div className='controls2'>
        {/* Draggable color choice circles */}
        <span className='circle-input'>
          <img alt="Control choices circle Blue" draggable="true" src={circleBlue} onDragStart={(e) => onDragStart(e, circleBlue, 'BLU')} className='circle-controls-1 cursor-grab' />
        </span>
        <span className='circle-input'>
          <img alt="Control choices circle Red" draggable="true" src={circleRed} onDragStart={(e) => onDragStart(e, circleRed, 'RED')} className='circle-controls-1 cursor-grab' />
        </span>
        <span className='circle-input'>
          <img alt="Control choices circle Yellow" draggable="true" src={circleYellow} onDragStart={(e) => onDragStart(e, circleYellow, 'YLW')} className='circle-controls-1 cursor-grab' />
        </span>
        <span className='circle-input'>
          <img alt="Control choices circle Orange" draggable="true" src={circleOrange} onDragStart={(e) => onDragStart(e, circleOrange, 'ORG')} className='circle-controls-1 cursor-grab' />
        </span>
        <span className='circle-input'>
          <img alt="Control choices circle Green" draggable="true" src={circleGreen} onDragStart={(e) => onDragStart(e, circleGreen, 'GRN')} className='circle-controls-1 cursor-grab' />
        </span>
        <span className='circle-input'>
          <img alt="Control choices circle Violet" draggable="true" src={circleViolet} onDragStart={(e) => onDragStart(e, circleViolet, 'VLT')} className='circle-controls-1 cursor-grab' />
        </span>
        <span className='circle-input'>
          <img alt="Control choices circle White" draggable="true" src={circleWhite} onDragStart={(e) => onDragStart(e, circleWhite, 'WHT')} className='circle-controls-1 cursor-grab' />
        </span>
        <span className='circle-input'>
          <img alt="Control choices circle Black" draggable="true" src={circleBlack} onDragStart={(e) => onDragStart(e, circleBlack, 'BLK')} className='circle-controls-1 cursor-grab' />
        </span>
      </div>
    </div>
  );
}

export default GameControls;
