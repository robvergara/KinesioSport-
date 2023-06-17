import { createContext, useContext, useState } from "react";
import { deleteUser, getUserByCedula, updateUser } from "../services/user.services";
import { ModalContext } from "./modal.context";

export const UserContext = createContext();

export const UserProvider=({children})=>{
  const {      
    state,
    onInfo,
    onConfirm,
    onEdit,
    onRegretModal,
  }= useContext(ModalContext);

  const [value, setValue] = useState('');
  const [user, setUser] = useState();
  const [list, setList] = useState();
  const [res, setRes] = useState(null);
  const [editUserId, setEditUserId] = useState();
  const [changeUser, setChangeUser] = useState();
  const [infoModal, setInfoModal] = useState(false);

  const onHandleSearch = (e)=>{
    setValue(e.target.value);
  }
  //FUNCION BUSQUEDA DE USUARIO
  const onSearch = async (e) => {
    // console.log(value)
    e.preventDefault();
    const res = await getUserByCedula(value);
    console.log(res);
    setUser(res);
  };
  //FUNCION ELIMINAR USUARIO
  const delUser = async (id) => {
    // e.preventDefault();
    console.log(id);
    const res = await deleteUser(id);
    res.message = "usuario eliminado con exito!";
    setRes(res);
    onInfo();
    setTimeout(() => {
      setUser(null);
      window.location.reload()
    }, 2000);
    // return res
  };
  //FUNCION REGRESAR ESTADO DEL MODAL
  const onRegret = (e) => {
    e.preventDefault();
    setUser(null);
  };
  //FUNCION PARA MOSTRAR LOS INPUT PARA CAMBIAR LOS DATOS DE UN USUARIO
  const editFields =(e,id)=>{
    e.preventDefault();
    onEdit();
    // setEdit(true);
    setEditUserId(id)
  }

  const handleClose = () => setShow(false);

  //MANEJADOR DE DATOS DEL USUARIO A CAMBIAR 
  const handleEditUser = (e)=>{
    const {name, value} = e.target;
    setChangeUser(prevState=>({
      ...prevState,
      [name]:value
    }))
  }
  
  //ENVIAR LOS CAMPOS EDITADOS DEL USUARIO
  const changeFields=async(e)=>{
    e.preventDefault();
    // console.log(editUserId,changeUser);
    const res = await updateUser(editUserId,changeUser);
    // console.log(res);
    onInfo();
    // handleClose
    // setInfoModal(true)
    setTimeout(() => {
      window.location.reload()
    }, 2000);
  }

  const setStates = {
    setValue,
    setUser,
    setList,
    setRes,
    setEditUserId,
    setChangeUser,
    setInfoModal
  }

  const states = {
    value,
    user,
    list,
    res,
    editUserId,
    changeUser,
    infoModal
  }

  const functions = {
    onHandleSearch,
    onSearch,
    onRegret,
    delUser,
    editFields,
    handleEditUser,
    changeFields,
    handleClose,
  }

  return(
    <UserContext.Provider
      value={{
        states,
        setStates,
        functions
      }}
    >
      {children}
    </UserContext.Provider>
  )
}