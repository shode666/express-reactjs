const INITIAL_STATE = { exampleNumber : -1 };

export default (state = INITIAL_STATE, action) =>{
  switch (action.type) {
    case "EXAMPLE/NUMBER":
      return {...state, exampleNumber: action.payload}
    default:
      return state;
  }

};