import { useState } from 'react';
import './App.scss';
import {
  Button,
  Form,
  Select,
  Textfield,
  Content,
  Checkbox,
  Radio,
} from './components';

const FORM_STEPS = Object.freeze({
  textfield: 0,
  select: 1,
  radio: 2,
  checkbox: 3,
});

const optionsRole = [
  { label: 'None', value: '' },
  { label: 'Admin', value: 'Admin' },
  { label: 'User', value: 'User' },
  { label: 'Error', value: 'Error' },
];

const App = () => {
  const [field, setField] = useState({
    email: '',
    password: 'password',
    username: '',
    role: '',
  });

  const [step, setStep] = useState(FORM_STEPS.select);

  const prevStepHandler = () => {
    step >= 1 && setStep((step) => step - 1);
  };

  const nextStepHandler = () => {
    step <= 2 && setStep((step) => step + 1);
  };

  const handleChangeTextField = (value, name) => {
    setField({ ...field, [name]: value });
  };

  const handleChangeSelect = (value, name) => {
    console.log('🚀 ~ file: App.jsx:34 ~ App ~ value, name:', value, name);
    setField({ ...field, [name]: value });
  };

  const renderStep = () => {
    switch (step) {
      case FORM_STEPS.textfield:
        return (
          <Form formTitle={'Form with textfield'}>
            <Textfield
              label={'Email'}
              name={'email'}
              handleChange={handleChangeTextField}
            />
            <Textfield
              label={'Password'}
              name={'password'}
              handleChange={handleChangeTextField}
            />
            <Textfield
              label={'Username Username Username Username Username Username'}
              name={'username'}
              handleChange={handleChangeTextField}
            />
            <Button disabled={step >= 1} onClick={prevStepHandler}>
              Previous
            </Button>
            <Button onClick={nextStepHandler}>Next</Button>
          </Form>
        );
      case FORM_STEPS.select:
        return (
          <Form formTitle={'Form with select'}>
            <Select
              label={
                'Select role Select role Select role sjkhsdfgjkghdfghjkhjkgdfs'
              }
              value={field.role}
              name={'role'}
              handleChange={handleChangeSelect}
              options={optionsRole}
            />
            <Select
              label={'Select role'}
              value={field.role}
              name={'role'}
              handleChange={handleChangeSelect}
              options={optionsRole}
            />
            <Button onClick={prevStepHandler}>Previous</Button>
            <Button onClick={nextStepHandler}>Next</Button>
          </Form>
        );
      case FORM_STEPS.radio:
        return (
          <Form formTitle={'Form with radio'}>
            <Radio label={'Radio 1'} />
            <Button onClick={prevStepHandler}>Previous</Button>
            <Button onClick={nextStepHandler}>Next</Button>
          </Form>
        );
      case FORM_STEPS.checkbox:
        return (
          <Form formTitle={'Form with checkbox'}>
            <Checkbox label={'Checkbox 1'} />
            <Button onClick={prevStepHandler}>Previous</Button>
            <Button
              disabled={step <= 2}
              onClick={nextStepHandler}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        );
      default:
        return <div>No step</div>;
    }
  };

  return (
    <div className="container">
      <h1>Welcome to Production Site</h1>
      <Content>{renderStep()}</Content>
    </div>
  );
};

export default App;
