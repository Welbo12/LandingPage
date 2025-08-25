
import "../../styles/index.css";

const CircleBoutton = () => {
  const text = " • HOW IT WORKS • HOW IT WORKS • ";

  return (
    <div className="circle-container">
      <div className="circle">
        <div className="play-button"></div>
      </div>
      <div className="text-circle">
        {text.split("").map((char, i) => (
          <span key={i} style={{ transform: `rotate(${i * 14}deg)` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CircleBoutton;
