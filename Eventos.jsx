import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Eventos() {
  const [listaEventos, setListaEventos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api-conectatech.onrender.com/eventos')
      .then(res => res.json())
      .then(dados => setListaEventos(dados));
  }, []);

  const handleInscricao = async (id) => {
    const resposta = await fetch('https://api-conectatech.onrender.com/inscrever', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventoId: id })
    });

    if (resposta.ok) {
      alert("Inscrição Confirmada! 🟩");
      navigate('/dashboard');
    }
  };

  return (
    <div className="container">
      <h2>📅 Eventos Disponíveis</h2>

      <div className="grid-eventos">
        {listaEventos.map((evento) => (
          <div key={evento.id} className="card-evento">
            <h3>{evento.titulo}</h3>
            <p className="info">📍 {evento.local}</p>
            <p className="info">📆 {evento.data}</p>
            <button onClick={() => handleInscricao(evento.id)}>
              Inscrever-se
            </button>
          </div>
        ))}
      </div>

      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <Link to="/dashboard">Ir para Meu Dashboard</Link>
      </div>
    </div>
  );
}

export default Eventos;