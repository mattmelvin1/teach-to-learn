const default_state = {
  classes: [
    {
      id: 1,
      name: '1st Period Science'
    },
    {
      id: 2,
      name: '2nd Period Biology'
    }
  ]
};

function classReducer(state = default_state, action) {

  if (action.type === "ADD_CLASS") {
    return Object.assign({}, state, { classes: Object.assign({}, state.classes, { [action.payload.field]: action.payload.value }) });
  }
  else {
    return state;
  }

}

export default classReducer;