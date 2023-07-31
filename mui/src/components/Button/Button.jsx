import '../../App.scss';
import './Button.scss';

const Button = ({ children, type, onClick }) => {
  return (
    <button className="button" onClick={onClick} type={type ? type : 'button'}>
      {children}
    </button>
  );
};

export default Button;
