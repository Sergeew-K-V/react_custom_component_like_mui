import '../../App.scss';
import './Button.scss';

const Button = ({ children, type, onClick, disabled }) => {
  return (
    <button
      className={'button' + ' ' + (disabled ? disabled : '')}
      onClick={onClick}
      disabled={disabled}
      type={type ? type : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
