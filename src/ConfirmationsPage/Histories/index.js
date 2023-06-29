import { useContext, useEffect } from "react";
import { FormsContext } from "../../context/forms.context";
import { getAllHistories } from "../../services/admissions.services";
import { NavLink } from "react-router-dom";
// import { tabMenu } from "../Tabs";

export const Histories = () => {
  const { histories, setHistories, tabMenu, setTabMenu, initialValues } =
    useContext(FormsContext);
  //  console.log(histories)

  const cedula = initialValues.cedula_numero;

  useEffect(() => {
    const getHistorial = async (cedula) => {
      const list = await getAllHistories(cedula);
      const admissionList = list.filter(
        (item) => item.plantilla === "649c74bd0c9afe310ec1a5b8"
      );
      // console.log(list);
      setHistories(admissionList);
    };
    getHistorial(cedula);
  }, [cedula]);

  const viewLog = (log) => {
    // console.log(tabMenu);
    const list = [...tabMenu];
    list.push(log);
    // console.log(list)
    setTabMenu(list);
  };
  return (
    <>
      {/* <h5>Historial de registro</h5> */}
      {!!histories && (
        <>
          {histories.error ? (
            <>
              <h2>{histories.message} ALOJA</h2>
            </>
          ) : (
            <>
              <ul className="list-group list-group-flush">
                {histories.map((history) => {
                  const date = history.date.substring(0, 10);
                  return (
                    <li className="list-group-item p-1">
                      <NavLink
                        className="nav-link"
                        onClick={() => viewLog(history._id)}
                      >
                        <div className="d-flex">
                          <div className="flex-grow-1 align-self-center">
                            <b>{history.body[0].campos[0].valor}</b>
                          </div>
                          <div className='align-self-center'>{date}</div>
                          <div className="ms-2">
                            {history.pago ? (
                              <>
                                <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center pagado bg-gradient">
                                  <i className="fa-solid fa-hand-holding-dollar"></i>
                                </span>
                              </>
                            ) : (
                              <>
                              <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center no-pagado bg-gradient">
                              <i className="fa-solid fa-sack-xmark"></i>
                                </span>
                  
                              </>
                            )}
                          </div>
                        </div>
                        {/* <b>{date}</b> */}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
};
