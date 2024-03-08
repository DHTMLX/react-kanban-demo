import "./styles.css";

import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
  const { columns, cards } = getData();
  return <Kanban columns={columns} cards={cards} />;
}

export default App;
