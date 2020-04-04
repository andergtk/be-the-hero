import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

import logoImg from '../../assets/logo.svg';

export default function SignUp() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    try {
      const response = await api.post('incidents', {
        title,
        description,
        value
      }, {
        headers: {
          Authorization: ongId
        }
      });

      history.push('/profile');
    } catch (e) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section className="info">
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="btn-back" to="/profile">
            <FiArrowLeft className="icon" size={24} color="#E02041" />
            Voltar
          </Link>
        </section>
        <section className="form">
          <form onSubmit={handleNewIncident}>
            <input
              placeholder="Título do caso"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Descrição"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <input
              placeholder="Valor em reais"
              value={value}
              onChange={e => setValue(e.target.value)}
            />

            <button className="btn" type="submit">
              Cadastrar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}