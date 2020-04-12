export default function reserve(state = [], action) {
  console.log(state)
  // console.log(action)
  //Caso tenha o ação de adicionar uma reserva ele faz uma ação
  //Que vai ser adicionar no array que é o state
  //Caso não ele retorna o state como padrão
  switch (action.type) {
    case 'ADD_RESERVE':
      // Estou pegando tudo que tem no array com o ...state
      //E adicionando o conteudo com o action.trip

      return [...state, action.trip];
    default:
      return state;
  }
}