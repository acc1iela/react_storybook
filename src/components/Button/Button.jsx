import './button.css';
function Button({ children, color = 'default', size = 'base', handleClick }) {
  return (
    <button className={`${color} ${size}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
