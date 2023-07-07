import { useContext, useEffect, useState } from "react";
import { FormsContext } from "../../context/forms.context";
import { ModalContext } from "../../context/modal.context";
import { getAllHistories } from "../../services/admissions.services";
import { PaymentModal } from "../../Modal/PaymentModal";
// import { tabMenu } from "../Tabs";

export const Histories = ({ setAdmissionId }) => {
  const { state, onPayment } = useContext(ModalContext);
  const [admissionData, setAdmissionData] = useState();

  const { histories, setHistories, initialValues } = useContext(FormsContext);
  //  console.log(histories)

  const cedula = initialValues.cedula_numero;

  useEffect(() => {
    setAdmissionId(null);
    const getHistorial = async (cedula) => {
      const list = await getAllHistories(cedula);
      const admissionList = list.filter(
        (item) => item.plantilla === "649c74bd0c9afe310ec1a5b8"
      );
      // console.log(admissionList);
      setHistories(admissionList);
    };
    getHistorial(cedula);
  }, [cedula]);

  const viewLog = (log) => {
    // console.log(log)
    setAdmissionId(log);
  };

  const showPaymentModal = (e, data) => {
    e.preventDefault();
    // console.log(data);
    setAdmissionData(data);
    onPayment();
  };

  return (
    <>
      {/* <h5>Historial de registro</h5> */}
      {!!histories && (
        <>
          {histories.length >= 1 ? (
            <ul className="list-group list-group-flush">
              {histories.map((history) => {
                const date = history.date.substring(0, 10);
                return (
                  <>
                    {state.payment && (
                      <>
                        <PaymentModal data={admissionData} />
                      </>
                    )}

                    <li className="list-group-item p-1">
                      <div className="nav-link">
                        <div className="d-flex">
                          <div
                            onClick={() => viewLog(history._id)}
                            className="flex-grow-1 align-self-center"
                          >
                            {history.body[0].campos[0].valor.valor ? (
                              <b>{history.body[0].campos[0].valor.valor}</b>
                            ) : (
                              <b>{history.body[0].campos[0].valor}</b>
                            )}
                          </div>
                          <div className="align-self-center">{date}</div>
                          <div className="ms-2">
                            {history.pago ? (
                              <>
                                <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center pagado bg-gradient">
                                  <i className="fa-solid fa-hand-holding-dollar"></i>
                                </span>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={(e) => showPaymentModal(e, history)}
                                  className='btn border-0 m-0 p-0'
                                  // className="badge badge-sm mb-0 text-sm flex-column justify-content-center no-pagado bg-gradient"
                                >
                                  <span className="badge badge-sm mb-0 text-sm flex-column justify-content-center no-pagado bg-gradients">
                                    <i className="fa-solid fa-sack-xmark"></i>
                                  </span>
                                  {/* <i className="fa-solid fa-sack-xmark"></i> */}
                                </button>
                              </>
                              // <>
                              // <button
                              //   onClick={(e)=>showPaymentModal(e,history)}
                              //   className="badge badge-sm mb-0 text-sm flex-column justify-content-center no-pagado bg-gradient"
                              // >
                              // <i className="fa-solid fa-sack-xmark"></i>
                              //   </button>

                              // </>
                            )}
                          </div>
                        </div>
                        {/* <b>{date}</b> */}
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          ) : (
            <>
              <div className="nav-link"> No hay admisiones creadas</div>
            </>
          )}
        </>
      )}
    </>
  );
};
