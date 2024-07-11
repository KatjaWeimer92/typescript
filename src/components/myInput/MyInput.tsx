import './myInput.css'

interface MyInputProps {
  label?: string;
  name?: string
  placeholder?: string;
  type?: string;
}

const MyInput: React.FC<MyInputProps> = ({ label, name, placeholder, type }) => {
  return (
      <div className="input-group">
          <label>{label}</label>
          <input name={name} type={type} placeholder={placeholder} />
      </div>
  );
};

export default MyInput;