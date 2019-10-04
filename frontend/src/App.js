import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState(''); // estado da sessão

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', {
      email
    });
    console.log(response);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email"
            id="email" 
            placeholder="Seu melhor e-mail"
            onChange={event => setEmail(event.target.value)} // arrowFunction setEmail
          />
          <button type="submit" className="btn">Entrar</button>

        </form>
      </div>
    </div>
  );
}

export default App;
