import { useEffect, useRef, useState } from "react";
import "./Home.css";
import "./Font.css";
import Navbar from "./Navbar";
// import { useOrderMutation } from "../../redux/features/events/events";
// import { useSound } from "../../context/ApiProvider";
import Control from "./Control";
import UserHistory from "./UserHistory";
import History from "./History";

const Home = () => {
  const [betAmount, setBetAmount] = useState(100);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("");
  // const { sound } = useSound();
  const [isDesktop, setIsDesktop] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  // const [addOrder] = useOrderMutation();
  const [move, setMove] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        console.log(window.innerWidth);
        setDeviceWidth(400);
        setIsDesktop(true);
      } else {
        setDeviceWidth(window.innerWidth);
        setIsDesktop(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(true);
  const requestRef = useRef();
  const intervalRef = useRef(null);

  useEffect(() => {
    if (loading && isSpinning) {
      intervalRef.current = setInterval(() => {
        setMove((prev) => !prev);
      }, 100);
    } else {
      // Stop toggling
      setMove(false);
      // Clear the interval
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Cleanup on unmount or when loading changes
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [loading, isSpinning]);

  useEffect(() => {
    if (loading) {
      // Random stop time between 5 and 10 seconds (in ms)
      const stopAfter = Math.random() * 5000 + 5000;

      const startTime = performance.now();

      const animate = (now) => {
        const elapsed = now - startTime;

        if (elapsed >= stopAfter) {
          setIsSpinning(false);
          return;
        }

        setAngle((prev) => prev + 5); // adjust spin speed here

        requestRef.current = requestAnimationFrame(animate);
      };

      requestRef.current = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(requestRef.current);
    }
  }, [loading]);

  useEffect(() => {
    if (loading) {
      setIsSpinning(true);
    }
  }, [loading]);
  return (
    <div
      id="app"
      style={{
        width: isDesktop ? "420px" : "100%",
        margin: "0 auto",
      }}
    >
      <Navbar isDesktop={isDesktop} />
      <div id="observeElementTree" className="wrap">
        <div className="inner" style={{ width: `${deviceWidth}px` }}>
          <History />
          <div className="game">
            <div className={`game__current  ${move ? "_move2" : "_move"}`} />
            <div className="game__inner">
              <div className="game__brum">
                <div
                  className="game__circle"
                  style={{
                    transform: `rotate(${angle}deg)`,
                    transition: isSpinning ? "none" : "transform 0.5s ease-out",
                  }}
                />
              </div>
            </div>
          </div>
          <UserHistory />
          <Control
            betAmount={betAmount}
            color={color}
            loading={loading}
            setBetAmount={setBetAmount}
            setColor={setColor}
            setLoading={setLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
