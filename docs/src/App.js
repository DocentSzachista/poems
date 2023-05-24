import poems from "./poems/poems.json"; 
import "./App.css";
function App() {

  const generateComponent = () =>{
    return poems.map((value) =>{
      return (
      <article className="poem">
        <header>
          {value.title}
        </header>
        <div>
          {value.content.split(",").map((value) => <p>{value}</p>)}
        </div>
        <footer>
          Created: {value.date_created}
        </footer>

      </article>
      );
    });
  };


  return (
    <div className="container">
      <main className="container">
        <div className="topOpener">
          <details>
            <summary><strong>O mnie</strong></summary>
            <p>Tutaj przetrzymuję swoje różne zbrodnie przeciw sztuce czy to haiku czy to wiersz biały.</p>
          </details>
        </div>
        <div>
          {generateComponent()}
        </div>
      </main>
    </div>
  );
}

export default App;
