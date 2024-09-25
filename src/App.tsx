import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>
        <form onSubmit={() => {}}>
          <input type="text" onChange={() => {}} className="" />
          <input type="submit" value="作成" />
        </form>
      </div>
    </div>
  );
}

export default App;
