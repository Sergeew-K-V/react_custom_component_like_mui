import { useRef, useState } from 'react';
import '../../App.scss';
import './Select.scss';

const Select = ({ label, handleChange, name, value }) => {
  console.log('🚀 ~ file: Select.jsx:6 ~ Select ~ value:', value);
  const selectRef = useRef(null);
  const [isError, setError] = useState(false);
  const [focus, setFocus] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  return (
    <div
      className={
        'select' + (focus ? ' focused' : '') + (value ? ' valued' : '')
      }
    >
      <label htmlFor={name}>{label}</label>
      <div
        className={
          'select__select-content' +
          (focus ? ' focused' : '') +
          (value ? ' valued' : '')
        }
        onClick={() => {
          selectRef.current.focus();
          setIsSelecting(true);
        }}
      >
        <input
          type="text"
          name={name}
          ref={selectRef}
          value={value}
          onChange={(event) =>
            handleChange(event.target.value, event.target.name)
          }
          id={name}
          readOnly
          onFocus={() => setFocus(true)}
          onBlur={() => {
            setFocus(false);
            setIsSelecting(false);
          }}
        />
        <svg focusable="false" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
        <fieldset>
          <legend>
            <span>{label}</span>
          </legend>
        </fieldset>
        {isSelecting && (
          <div className="select__options">
            <ul>
              <li onClick={() => handleChange('Admin', name)}>Admin</li>
              <li onClick={() => handleChange('User', name)}>User</li>
              <li onClick={() => handleChange('Error', name)}>Error</li>
            </ul>
          </div>
        )}
      </div>
      {value === 'Error' && <p>Error</p>}
    </div>
  );
};

export default Select;
