import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import './App.scss';

function App() {

  return (
    <div className="app">
      <section className="app-main">
        <Header />
        <Main />
      </section>
    </div>
  );
}

export default App;
