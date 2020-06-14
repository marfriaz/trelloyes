import React from "react";
import List from "./List";
import "./App.css";
import STORE from "./STORE";

function App() {
  return (
    <main className="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {STORE.lists.map((list) => (
          <List
            key={list.id}
            header={list.header}
            cards={list.cardIds.map((id) => STORE.allCards[id])}
          />
        ))}
      </div>
    </main>
  );
}

export default App;

class AppClass extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    },
  };

  render() {
    const { store } = this.props;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map((list) => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map((id) => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}
