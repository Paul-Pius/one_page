import React from "react";
import "./design.css";
import designlogo from "../img/designlogo.jpeg";
import woman from "../img/woman.png";
import shape from "../img/shape.png";
import redcircle from "../img/redcircle.png";
import greenrec from "../img/greenrec.png";
import line from "../img/line.png";
import square1 from "../img/square1.png";
import square2 from "../img/square2.png";
import loc from "../img/loc.png";
import cyl from "../img/cyl.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb} from '@fortawesome/free-solid-svg-icons';

const Design = () => {

  return (
        <div className="backgroundcontainer">
                <div className="circle">
            
                </div>

                <div className="redcirclediv">
                        <h1 className="sixx">6</h1>
                    <div className="six">
                        <p>Buy</p>
                        <p style={{fontWeight: "bold"}}>Plots</p>
                        <p style={{fontWeight: "bold"}}>& Get</p>
                        <p style={{fontWeight: "bold"}}>1 Free</p>
                    </div>
                    <img className="redcircleimg" src={redcircle} alt="redcircle"></img>
                </div>

                <div className="cyldiv">
                    <img className="cylimg" src={cyl} alt="cyl"></img>
                </div>
                <div className="greenrecdiv">
                    <div className="initial">
                        <span className="init">Initial Deposit</span>
                        <h1 className="deposit">#400,000</h1>
                    </div>

                    <div className="price2">
                        <span style={{color: "#FCAF30", fontSize: "20px", marginLeft: "4rem"}}>PRICE IS:</span> <br />
                        <span style={{marginRight: "1.5rem"}}>#650,000 | 300</span> <br />
                        <span style={{marginTop: "-0.5rem", fontSize: "15px", position: "absolute", marginLeft: "10.7rem"}}>sqm</span>
                        <span>#1,000,000 | 500</span>
                        <span style={{marginTop: "1.7rem", fontSize: "15px", marginLeft: "-2.5rem", position: "absolute"}}>sqm</span>
                    </div>

                    <div className="blackdiv">
                        <div className="blkdetails">
                            <span style={{
                                fontSize: "10px", 
                                marginLeft: "3.8rem",
                                fontWeight: "bold"
                                }}>Available In:</span> <br />

                            <h2 style={{marginTop: "-0.5rem", fontWeight: "bold", marginLeft: "2rem"}}>300</h2>
                            <h2 style={{
                                color: "#FCAF30", 
                                fontSize: "40px",
                                marginTop: "-3rem",
                                marginLeft: "5rem",
                                marginBottom: "-4.8rem"
                                }}>&</h2>

                            <h2 style={{marginLeft: "6.7rem", marginTop: "1.8rem", fontWeight: "bold"}}>500</h2>
                        </div>
                        <p style={{
                            color: "#fff", 
                            marginTop: "2.3rem", 
                            position: "absolute", 
                            marginLeft: "2.8rem", 
                            fontWeight: "bold"}}>sqm</p>

                        <p style={{
                            color: "#fff", 
                            marginTop: "2.3rem", 
                            position: "absolute", 
                            marginLeft: "6.7rem", 
                            fontWeight: "bold"}}>sqm</p>
                    </div>
                    <img className="greenrecimg" src={greenrec} alt="greenrec"></img>
                </div>

                <div className="womandiv">
                    <img className="womanimg" src={woman} alt="woman"></img>
                </div>

                <div className="shape1div">
                    <div className="tf">
                        <p className="title">TITLE:</p>
                        <h2 className="free">FREE HOLD</h2>
                        <div className="feature">
                            <span>FEATURES</span>
                        </div>
                    </div>

                    <div className="list">
                    <FontAwesomeIcon icon={faLightbulb} />
                        <span>Electricity</span> <br />
                        <span>Recreation</span> <br />
                    <FontAwesomeIcon icon={faRoad} />
                        <span>Good Road</span> <br />
                        <span>Drainage</span> <br />
                    <FontAwesomeIcon icon={faLock} />
                        <span>Security</span> <br />
                    <FontAwesomeIcon icon={faWater} />
                        <span>Portable Water</span> <br />
                        <span>Landscaping</span> <br />
                        <span>Perimeter Fencing</span> <br />
                    <FontAwesomeIcon icon={faLightbulb} />
                        <span>Street Light</span>
                    </div>
                    <img className="shape1img" src={shape} alt="shape"></img>
                </div>

                <div className="logodiv">
                    <div className="vienna">
                        <h4>VIENNA</h4>
                    </div>
                    <img className="logo" src={designlogo} alt="designlogo"></img>
                </div>

                <div className="gardensdiv">
                    <h1 className="garden">
                        GARDENS
                    </h1>
                    <h2 className="propadi">
                        Propadi
                    </h2>
                </div>

                <div className="epe">
                    <p className="mojoda">
                        MOJODA, EPE
                    </p>
                    <p className="assistant">
                        ...your property assistant
                    </p>
                </div>
                

                <footer>
                    <div className="linediv">
                        <img className="lineimg" src={line} alt="line"></img>
                    </div>
                        <p style={{color: "#fff", marginLeft: "46rem", position: "absolute", marginTop: "83.2rem"}}>6 Months Plan Available</p>
                        <p style={{color: "#fff", marginLeft: "54.5rem", position: "absolute", marginTop: "86rem", fontSize: "35px"}}>L A N D M A R K</p>
                        <p style={{color: "#fff", marginLeft: "2rem", position: "absolute", marginTop: "86rem", fontSize: "35px"}}>SITE INSPECTION TAKE PLACE ON</p>
                        <p style={{color: "#fff", marginLeft: "2rem", position: "absolute", marginTop: "88.5rem", fontSize: "35px", fontWeight: "bold"}}>WEDNESDAY & SATURDAY</p>
                        <p style={{color: "#fff", marginLeft: "6rem", position: "absolute", marginTop: "100rem", fontSize: "35px"}}>315 HERBERT MACAULEY WAY SABO</p>
                        <p style={{color: "#fff", marginLeft: "6rem", position: "absolute", marginTop: "102.2rem", fontSize: "35px"}}>YABA LAGOS</p>
                        <p style={{color: "#FCAF30", marginLeft: "58rem", position: "absolute", marginTop: "90rem", fontSize: "25px"}}>YABATECH</p> <br />
                        <p style={{color: "#FCAF30", marginLeft: "53rem", position: "absolute", marginTop: "90.5rem", fontSize: "25px"}}>AUGUSTINE UNIVERSITY</p>
                        <p style={{color: "#fff", marginLeft: "56rem", position: "absolute", marginTop: "95.5rem", fontSize: "20px"}}>ACCOUNT DETAILS</p>
                        <p style={{color: "#FCAF30", marginLeft: "58rem", position: "absolute", marginTop: "98rem", fontSize: "20px"}}>0465073660</p>
                        <p style={{color: "#FCAF30", marginLeft: "55rem", position: "absolute", marginTop: "100.5rem", fontSize: "20px"}}>Propadi Limited | GTBank</p>

                    <div className="square2div">
                        <img className="square2img" src={square2} alt="square2"></img>
                    </div>

                    <div className="square1div">
                        <div className="locdiv">
                            <img className="locimg" src={loc} alt="loc"></img>
                        </div>
                        <img className="square1img" src={square1} alt="square1"></img>
                    </div>

                </footer>
        </div>
  )
}

export default Design;