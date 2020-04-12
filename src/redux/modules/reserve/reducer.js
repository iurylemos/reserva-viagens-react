import produce from 'immer';

export default function reserve(state = [], action) {
  // console.log(state)
  // console.log(action)
  //Caso tenha o ação de adicionar uma reserva ele faz uma ação
  //Que vai ser adicionar no array que é o state
  //Caso não ele retorna o state como padrão

  //como o state ele é imutável e não posso dar um push diretamente
  //Em objetos iguais, vou instalar o immer
  //E com o immer posso utilizar todas as funções de javascript
  //Sem se importar com a parte de imutabilidade

  switch (action.type) {
    case 'ADD_RESERVE':
      // Estou pegando tudo que tem no array com o ...state
      //E adicionando o conteudo com o action.trip
      //draft é uma copia do state

      return produce(state, drafState => {
        //Verificar se já existe algum state igual ao que estou adicionando
        //Faço isso usando o find index que é um objeto
        const tripIndex = drafState.findIndex(trip => trip.id === action.trip.id)

        //Se já existir ele só adicionar mais um na quantidade
        //Se não ele vai adicionar todo o trip
        if (tripIndex >= 0) {
          drafState[tripIndex].quantidade += 1
        } else {
          drafState.push({
            ...action.trip,
            quantidade: 1
          })
        }

      })

    case 'REMOVE_RESERVE':
      return produce(state, draftState => {
        const tripIndex = draftState.findIndex(trip => trip.id === action.id)

        //Excluindo o primeiro posição do objeto com o splice
        if (tripIndex >= 0) {
          draftState.splice(tripIndex, 1);
        }
      })

    default:
      return state;
  }
}