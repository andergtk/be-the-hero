import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

import logoImg from '../../assets/logo.svg';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleSignUp(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (e) {
      alert('Erro no cadastro da ONG');
    }
  }

  return (
    <div className="signup-container">
      <div className="content">
        <section className="info">
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="btn-back" to="/">
            <FiArrowLeft className="icon" size={24} color="#E02041" />
            Já tenho cadastro
          </Link>
        </section>
        <section className="form">
          <form onSubmit={handleSignUp}>
            <input
              placeholder="Nome da ONG"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              placeholder="WhatsApp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />

            <div className="input-group">
              <input
                placeholder="Cidade"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
              <input
                placeholder="UF"
                value={uf}
                onChange={e => setUf(e.target.value)}
                style={{ width: 80 }}
              />
            </div>

            <button className="btn" type="submit">
              Cadastrar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}