import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <p className="tag">Para você decolar</p>
        <h1 className="titulo">Ultimate</h1>
        
        <p className="preco">
          <span className="amount">R$ 29,97</span>/mês
        </p>
        
        <button className="assinar">Assinar agora</button>
        
        <ul className="beneficios">
          <li>✔ Usuários ilimitados</li>
          <li>✔ Suporte 24/7</li>
          <li>✔ CSM Dedicado</li>
          <li>✔ Treinamentos</li>
        </ul>
      </div>
    </div>
  );
}

export default App;


//npm create vite@latest meu-projeto --template react
//cd meu-projeto
//npm install
//npm run dev ou npm start
