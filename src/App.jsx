import { useState } from 'react';
import './App.scss';
import {
  Button,
  Checkbox,
  Form,
  Select,
  Textfield,
  Radio,
  Content,
} from './components';

function App() {
  const [field, setField] = useState({
    email: '',
    password: 'password',
    username: '',
    role: '',
  });

  const handleChangeTextField = (value, name) => {
    setField({ ...field, [name]: value });
  };

  const handleChangeSelect = (value, name) => {
    setField({ ...field, [name]: value });
  };

  return (
    <div className="container">
      <h1>Welcome to Production Site</h1>
      <Content>
        <Form formTitle={'Form with textfield'}>
          <Textfield
            label={'Email'}
            handleChange={handleChangeTextField}
            name={'email'}
          />
          {/* <Textfield
            label={'Password'}
            name={'password'}
            handleChange={handleChangeTextField}
          />
          <Textfield
            label={'Username'}
            name={'username'}
            handleChange={handleChangeTextField}
          /> */}
          <Button>Submit form</Button>
        </Form>
        <Form formTitle={'Form with select'}>
          <Select
            label={'Select role'}
            value={field.role}
            name={'role'}
            handleChange={handleChangeSelect}
          />
          {/* <Select label={'Choose one of prodived data'} />
          <Select label={'Choose one of prodived data'} /> */}
          <Button>Submit form</Button>
        </Form>
        {/* <Form formTitle={'Form with radio buttons'}>
          <Radio label={'Radio 1'} />
          <Radio label={'Radio 2'} />
          <Radio label={'Radio 3'} />
          <Button>Submit form</Button>
        </Form>
        <Form formTitle={'Form with radio buttons'}>
          <Checkbox label={'Checkbox 1'} />
          <Checkbox label={'Checkbox 2'} />
          <Checkbox label={'Checkbox 3'} />
          <Button>Submit form</Button>
        </Form> */}
      </Content>
    </div>
  );
}

export default App;
