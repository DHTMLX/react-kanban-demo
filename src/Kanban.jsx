import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
  let kanban_container = useRef();
  let toolbar_container = useRef();

  useEffect(() => {
    const kanban = new Kanban(kanban_container.current, {
      columns: props.columns,
      cards: props.cards,
      // other configuration properties
    });
  
    const toolbar = new Toolbar(toolbar_container.current, {
      api: kanban.api,
      // other configuration properties
    });

    return () => {
      kanban.destructor();
      toolbar.destructor();
    };
  }, []);

  return  <div className="component_container">
            <div ref={toolbar_container}></div>
            <div ref={kanban_container} style={{ height: "calc(100% - 56px)" }}></div>
          </div>
}
