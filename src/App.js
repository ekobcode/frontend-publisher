import {BrowserRouter, Routes, Route, Switch, Link  } from "react-router-dom";
import Publisher from "./components/Publisher";
 
function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Publisher />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
 
export default App;