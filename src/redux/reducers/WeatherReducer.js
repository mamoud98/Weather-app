const initialState = {
  countries: ["Gaza", "London", "Tunisia"],
};

const getDataReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_COUNTRY_NAME":
      return { ...state, countries: state.countries.push(action.payload) };
    default:
      return state;
  }
};

export default getDataReducer;
