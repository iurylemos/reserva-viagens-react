//Todas as actions responsável pelas reservas

export function addReserve(trip) {
  return {
    type: 'ADD_RESERVE',
    trip
  }
}

export function removeReserve(id) {
  return {
    type: 'REMOVE_RESERVE',
    id
  }
}