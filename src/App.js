import {BrowserRouter, Routes, Route, Switch, Link  } from "react-router-dom";
import Publisher from "./components/Publisher";
import Example2 from "./components/Example2";
 
function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Publisher />} />
              <Route path="/example2" element={<Example2 />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
 
export default App;