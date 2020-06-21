const counterReducer = (state, action) => {
    switch(action) {
      case 'INCREMENT':
        return state + 1;
        default:
            return state + 0;   
    }
  }
  export default counterReducer;