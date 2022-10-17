import Details from './components/Details';
import Domain from './components/Domain';
import Name from './components/Name';
import Layout from './Layout/Layout';
import { Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <main className="App">
      <section className="section">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Name />} />
          </Route>
          <Route path="/details" element={<Details/>} />
          <Route path="/signup" element={<Domain />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
