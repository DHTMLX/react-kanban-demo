import "./styles.css";

import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
  const { cards, columns, rows, cardShape } = getData();
  return <Kanban columns={columns} cards={cards} rows={rows} cardShape={cardShape} />;
}

export default App;
