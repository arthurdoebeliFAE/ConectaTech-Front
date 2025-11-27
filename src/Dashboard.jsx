import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [meusEventos, setMeusEventos] = useState([]);

  useEffect(() => {
    fetch('https://api-conectatech.onrender.com/minhas-inscricoes')
      .then(res => res.json())
      .then(dados => setMeusEventos(dados));
  }, []);

  const handleCancelar = async (id) => {
    if(!confirm("Deseja cancelar esta inscrição?")) return;
    await fetch(`https://api-conectatech.onrender.com/inscricoes/${id}`, { method: 'DELETE' });
    setMeusEventos(meusEventos.filter(evento => evento.id !== id));
  };

  return (
    <div className="container">
      <h2>👤 Minhas Inscrições</h2>

      {meusEventos.length === 0 ? (
        <p style={{textAlign: 'center', color: '#888'}}>Nenhuma inscrição ativa.</p>
      ) : (
        <ul className="lista-inscricoes">
            {meusEventos.map((evento) => (
                <li key={evento.id} className="item-inscricao">
                    <div>
                      <strong>{evento.titulo}</strong>
                      <div className="info">{evento.data}</div>
                    </div>
                    <button className="btn-danger" onClick={() => handleCancelar(evento.id)}>
                       Cancelar
                    </button>
                </li>
            ))}
        </ul>
      )}

      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <Link to="/eventos">Buscar Novos Eventos</Link>
      </div>
    </div>
  );
}

export default Dashboard;