import '../App.scss';

const Select = ({ title }) => {
  return (
    <div className="block">
      <label htmlFor="select">Choose one of prodived data</label>
      <select id="select"></select>
    </div>
  );
};

export default Select;
