import { useContext, useEffect } from "react";
import { getAllUsers } from "../../services/user.services";
import { UserContext } from "../../context/users.context";
import { ConfirmationModal } from "../../Modal/ConfirmationModal";
import { InfoModal } from "../../Modal/InfoModal";
import { EditUserModal } from "../../Modal/EditUserModal";
import { ModalContext } from "../../context/modal.context";

export const UserTable = () => {
  const { state, onConfirm, onRegretModal } = useContext(ModalContext);

  const { states, setStates, functions } = useContext(UserContext);
  const { res, value, list } = states;
  const { setList, setShow } = setStates;
  const { delUser, editFields } = functions;

  let usersList = [];

  useEffect(() => {
    const userList = async () => {
      const res = await getAllUsers();
      // console.log(res);
      setList(res);
    };
    userList();
  }, []);

  if (!value.length >= 1) {
    usersList = list;
    // console.log(usersList)
  } else {
    usersList = list.filter((usuario) => {
      const cedula = usuario.cedula;
      return cedula.includes(value);
    });
    // console.log(usersList)
  }

  const handleShow = () => {
    onConfirm();
  };

  const deleteUser = (e,id)=> {
    handleShow(); 
    editFields(e,id);
    onConfirm();
  }

  return (
    <>
      <div className="container-fluid py-4 ">
        <div className="row">
          <div className="col-12">
            <div className="card my-3 border-0">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent border-0">
                <div className="fondo-kinesio shadow-primary border-radius-lg pt-4 pb-3 rounded-3 shadow shadow">
                  <h6 className="text-white text-capitalize ps-3">Usuarios</h6>
                </div>
              </div>
              <div className="card-body px-0 pb-2 bg-transparent shadow rounded border-0">
                <div className="table-responsive p-0 border-0">
                  <table className="table align-items-center mb-0 border-0">
                    {/* EMCABEZADO DE LA TABLA */}
                    <thead>
                      <tr>
                        <th className="text-uppercase ps-3 w-50">Usuario</th>
                        <th className="text-uppercase ps-2 w-25">Cedula</th>
                        <th className="text-center text-uppercase w-10">
                          Status
                        </th>
                        <th className="text-center text-uppercase w-10"></th>
                      </tr>
                    </thead>

                    {/* CUERPO DE LA TABLA */}
                    <tbody className="border-0">
                      {!!usersList &&
                        usersList.map((user) => (
                          <>
                            <tr className="border-0">
                              {/* NOMBRE DE USUARIOS */}
                              <td className="border-0">
                                <div className="d-flex px-2 py-1">
                                  <div>
                                    <img
                                      src="./kinesio-sinfondo.png"
                                      alt="mdo"
                                      width="24"
                                      height="24"
                                      className="avatar avatar-sm me-3 border-radius-lg"
                                    />
                                  </div>
                                  <div className="d-flex justify-content-center">
                                    <p className="mb-0 me-1 text-sm nombre">
                                      {user.nombre}
                                    </p>
                                    <p className="mb-0 text-sm nombre">
                                      {user.apellido}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              {/* CEDULA */}
                              <td className="d-flex align-items-center border-0">
                                <div className="d-flex py-1 ">
                                  <div className="d-flex flex-column justify-content-center">
                                    <p className="mb-0 text-sm cedula">
                                      {user.cedula}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              {/* STATUS */}
                              <td className="align-middle text-center text-sm border-0">
                                {user.status === 0 ? (
                                  <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center master bg-gradient">
                                    MASTER
                                  </span>
                                ) : user.status === 1 ? (
                                  <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center admin bg-gradient">
                                    ADMIN
                                  </span>
                                ) : (
                                  <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center fisio bg-gradient">
                                    FISIO
                                  </span>
                                )}
                              </td>

                              {/* BOTONES DE ACCION DE USUARIOS */}
                              <td className="align-middle text-center border-0">
                                <div className="d-flex px-2 justify-content-center">
                                {user.status != 0 && (<>
                                  <div className="d-flex flex-column justify-content-center">
                                    
                                    {/* BOTON EDITAR */}
                                    <button
                                      className="btn btn-primary btn-sm me-2 my-0"
                                      onClick={(e) => editFields(e, user._id)}
                                    >
                                      <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                  </div>
                                  <div className="d-flex flex-column justify-content-center">

                                    {/* BOTON ELIMINAR*/}
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm my-0"
                                      onClick={(e)=> deleteUser(e, user._id)}
                                    >
                                      <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                  </div>
                                </>)}
                                </div>
                              </td>
                            </tr>

                            {/* MODAL DE CONFIRMACION PARA ELIMINAR EL USUARIO DE ESTADOS */}
                            {state.confirm && (

                              <ConfirmationModal
                                deleteUser={delUser}
                              />
                            )}
                            {/* MODAL PARA INFORMAR QUE SE ELIMINO EL USUARIO CORRECTAMENTE */}
                            {res && (
                              <InfoModal
                                message={res.message}
                                show={state.info}
                                onRegret={onRegretModal}
                              />
                            )}
                          </>
                        ))}
                    </tbody>
                    {/* MODAL PARA EDITAR EL USUARIO */}
                    {state.edit && <EditUserModal show={state.edit} />}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
