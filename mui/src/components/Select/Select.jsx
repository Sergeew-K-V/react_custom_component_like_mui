import { useRef, useState } from 'react';
import keyActions from './keyActions';
import '../../App.scss';
import './Select.scss';

const Select = ({ label, handleChange, name, value, options }) => {
  const [focus, setFocus] = useState(false);
  const fieldsetRef = useRef(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const focusOn = () => {
    setFocus(true);
    setIsSelecting(true);
  };

  const focusOff = () => {
    setFocus(false);
    setIsSelecting(false);
  };

  const handleSelectChange = (value) => {
    handleChange(value, name);
    focusOff();
  };

  return (
    <div
      className={
        'select' + (focus ? ' focused' : '') + (value ? ' valued' : '')
      }
    >
      <label
        onClick={() => {
          focusOn();
          fieldsetRef.current.focus();
        }}
      >
        {label}
      </label>
      <div
        className={
          'select__select-content' +
          (focus ? ' focused' : '') +
          (value ? ' valued' : '')
        }
      >
        <input type="text" name={name} value={value} readOnly tabIndex={-1} />
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          className={isSelecting ? 'focused' : ''}
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
        <fieldset
          tabIndex={1}
          name={name}
          onClick={() => {
            if (isSelecting) {
              focusOff();
            } else {
              focusOn();
            }
          }}
          ref={fieldsetRef}
          onBlur={() => focusOff()}
          onFocus={() => setFocus(true)}
          onKeyDown={(event) =>
            keyActions(
              event.code,
              setIsSelecting,
              handleSelectChange,
              selectedOptionIndex,
              setSelectedOptionIndex,
              focusOn,
              options
            )
          }
        >
          <legend>
            <span>{label}</span>
          </legend>
          {isSelecting && (
            <div className="select__options">
              <ul>
                {options.map((option, index) => (
                  <li
                    onClick={() => handleSelectChange(option.value)}
                    key={option.value || index}
                    className={selectedOptionIndex === index ? 'selected' : ''}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </fieldset>
      </div>
      {value === 'Error' && <p>Error</p>}
    </div>
  );
};

export default Select;
