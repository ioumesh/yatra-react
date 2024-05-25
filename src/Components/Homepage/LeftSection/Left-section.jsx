import React, { useState } from "react";
import styles from "./Css/Left-section.module.css";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { YatraDatePicker } from "./../../Utility/YatraDatePicker";

function Leftsection() {
  const [countAdult, setAdultCount] = useState(1);
  const [countChild, setChildCount] = useState(0);
  const [countInfant, setInfantCount] = useState(0);
  const [selectPreference, setSelectPreference] = useState(false);

  const handleDateChange = (date) => {
    date = new Date(date).toISOString();
    var any = date.split("T")[0];
    setFlightBookingData({ ...flightBookingData, departureDate: any });
  };

  const handlePreference = () => {
    setSelectPreference((prev) => !prev);
  };

  const initValue = {
    origin: "",
    originCode: "",
    destination: "",
    destinationCode: "",
    departureDate: "",
    travellers: {
      adults: 0,
      kids: 0,
      infants: 0,
    },
    travelClass: 0,
  };

  const [flightBookingData, setFlightBookingData] = useState(initValue);

  return (
    <>
      <div className={styles.leftSection}>
        <div className={styles.box}>
          <div className={styles.r1}>
            Book Flights, Hotels and Holiday Packages
          </div>
          <div className={styles.searchSection}>
            <div className={styles.btn}>
              <button>One Way</button>
              <button>Round Trip</button>
              <button>Multi-City</button>
            </div>
            <div className={styles.dbg}>
              <div className={styles.dep}>
                <div style={{ fontSize: "14px", color: "#A19F9D" }}>
                  Depart From
                </div>
                <div
                  style={{
                    width: "50%",
                    textAlign: "left",
                    fontSize: "12px",
                    color: "#3b3b3b",
                    marginTop: "5px",
                    marginBottom: "8px",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "700" }}>
                    New Delhi
                  </div>
                </div>
                <div>DEL</div>
                <input name={"origin"} type="text" />
              </div>
              <div className={styles.revBtn}>
                <button>
                  <img
                    width="13px"
                    src="https://www.yatra.com/fresco/resources/toucan/dist/images/swipe.svg?17fd684eff42c5149d5fd6cfe4b0b38b"
                    alt="rev-icon"
                  />
                </button>
              </div>
              <div className={styles.goi}>
                <div style={{ fontSize: "14px", color: "#A19F9D" }}>
                  Going To
                </div>
                <div
                  style={{
                    width: "50%",
                    textAlign: "right",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#3b3b3b",
                    marginTop: "5px",
                    marginBottom: "8px",
                  }}
                >
                  Mumbai
                </div>
                <div>BOM</div>
                <input name={"destination"} type="text" />
              </div>
            </div>
            <div className={styles.depRetDate}>
              <div className={styles.depDate}>
                <label style={{ fontSize: "14px", color: "#A19F9D" }}>
                  Departure Date
                </label>
                <YatraDatePicker handleDateChange={handleDateChange} />
              </div>
              <div className={styles.retDate}>
                <div
                  style={{ fontSize: "14px", width: "100px", color: "#A19F9D" }}
                >
                  Return date
                </div>
                <YatraDatePicker />
              </div>
            </div>
            <div onClick={handlePreference} className={styles.trav}>
              <label style={{ color: "#A19F9D", fontSize: "13px" }}>
                Traveller(s), class
              </label>
              <div className={styles.traIco}>
                <div style={{ fontSize: "15px", fontWeight: "700" }}>
                  {countAdult + countChild + countInfant} Travellers
                </div>
                <div>
                  <img
                    width="15px"
                    src="https://cdn-icons-png.flaticon.com/512/130/130907.png"
                    alt="dropdown"
                  />
                </div>
              </div>
            </div>
            {selectPreference && (
              <div className={styles.aci}>
                <div className={styles.adult}>
                  <div className={styles.aduPar}>
                    <div className={styles.c}>Adult</div>
                    <div className={styles.adult}>
                      <div
                        className={styles.boxCount}
                        onClick={() => {
                          let decrement = countAdult - 1;
                          setAdultCount(countAdult - 1);
                          setFlightBookingData({
                            ...flightBookingData,
                            travellers: {
                              adults: decrement,
                              kids: countChild,
                              infants: countInfant,
                            },
                          });
                        }}
                      >
                        -
                      </div>
                      <div className={styles.boxCount}>{countAdult}</div>
                      <div
                        className={styles.boxCount}
                        onClick={() => {
                          let increment = countAdult + 1;
                          setAdultCount(countAdult + 1);
                          setFlightBookingData({
                            ...flightBookingData,
                            travellers: {
                              adults: increment,
                              kids: countChild,
                              infants: countInfant,
                            },
                          });
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.child}>
                  <div className={styles.chiPar}>
                    <div className={styles.c}>Child(2-12 Yrs.)</div>
                    <div className={styles.child}>
                      <div
                        className={styles.boxCount}
                        onClick={() => {
                          let decrement = countChild - 1;
                          setChildCount(countChild - 1);
                          setFlightBookingData({
                            ...flightBookingData,
                            travellers: {
                              adults: countAdult,
                              kids: decrement,
                              infants: countInfant,
                            },
                          });
                        }}
                      >
                        -
                      </div>
                      <div className={styles.boxCount}>{countChild}</div>
                      <div
                        className={styles.boxCount}
                        onClick={() => {
                          let increment = countChild + 1;
                          setChildCount(countChild + 1);
                          setFlightBookingData({
                            ...flightBookingData,
                            travellers: {
                              adults: countAdult,
                              kids: increment,
                              infants: countInfant,
                            },
                          });
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.infant}>
                  <div className={styles.infPar}>
                    <div className={styles.c}>Infant(Below 2)</div>
                    <div className={styles.infant}>
                      <div
                        className={styles.boxCount}
                        onClick={() => {
                          let decrement = countInfant - 1;
                          setInfantCount(countInfant - 1);
                          setFlightBookingData({
                            ...flightBookingData,
                            travellers: {
                              adults: countAdult,
                              kids: countChild,
                              infants: decrement,
                            },
                          });
                        }}
                      >
                        -
                      </div>
                      <div className={styles.boxCount}>{countInfant}</div>
                      <div
                        className={styles.boxCount}
                        onClick={() => {
                          let increment = countInfant + 1;
                          setInfantCount(countInfant + 1);
                          setFlightBookingData({
                            ...flightBookingData,
                            travellers: {
                              adults: countAdult,
                              kids: countChild,
                              infants: increment,
                            },
                          });
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectPreference && (
              <div className={styles.radio}>
                <input
                  type="radio"
                  id="economy"
                  name="travel_class"
                  value="Economy"
                  checked
                  onClick={() => {
                    setFlightBookingData({
                      ...flightBookingData,
                      travelClass: 0,
                    });
                  }}
                />
                <label for="economy">Economy</label>
                <input
                  type="radio"
                  id="premium_economy"
                  name="travel_class"
                  value="Premium"
                  onClick={() => {
                    setFlightBookingData({
                      ...flightBookingData,
                      travelClass: 1,
                    });
                  }}
                />
                <label for="premium_economy">Premium Economy</label>
                <input
                  type="radio"
                  id="business"
                  name="travel_class"
                  value="Business"
                  onClick={() => {
                    setFlightBookingData({
                      ...flightBookingData,
                      travelClass: 2,
                    });
                  }}
                />
                <label for="business">Business</label>
              </div>
            )}

            <div className={styles.nonStop}>
              <div>
                <div>
                  <input type="checkbox"  checked/>
                  Non Stop Services
                </div>
                <div>
                  <input type="checkbox" />
                  Student Fare
                </div>
              </div>
              <div>
                <div>
                  <input type="checkbox" />
                  Armed Forces
                </div>
                <div>
                  <input type="checkbox" />
                  Senior Citizen
                </div>
              </div>
            </div>

            <div className={styles.button}>
              <button>
                Check Your Refund
                <ArrowForwardOutlinedIcon style={{ width: "15px" }} />
              </button>
              <button>
                Search Flights
                <ArrowForwardOutlinedIcon style={{ width: "15px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Leftsection };
