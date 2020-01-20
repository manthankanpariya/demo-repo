

const initialState = {
    counter : 0
  }
  export default  reducer = (state = {counter:0},action) => {
  
    switch(action.type){
      
      case 'INCREASE_COUNTER':
        console.log('Countercheck='+state.counter)
        return {...state,counter : state.counter + 1}
      case 'DECREASE_COUNTER':
        console.log('Countercheck='+state.counter)
        return {...state,counter : state.counter - 1}
    }

    console.log('Countercheck='+state.counter)
    return state  
  }