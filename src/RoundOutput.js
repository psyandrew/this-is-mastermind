function RoundOutput({ data, colorMap }) {
  const results = data.map(x => colorMap[x]);

  return (
    <div className='game-output'>
      <div className="ref-output">
        <span className='circle-input'><img alt="circle 1 color" draggable="false" src={results[0]} className='circle-controls-1' /></span>
        <span className='circle-input'><img alt="circle 2 color" draggable="false" src={results[1]} className='circle-controls-1' /></span>
        <span className='circle-input'><img alt="circle 3 color" draggable="false" src={results[2]} className='circle-controls-1' /></span>
        <span className='circle-input'><img alt="circle 4 color" draggable="false" src={results[3]} className='circle-controls-1' /></span>
      </div>
      <div className="box-output">
        <span><img alt="result color" draggable="false" src={results[4]} className='circle-output' /></span>
        <span><img alt="result color" draggable="false" src={results[5]} className='circle-output' /></span>
        <span><img alt="result color" draggable="false" src={results[6]} className='circle-output' /></span>
        <span><img alt="result color" draggable="false" src={results[7]} className='circle-output' /></span>
      </div>
    </div>
  );
}

export default RoundOutput;
