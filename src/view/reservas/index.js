import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './reservas.css';
import { MdDelete } from 'react-icons/md';
import { removeReserve } from '../../redux/modules/reserve/actions';

export default function Reservas() {

  const reserves = useSelector(state => state.reserve)
  const dispatch = useDispatch()

  function handleRemove(id) {
    // console.log(id)
    dispatch(removeReserve(id))
  }

  console.log('MINHAS RESERVAS', reserves)

  return (
    <div>
      <h1 className="title">
        Você solicitou: {reserves.length} Reservas
      </h1>
      {reserves.map(reserve => (
        <div key={reserve.id} className="reservas">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.quantidade}</span>
          <button type='button' onClick={() => { handleRemove(reserve.id) }}>
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
      ))}

      <footer>
        <button type="button">Solicitar reservas</button>
      </footer>
    </div>
  )
}
