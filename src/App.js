import React, { useState } from "react";
import "./App.css";
import { MdPrint } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import DL from "./Images/DL.png";
import admin from "./Images/admin.png";
import setup from "./Images/setup.png";
import sign from "./Images/sign.png";
import moment from "moment";

import { PiCarProfileFill } from "react-icons/pi";
import { PiPersonSimpleBikeBold } from "react-icons/pi";
import { GiFarmTractor } from "react-icons/gi";

function App() {
  const [show, setShow] = useState(false);

  const [image, setImage] = useState();

  const [fName, setFName] = useState("");

    const [SDMName, setSDMName] = useState("");

       const [registrationNumber, setRegistrationNumber] = useState("");

  const [village, setVillage] = useState("");

  const [tehsil, setTehsil] = useState("");

  const [district, setDistrict] = useState("");

  const [bo, setBO] = useState("");

  const [pin, setPin] = useState("");

  const [name, setName] = useState("");

  const [dateValue, setDateValue] = useState(moment());

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDateUpdate = (e) => {
    const dateValue = e.target.value;
    setDateValue(moment(dateValue));
  };

  return (
    <>
      {show ? (
        <div className="popUp">
          <div className="frame dl">
            <img src={DL} alt="" height="100%" width="100%" />
          </div>

          <br />

          <div className="frame front" style={{ border: "1px solid #000" }}>
            <img
              className="bgimg"
              src={setup}
              alt="bg"
              height="100%"
              width="100%"
            />
            <div className="left-part">
              <div className="left-top">
                <div className="photo-left">
                  <img
                    src={!image ? admin : URL.createObjectURL(image)}
                    alt="user"
                    height="90%"
                    Width="90%"
                  />
                </div>
                <div className="photo-right">
                  <p>DLNUMBER</p>
                  <p>NAME</p>
                  <p>S/W/D</p> <br />
                  <p>DOB</p> <br />
                  <p>Blood Grp</p> <br />
                  <p>Address</p> <br />
                </div>
              </div>
              <div className="left-bottom">
                <img
                  src="https://qrcode.kaywa.com/img.php?s=8&d=http%3A%2F%2Fwww.designinc.co.uk%2Fdesign-agency-uk-samples-examples.php"
                  alt="bar-code"
                  height="95%"
                  width="90%"
                />
              </div>
            </div>
            <div className="right-part">
              <div>
                <div className="details">
                  <p className="trs">HR2067554</p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>
                    HR{registrationNumber ? registrationNumber : "Reg No"} 20180003200 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; <sub className="carr">Inv Carr No.</sub>{" "}
                  </p>
                  <p style={{ textTransform: "uppercase" }}>
                    {name ? name : "NAME"}
                  </p>
                  <p style={{ textTransform: "uppercase" }}>
                    {fName ? fName : "FATHER NAME"}
                  </p>
                  <p>
                    {dateValue.format("DD-MMM-YYYY")} &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;{" "}
                    <sub className="validity">
                      Validity{" "}
                      <sup style={{ fontSize: "" }}> (NT) 16-Oct-2038</sup>{" "}
                    </sub>{" "}
                  </p>
                  <p>O+</p>
                  <p style={{ textTransform: "capitalize" }}>
                    {village ? village : "Village"} ({bo ? bo : "01"}){" "}
                    {tehsil}{" "}
                    {district ? district : "District"}, HR
                  </p>
                  <p>{pin ? pin : "123456"}</p>
                </div>
              </div>

              <div className="issueBox" style={{ paddingTop: "30px" }}>
                Issue Date &nbsp; &nbsp; &nbsp;{" "}
                <b style={{ fontWeight: "bold" }}>17-Oct-2018</b>{" "}
              </div>
              <div className="issueBox" style={{ paddingTop: "14px" }}>
                Aadhaar No
              </div>
              <div className="issueBox">
                Authorisation to Drive &nbsp; Date Of issue
              </div>

              <table>
                <tr>
                  <th>LMV</th>
                  <th>
                    <PiCarProfileFill style={{ fontSize: "15px" }} />
                  </th>
                  <th>17-October-2018</th>
                </tr>
                <tr>
                  <th>MCWG</th>
                  <th>
                    <PiPersonSimpleBikeBold style={{ fontSize: "15px" }} />
                  </th>
                  <th>17-October-2018</th>
                </tr>
                <tr>
                  <th>TRACTOR</th>
                  <th>
                    <GiFarmTractor style={{ fontSize: "15px" }} />
                  </th>
                  <th>17-October-2018</th>
                </tr>
              </table>

              <div className="signatures">
                <div>
                  Holder <br /> <br /> <br /> Signature
                </div>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <div>
                  Issue <br /> <br /> <br /> Auth <br /> <br /> <br /> Signature
                </div>
                <div>
                  <img
                    src={sign}
                    alt="authority signature"
                    height="120%"
                    width="100%"
                  />
                </div>
              </div>
              <br />
              <p
                style={{
                  paddingTop: "13px",
                  fontWeight: "bold",
                  fontSize: "13px",
                }}
              >
                Issuing Authority SDM  {SDMName ? SDMName : "SDM Authority"}
              </p>

              <div className="HRMain">
                <div className="hr">HR</div>
                <div className="form">Form-7</div>
              </div>
            </div>
          </div>

          <br />

          <div>
            <button className="close" onClick={() => setShow(false)}>
              Edit <CiEdit />
            </button>
            <button className="close" onClick={() => window.print(false)}>
              Print <MdPrint />
            </button>
          </div>
        </div>
      ) : null}

      {/* inputs start */}

      <center>
        <h1>Create your own licence</h1>
      </center>

      <div className="mainBox">
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input type="date" onChange={(e) => handleDateUpdate(e)} />

        <input
          type="text"
          placeholder="Father Name"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Village"
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Tehsil"
          value={tehsil}
          onChange={(e) => setTehsil(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="District"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          required
        />

        <input
          type="text"
          style={{ textTransform: "uppercase" }}
          placeholder="SDM Authority city"
          value={SDMName}
          onChange={(e) => setSDMName(e.target.value)}
          required
        />

 <input
          type="text"
          placeholder="Vehicle Registration number"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Pin Code"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          maxLength="6"
          required
        />

        <input
          type="text"
          placeholder="BO Number"
          value={bo}
          onChange={(e) => setBO(e.target.value)}
          maxLength="2"
          required
        />

        <button type="submit" onClick={() => setShow(true)}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </>
  );
}

export default App;
