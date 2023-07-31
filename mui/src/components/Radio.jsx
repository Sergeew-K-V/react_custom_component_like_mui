import '../App.scss';

const Radio = ({ label }) => {
  return (
    <div className="block">
      <label htmlFor="radio">{label}</label>
      <input type="radio" id="radio" />
    </div>
  );
};

export default Radio;
