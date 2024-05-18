import { Fragment, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./schedule.css";

const Content = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // State
  const [selectedBoxes, setSelectedBoxes] = useState(0);
  const [doctorInfo, setDoctorInfo] = useState([]);
  const [table, setTable] = useState([]);

  // function
  const handleClick = (day,index) => {
    setSelectedBoxes(index);
    tableDetails(user.id, day)
  };
 const tableDetails = useCallback((id, day=doctorInfo[0]) => {
  fetch(`https://meditech20240517184700.azurewebsites.net/api/Appointment/appointmentsDoctor/${id}/${day}`)
  .then(async (res) => {
    if(res.ok) {
      const data = await res.json();
      setTable(data)
    }
  })
 }, [doctorInfo])
  // Constants
 const boxes =  doctorInfo.map((el, index) => {
    return (
      <li
        key={index}
        className={`text-center p-5 fs-4 ${
          selectedBoxes === index ? "active" : ""
        }`}
        onClick={() => handleClick(el,index)}
      >
        <p>{el}</p>
      </li>
    );
  })
  const tableInfo = table.map((el) => {
    return (
      <tr key={el.appointmentNumber}>
      <th scope="row" className="fw-bold">
      {el.appointmentNumber}
      </th>
      <td>
        <Link to={`/patients/${el.patientId}`} id="button1" className="border-0 bg-white">
        {el.patient}
        </Link>
      </td>
      <td>{el.date}</td>
    </tr>
    )
  })

  useEffect(() => {
    let isMuted = true;

    fetch(`https://meditech20240517184700.azurewebsites.net/api/Doctor/${user.id}`)
      .then(async (res) => {
        if (!isMuted) return;
        if(res.ok) {
          const data = await res.json();
          tableDetails(user.id, data.workingdays[0])
          setDoctorInfo(data.workingdays)
        }
      })
      return () => {
        isMuted = false;
      }
  }, [tableDetails, user.id]);
  
  return (
    <div className="container schedule" id="tabs">
      <div className="pt-5">
        <h3 className="fw-bold">Schedule</h3>
        <div className="days d-flex   mt-5 mb-5 ">
          <ul className="boxes">
            {boxes}
          </ul>
        </div>
        <div className="section-two pt-5">
        {table.length > 0 ? 
          <Fragment>
          <h3 className="fw-bold">The Day Patients</h3>
        <div id="tabs-1">
          <table className="table table-bordered mt-5 mb-5 ">
            <thead>
              <tr>
                <th scope="col">Number</th>
                <th scope="col" className="fw-bold">
                  Patient Name
                </th>
                <th scope="col" className="fw-bold">
                 Appointment Date
                </th>
              </tr>
            </thead>
            <tbody>
              {tableInfo}
            </tbody>
          </table>
        </div>
        </Fragment>: <h1 style={{marginBottom: "120px", textAlign: "center"}}>Not Found Appointment</h1>}
        </div>
      </div>
    </div>
  );
};

export default Content;
