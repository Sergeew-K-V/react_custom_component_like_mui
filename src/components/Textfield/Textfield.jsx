import { useRef } from 'react';
import { useState } from 'react';
import '../../App.scss';
import './Textfield.scss';

const Textfield = ({ label, handleChange, name }) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);
  const [isError, setIsError] = useState(false);

  return (
    <div
      className={
        'textfield' +
        (focus ? ' focused' : '') +
        (inputRef.current?.value ? ' valued' : '')
      }
    >
      <label htmlFor={name}>{label}</label>
      <div
        className={
          'textfield__input-content' +
          (focus ? ' focused' : '') +
          (inputRef.current?.value ? ' valued' : '')
        }
        onClick={() => inputRef.current.focus()}
      >
        <input
          type="text"
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
      {inputRef.current?.value.length >= 4 && <p>Invalid value of data</p>}
    </div>
  );
};

export default Textfield;
