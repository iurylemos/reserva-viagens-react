import React, { useState, useEffect } from 'react'
//Responsável por disparar uma ação pro redux
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import { MdFlightTakeoff } from 'react-icons/md'
import './home.css';

export default function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips')

      setTrips(response.data)

      console.log(response.data)
    }

    loadApi();
  }, [])

  //Aqui eu passo toda a viagem que ele adiciona
  function handleAdd(trip) {
    // console.log(trip)
    dispatch({
      type: 'ADD_RESERVE',
      trip
    })
  }


  return (
    <div>
      <div className="box">
        {trips.map(trip => (
          <li key={trip.id}>
            <img src={trip.image} alt="imagem" />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>
            <button type="button" onClick={() => { handleAdd(trip) }}>
              <div>
                <MdFlightTakeoff size={16} color="#FFF" />
              </div>
              <span>
                SOLICITAR RESERVA
              </span>
            </button>
          </li>
        ))}
      </div>
    </div>
  )
}