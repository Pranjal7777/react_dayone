import "./styles.css";
import { DataAppend } from "./Components/dataAppned";
const os = ["Apple", "BlackBerry", "iPhone", "Windows Phone"];
const heading1 = "Mobile Operating Systems";

const company = ["Samsung", "HTC", "Micromax", "Apple"];
const heading2 = "Mobile Manufacturers";

export default function App() {
  return (
    <div className="App">
      <DataAppend heading={heading1} os={os} />
      <DataAppend heading={heading2} os={company} />
    </div>
  );
}
