const keyActions = (
  keyCode,
  setIsSelecting,
  handleSelectChange,
  selectedOptionIndex,
  setSelectedOptionIndex,
  focusOn,
  options
) => {
  if (keyCode === 'Space') {
    focusOn();
  }
  if (keyCode === 'Enter') {
    handleSelectChange(options[selectedOptionIndex].value);
  }
  if (keyCode === 'Escape') {
    setIsSelecting(false);
  }
  if (keyCode === 'ArrowDown' && selectedOptionIndex < options.length - 1) {
    setSelectedOptionIndex(options.indexOf(options[selectedOptionIndex + 1]));
  }
  if (keyCode === 'ArrowUp' && selectedOptionIndex) {
    setSelectedOptionIndex(options.indexOf(options[selectedOptionIndex - 1]));
  }
};

export default keyActions;
