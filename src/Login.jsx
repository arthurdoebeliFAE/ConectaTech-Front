import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Importante: Mantive seu link do Render
    const resposta = await fetch('https://api-conectatech.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const dados = await resposta.json();

    if (dados.sucesso) {
      navigate('/dashboard');
    } else {
      alert("Erro: " + dados.mensagem);
    }
  };

  return (
    <div className="container">
      <div className="login-card">
        <h2>🔐 Acesso Restrito</h2>
        <input 
          type="email" 
          placeholder="E-mail" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar no Sistema</button>
        <br /><br />
        <Link to="/eventos">Visitante (Sem Login)</Link>
      </div>
    </div>
  );
}

export default Login;