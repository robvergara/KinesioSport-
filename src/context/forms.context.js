import { useReducer, useState, createContext, useEffect, useContext } from "react"
import { createAdmission, getLayout, getOneHistory } from "../services/admissions.services";
import { ModalContext } from "./modal.context";
// import {getPatientByCedula} from "../services/register.services"

// import { useNavigate } from "react-router";
export const admissionToken = "64594b727512a02cd4c0b040"
export const valorationToken = "645915e11a36206c6d6d7e80"
export const evaluationToken = "645914d61a36206c6d6d7e7d"

export const FormsContext = createContext();

export const FormsProvider=({children})=>{
  const {onInfo} = useContext(ModalContext)
  const [layout, setLayout] = useState()
  const [search, setSearch] = useState()
  const [initialValues, setInitialValues] = useState()
  const [section, setSection] = useState()
  const [histories, setHistories] = useState()
  //ESTADOS PATA EL PESTAÑEADO
  const [tabMenu, setTabMenu] = useState([])
  const [tabList, setTabList] = useState([])
  const [activeTab, setActiveTab] = useState("main");
  const [dataTabs, setDataTabs] = useState();

  const [state, dispatch] = useReducer(reducer, initialState);

  const onAdmission=()=>{dispatch({type: actionTypes.admission})}
  const onEvaluation=()=>{dispatch({type: actionTypes.evaluation})}
  const onValoration=()=>{dispatch({type: actionTypes.valoration})}
  const onRegret=()=>{dispatch({type: actionTypes.regret})}


  // console.log(state)
  // const getTemplate = async()=>{
  //   if(state.admission){
  //     const template = await getLayout(admissionToken);
  //     // console.log(template)
  //     setLayout(template[0]);
      
  //   }
  //   if(state.evaluation) {
  //     const template = await getLayout(evaluationToken);
  //     // console.log(template[0])
  //     setLayout(template[0]);
      
  //   }
  //   if(state.valoration) {
  //     const template = await getLayout(valorationToken);
  //     // console.log(template)
  //     setLayout(template[0]);
      
  //   }
  //   // console.log(state)
  //   return
  // }


  const onSubmit =async(e)=>{
    e.preventDefault()
    // console.log(body)
    const saveParams= (section)=>{

      const keys = Object.keys(section)
      const values = Object.values(section)
  
      const campos = []
      for (let index = 0; index < keys.length; index++) {
        campos.push( {
          titulo: keys[index],
          valor: values[index],
          tipo: typeof(values[index]),
          opciones : typeof(values[index]) !== "select"? [] : [1]
        })
        
      }
      return campos
    }

    const saveSections =(section)=>{
      const keys = Object.keys(section);
      const values = Object.values(section);
      // console.log(keys)
      // console.log(values)

      const secciones = []

      for (let i = 0; i < keys.length; i++) {
        secciones.push({
          titulo: keys[i],
          campos: saveParams(values[i])
        })
        
      }
      return secciones
    }


    const data = {
      body: Object.values(saveSections(section)),
      cedula_tipo:initialValues.cedula_tipo,
      cedula_numero: initialValues.cedula_numero,
      nombre: layout.nombre,
      plantilla: layout._id,
      usuario_instancia: initialValues.nombre,
      usuario_creacion: initialValues.user,
      pago: true,
      valor : "50000"
  
    }
    // console.log(data)
    const res = await createAdmission(data)
    // console.log(res)
    onRegret();
    onInfo();
  }

  const onBack=()=>{
    setInitialValues(null);
  }

  const getLog= async(id) =>{
    const res = await getOneHistory(id);
    console.log(res)
  }

  return(
    <FormsContext.Provider
      value={{
        setSearch,
        setSection,
        onAdmission,
        onEvaluation,
        onValoration,
        onRegret,
        onSubmit,
        // getTemplate,
        onBack,
        setLayout,
        setInitialValues,
        setHistories,
        getLog,
        setTabMenu,
        setTabList,
        setActiveTab,
        setDataTabs,
        dataTabs, 
        activeTab, 
        tabList, 
        histories, 
        section,
        layout,
        state,
        search,
        initialValues,
        tabMenu 
      }}
    >
      {children}
    </FormsContext.Provider>
  )
}

//ESTADOS DEL REDUCER
const initialState = {
  admission: false,
  evaluation: false,
  valoration: false
}

const actionTypes= {
  admission: "ADMISSION",
  valoration: "VALORATION",
  evaluation: "EVALUATION",
  regret: "REGRET"
}

const reducerObject= (state, payload)=>({
  [actionTypes.admission]:{
    ...state,
    admission: true,
    evaluation: false,
    valoration: false
  },
  [actionTypes.evaluation]:{
    ...state,
    admission: false,
    evaluation: true,
    valoration: false
  },
  [actionTypes.valoration]:{
    ...state,
    admission: false,
    evaluation: false,
    valoration: true
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