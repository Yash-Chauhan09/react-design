import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import img1 from "./assets/pic1.png";
import img2 from "./assets/pic2.png";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__hero">
        <div className="app__heroContainer">
          <h3>The gift of happiness</h3>
          <p>
            Show your gratitude with one of our gift sets, large and small,
            specially designed to spread joy to someone you love.
          </p>
          <Button
            border="none"
            background="linear-gradient(to right, #fc787f, #ff8664)"
            text="Shop now"
            color="#fff"
          />
        </div>
      </div>
      <div className="app__cards">
        <Card
          heading="Ready for autumn collection"
          para="Treat yourself to some of our brand new autumn
          collection - all with the wonderful colours surrounding you."
          img={img1}
        />
        <Card
          heading="Ready for autumn collection"
          para="Treat yourself to some of our brand new autumn
          collection - all with the wonderful colours surrounding you."
          img={img2}
        />
      </div>
    </div>
  );
}

export default App;
