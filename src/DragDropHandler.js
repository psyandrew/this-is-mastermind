function DragAndDropHandler({ setDragInputCircleOne, setDragInputCircleTwo, setDragInputCircleThree, setDragInputCircleFour }) {

  // Drag start handler
  const onDragStart = (e, circleColor, circleValue) => {
    e.dataTransfer.setData('text/circleColor', circleColor);
    e.dataTransfer.setData('text/circleValue', circleValue);
  };

  // Drag over handler
  const onDragOver = (e) => {
    e.preventDefault();
  };

  // Drop handler
  const onDrop = (e, target) => {
    const circleColor = e.dataTransfer.getData('text/circleColor');
    const circleValue = e.dataTransfer.getData('text/circleValue');

    if (target === 'target1') {
      setDragInputCircleOne({ color: circleColor, value: circleValue });
    } else if (target === 'target2') {
      setDragInputCircleTwo({ color: circleColor, value: circleValue });
    } else if (target === 'target3') {
      setDragInputCircleThree({ color: circleColor, value: circleValue });
    } else if (target === 'target4') {
      setDragInputCircleFour({ color: circleColor, value: circleValue });
    }
  };

  return { onDragStart, onDragOver, onDrop };
}

export default DragAndDropHandler;
