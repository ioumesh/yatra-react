import styles from "./Navbar.module.css";
import { useState } from "react";
import FlightIcon from "@material-ui/icons/Flight";
import HotelIcon from "@material-ui/icons/Hotel";
import HouseIcon from "@material-ui/icons/BeachAccess";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import PaymentIcon from "@material-ui/icons/PaymentOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [AccountInfo, setAccountInfo] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [redirectToSignUp, setRedirectToSignUp] = useState(false);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const [activeIcon, setActiveIcon] = useState(1);
  const token = false;
  const navigate = useNavigate();
  const visibleIcons = [
    {
      id: 1,
      icon: <FlightIcon className={styles.Icons} />,
      label: "Flights",
    },
    {
      id: 2,
      icon: <HotelIcon className={styles.Icons} />,
      label: "Hotels",
    },
    {
      id: 3,
      icon: <HouseIcon className={styles.Icons} />,
      label: "Holidays",
    },
    {
      id: 4,
      icon: <DirectionsBusIcon className={styles.Icons} />,
      label: "Buses",
    },
    {
      id: 5,
      icon: <LocalTaxiIcon className={styles.Icons} />,
      label: "Cabs",
      isNew: true,
    },
    {
      id: 6,
      icon: <PaymentIcon className={styles.Icons} />,
      label: "Visa",
      isNew: true,
    },
  ];
  if (redirectToLogin) {
    navigate("/signin");
  }
  if (redirectToSignUp) {
    navigate("/signup");
  }
  const handleActive = (id) => {
    setActiveIcon(id);
    navigate("/");
  };
  return (
    <header className={styles.MainHeader}>
      <div className={styles.header}>
        <div className={styles.AppLogo}></div>
        <div className={styles.IconsAndTextWraper}>
          {visibleIcons.map((item) => {
            return (
              <div
                className={`${styles.IconsAndText} ${
                  activeIcon === item.id ? styles.active : ""
                }`}
                onClick={() => handleActive(item.id)}
              >
                <div className={styles.Icons}>{item.icon}</div>
                <div className={styles.Text}>{item.label}</div>
                {item.isNew && <div className={styles.new}>New</div>}
              </div>
            );
          })}
          <div className={styles.MoreIconsAndText}>
            <div className={styles.MoreOption}>+More</div>
            <div className={styles.SubMenu1}>
              <div>
                {visibleIcons.map((item) => {
                  return (
                    <div key={item.id} className={styles.ListItems}>
                      <div>{item.icon}</div>
                      <div className={styles.Labels}>{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.OtherInformationWrapper}>
          <div className={styles.joinPrime}></div>
          <div
            className={styles.myAccountWrapper}
            onClick={() => {
              setAccountInfo(!AccountInfo);
            }}
          >
            My Account
            <ArrowDropDownIcon className={styles.ArrowDown} />
          </div>
          <div className={styles.support}>
            Support <ArrowDropDownIcon className={styles.ArrowDown} />
            <div className={styles.supportNew}>New</div>
          </div>
          <div className={styles.OtherInformation}>Offer</div>
          <div className={styles.OtherInformation}>Yatra for Business </div>
        </div>
      </div>
      {AccountInfo ? (
        <div className={styles.AccountInfo}>
          <div className={styles.ImageBookingAndRefund}>
            <div>{/* <AccountCircleOutlinedIcon /> */}</div>
            {token ? (
              <div onClick={() => setRedirectToDashboard(true)}>
                My Dashboard
              </div>
            ) : (
              <div></div>
            )}
            <div>My Bookings</div>
            <div>My Refund</div>
          </div>
          {token ? (
            <div
              className={styles.TwoButtons}
              style={{ display: "inline-flex", marginTop: "20px" }}
            >
              <button>LogOut</button>
            </div>
          ) : (
            <div
              className={styles.TwoButtons}
              style={{ display: "inline-flex", marginTop: "20px" }}
            >
              <button
                onClick={() => {
                  setRedirectToLogin(true);
                }}
              >
                LogIn
              </button>
              <button
                onClick={() => {
                  setRedirectToSignUp(true);
                }}
              >
                SignUp
              </button>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};
export { Navbar };
