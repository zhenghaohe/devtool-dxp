import { useState } from "react";
import "./styles.css";
import DevtoolsPanel from "./components/DevtoolsPanel";
import "./tailwind.output.css";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <aside>
        <button
          className="cursor-pointer text-xl"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Open Devtools Panel"
          aria-controls="DevtoolsPanel"
          aria-haspopup
          aria-expanded="false"
        >
          &#9776; open
        </button>
        <DevtoolsPanel isOpen={isOpen} />
      </aside>
    </div>
  );
}
