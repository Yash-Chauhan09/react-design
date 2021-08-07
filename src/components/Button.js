import "../styles/Button.css";

const Button = ({ border, background, text, color }) => {
  return (
    <button className="button" style={{ background, border, color }}>
      {text}
    </button>
  );
};

export default Button;
