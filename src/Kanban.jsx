import { useEffect, useRef } from "react";
import { Kanban } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanView(props) {
  let container = useRef();

  useEffect(() => {
    new Kanban(container.current, {
      columns: props.columns,
      cards: props.cards,
    });

    return () => (container.current.innerHTML = "");
  }, []);

  return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
}
