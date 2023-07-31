import '../App.scss';

const Form = ({ children, formTitle }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit form', formTitle);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{formTitle}</h2>
      <fieldset className="form-fieldset">{children}</fieldset>
    </form>
  );
};

export default Form;
