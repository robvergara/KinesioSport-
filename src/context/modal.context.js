import { createContext, useReducer } from "react";


export const ModalContext = createContext();

export const ModalProvider =({children})=>{

  const [state, dispatch] = useReducer(reducer, initialState);

  const onInfo =()=>dispatch({type:actionTypes.info});
  const onConfirm=()=>dispatch({type:actionTypes.confirm});
  const onEdit=()=>dispatch({type:actionTypes.edit});
  const onRegretModal=()=>dispatch({type:actionTypes.regret});

  return(
    <ModalContext.Provider value={{
      state,
      onInfo,
      onConfirm,
      onEdit,
      onRegretModal,
    }}>
      {children}
    </ModalContext.Provider>
  )
}

//MANEJO DE ERRORES CON UN REDUCER
const initialState = {
  info:false,
  confirm:false,
  edit:false
}

const actionTypes ={
  info: "info",
  confirm: "confirm",
  edit:"edit",
  regret: "regret"
}

const reducerObject = (state, payload)=>({
  [actionTypes.info]: {
    ...state,
    info:true,
    confirm:false,
    edit:false,
  },
  [actionTypes.confirm]:{
    ...state,
    info:false,
    confirm:true,
    edit:false,

  },
  [actionTypes.edit]:{
    ...state,
    info:false,
    confirm:false,
    edit:true,
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