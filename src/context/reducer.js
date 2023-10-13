import appInitialState from "@/context/appState";

export const actionTypes = {
  LOGIN: "login",
  LOGOUT: "logout",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        fname: action?.payload?.fname,
        lname: action?.payload?.lname,
        personalID: action?.payload?.personalID,
        role: action?.payload?.role,
        username: action?.payload?.username,
      };
    case actionTypes.LOGOUT:
      return appInitialState;
    default:
      return { ...state };
  }
};
