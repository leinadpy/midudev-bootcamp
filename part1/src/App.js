import Mensaje from "./Mensaje";

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>;
};

const App = () => {
  return (
    <div className="App">
      <Mensaje message="Estamos trabajando" color="red" />
      <Mensaje message="en un curso " color="green" />
      <Mensaje message="de React" color="yellow" />
      <Description />
    </div>
  );
};

export default App;
