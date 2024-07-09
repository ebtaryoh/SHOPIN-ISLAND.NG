const initialState = {
    someState: '',
  };
  
  const someReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SOME_STATE':
        return {
          ...state,
          someState: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default someReducer;
  