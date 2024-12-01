import "./FloatingButton.css"; // O

const FloatingButton = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      ⬤
    </button>
  );
};

export default FloatingButton;
