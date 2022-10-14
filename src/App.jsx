import Login from './Auth';
import Signup from './Signup';
import { Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <main className="App">
      <section className="section">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
