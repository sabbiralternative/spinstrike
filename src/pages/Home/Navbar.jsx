import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";
import { useSound } from "../../context/ApiProvider";
const Navbar = ({ isDesktop }) => {
  const { sound, setSound } = useSound();
  const { token, balance } = useSelector((state) => state.auth);
  const { mutate: handleAuth } = useAuth();

  useEffect(() => {
    if (token) {
      handleAuth();
    }
  }, [token, handleAuth]);

  const handleSoundToggle = () => {
    if (sound) {
      sessionStorage.setItem("sound", false);
      setSound(false);
    } else {
      sessionStorage.removeItem("sound");
      setSound(true);
    }
  };
  return (
    <div
      style={{
        width: isDesktop ? "420px" : "100%",
        margin: "0 auto",
      }}
    >
      <div
        id="ModuleLayoutDiv"
        style={{
          position: "fixed",
          zIndex: 1000,
          left: "0px",
          top: "0px",
          right: "0px",
          width: isDesktop ? "420px" : "100%",
          height: "40px",
          background:
            "linear-gradient(rgba(34, 34, 34, 195) 0%, rgba(34, 34, 34, 0) 100%)",
          margin: "0 auto",
        }}
      />

      <div
        data-track="balance"
        className="balance--Kjiqa"
        style={{
          position: "absolute",
          zIndex: 1000,
          left: "8px",
          top: "8px",
        }}
      >
        <div className="balanceTitle--JnSFJ">Balance:</div>
        <i className="fm-iconFont fm-iconFont-ios-creditcard"></i>
        <span className="balanceSum--_ab3Z">{balance}</span>
      </div>

      <div
        style={{
          position: "fixed",
          zIndex: 1000,
          right: isDesktop ? "40px" : "8px",
          top: "8px",
          left: "0px",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          width: isDesktop ? "420px" : "100%",
          margin: "0 auto",
        }}
      >
        <div data-track="settings" className="icon--k9yLr">
          <i className="fm-iconFont fm-iconFont-ios-nav"></i>
        </div>
        <div
          onClick={handleSoundToggle}
          className="icon--k9yLr"
          style={{ marginRight: "8px" }}
        >
          {sound ? (
            <i className="fm-iconFont fm-iconFont-ios-music-on"></i>
          ) : (
            <i className="fm-iconFont fm-iconFont-ios-music-off"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
