import { createRoot } from "react-dom/client";
import { Counter } from "./Counter";

function App() {
  return (
    <Counter />
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);