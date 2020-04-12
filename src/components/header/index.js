import React from 'react';
//Responsável por conectar o redux com os reducers
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg';
import './header.css'

export default function Header() {

  const reservaSize = useSelector(state => state.reserve)

  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reservaSize.length} Reservas</span>
        </div>
      </Link>
    </header>
  )
}