import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './reservas.css';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import { removeReserve, updateAmoutReserve } from '../../redux/modules/reserve/actions';

export default function Reservas() {

  const reserves = useSelector(state => state.reserve)
  const dispatch = useDispatch()

  function handleRemove(id) {
    // console.log(id)
    dispatch(removeReserve(id))
  }

  function decrementQuantidade(trip) {
    dispatch(updateAmoutReserve(trip.id, trip.quantidade - 1))
  }

  function incrementQuantidade(trip) {
    dispatch(updateAmoutReserve(trip.id, trip.quantidade + 1))
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
          <div id='amount'>
            <button type='button' onClick={() => { incrementQuantidade(reserve) }}>
              <MdAddCircle size={25} color="#191919" />
            </button>
            {/* readOnly é para não ter modificações */}
            <input type='text' readOnly value={reserve.quantidade}></input>
            <button type='button' onClick={() => { }}>
              <MdRemoveCircle size={25} color="#191919" onClick={() => { decrementQuantidade(reserve) }} />
            </button>
          </div>

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
