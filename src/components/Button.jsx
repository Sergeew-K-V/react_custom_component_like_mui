import '../App.scss';

const Button = ({ children, type }) => {
  return (
    <button className="button" type={type ? type : 'submit'}>
      {children}
    </button>
  );
};

export default Button;
