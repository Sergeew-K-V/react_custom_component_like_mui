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
  });

  const handleChange = (value, name) => {
    setField({ ...field, [name]: value });
  };
  return (
    <div className="container">
      <h1>Welcome to Production Site</h1>
      <Content>
        <Form formTitle={'Form with textfield'}>
          <Textfield
            label={'Email'}
            handleChange={handleChange}
            name={'email'}
            value={field.email}
          />
          <Textfield
            label={'Password'}
            name={'password'}
            handleChange={handleChange}
            value={field.password}
          />
          <Textfield
            label={'Username'}
            name={'username'}
            handleChange={handleChange}
            value={field.username}
          />
          <Button>Submit form</Button>
        </Form>
        {/* <Form formTitle={'Form with select'}>
          <Select label={'Choose one of prodived data'} />
          <Select label={'Choose one of prodived data'} />
          <Select label={'Choose one of prodived data'} />
          <Button>Submit form</Button>
        </Form>
        <Form formTitle={'Form with radio buttons'}>
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
