import '../App.scss';

const Checkbox = ({ label }) => {
  return (
    <div className="block">
      <label htmlFor="checkbox">{label}</label>
      <input type="checkbox" id="checkbox" />
    </div>
  );
};

export default Checkbox;
