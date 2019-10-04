import React, { useState } from 'react';
import api from '../../services/api';

export default function Login( { history } ){
    const [email, setEmail] = useState(''); // estado da sessão

    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await api.post('/sessions', {
        email
      });
  
      const { _id } = response.data;
  
      localStorage.setItem('user', _id); //um storage do próprio navegador.
  //este localStorage pode ser visto pela ferramenta do desenvolvedor do navegador, em application, na parte de Storage, Local Storage, página da aplicação.
  
      //console.log(_id);
      history.push('./dashboard');
    }

    return (
        <>
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
        </>
    )
}
