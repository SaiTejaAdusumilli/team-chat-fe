import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import UserLogin from "./components/userLogin/userLogin";
import HomePage from "./components/homePage/homePage";
function App() {
 
  return (
    <Router>
    <div className="app-layout">

    <Routes>

      <Route path="/" exact element={<UserLogin/>} />
        <Route path="/HomePage" element={<HomePage/>} />
    </Routes>

    </div>
    </Router>
  );
}

export default App;
