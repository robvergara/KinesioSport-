import { createContext, useReducer } from "react";


export const ErrorContext = createContext()

export const ErrorProvider = ({children})=>{

  const [state, dispatch] = useReducer(reducer, initialState);

  const onPasswordError =()=>dispatch({type: actionTypes.errorPassword})
  const onUserError= ()=> dispatch({type: actionTypes.errorUser})
  const onRegret = ()=> dispatch({type: actionTypes.regret})

  return(
    <ErrorContext.Provider value={{
      state,
      onPasswordError,
      onUserError,
      onRegret
    }}>
      {children}
    </ErrorContext.Provider>
  )
}

//MANEJO DE ERRORES CON UN REDUCER
const initialState = {
  errorUser:false,
  errorPassword:false,
}

const actionTypes ={
  errorPassword: "errorPassword",
  errorUser: "errorUser",
  regret: "regret"
}

const reducerObject = (state, payload)=>({
  [actionTypes.errorUser]: {
    ...state,
    errorUser:true,
    errorPassword:false,
  },
  [actionTypes.errorPassword]:{
    ...state,
    errorUser:false,
    errorPassword:true,

  },
  [actionTypes.regret]:{
    ...initialState
  }
})

const reducer = (state, action)=>{
  if(reducerObject(state)[action.type]){
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
}