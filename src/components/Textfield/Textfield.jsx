import { useRef } from 'react';
import { useState } from 'react';
import '../../App.scss';
import './Textfield.scss';

const Textfield = ({ label, value, handleChange, name }) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className={'textfield' + (value || focus ? ' focused' : '')}>
      <label htmlFor={name}>{label}</label>
      <div
        className={
          'textfield__input-content' + (value || focus ? ' focused' : '')
        }
        onClick={() => inputRef.current.focus()}
      >
        <input
          type="text"
          value={value}
          name={name}
          ref={inputRef}
          onChange={(event) =>
            handleChange(event.target.value, event.target.name)
          }
          id={name}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <fieldset>
          <legend>
            <span>{label}</span>
          </legend>
        </fieldset>
      </div>
    </div>
  );
};

export default Textfield;
