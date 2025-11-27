import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Eventos from './Eventos';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Inicial é o Login */}
        <Route path="/" element={<Login />} />

        {/* Rota para ver eventos */}
        <Route path="/eventos" element={<Eventos />} />

        {/* Rota privada */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App