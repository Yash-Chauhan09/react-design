import "../styles/Card.css";
import Button from "./Button";

const Card = ({ heading, para, img }) => {
  return (
    <div className="card">
      <div className="card__top">
        <h4>{heading}</h4>
        <p>{para}</p>
        <Button
          border="1px solid blue"
          background="#fff"
          text="purchase now"
          color="blue"
        />
      </div>
      <div className="card__bottom">
        <img src={img} alt="thumbnail" />
      </div>
    </div>
  );
};

export default Card;
