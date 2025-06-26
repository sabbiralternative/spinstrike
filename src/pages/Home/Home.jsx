import { useEffect, useRef, useState } from "react";
import "./Home.css";
import "./Font.css";
import Navbar from "./Navbar";
// import { useOrderMutation } from "../../redux/features/events/events";
// import { useSound } from "../../context/ApiProvider";
import Control from "./Control";
// import UserHistory from "./UserHistory";
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
  const [angle, setAngle] = useState(0);
  const [isSpinning, setIsSpinning] = useState(true);
  const requestRef = useRef();
  const currentSpeedRef = useRef(5);

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

  useEffect(() => {
    let timeoutId = null;

    const runToggle = () => {
      if (!loading || !isSpinning) return;

      // Estimate speed-based delay: faster spin = faster toggle, slower spin = slower toggle
      const speed = currentSpeedRef.current || 1;
      const delay = 100 + (5 - speed) * 40;

      setMove((prev) => !prev);

      timeoutId = setTimeout(runToggle, delay);
    };

    if (loading && isSpinning) {
      runToggle();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [loading, isSpinning]);

  useEffect(() => {
    if (loading) {
      const stopAfter = Math.random() * 5000 + 5000; // Between 5s and 10s
      const startTime = performance.now();

      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = elapsed / stopAfter;

        if (progress >= 1) {
          setIsSpinning(false);
          return;
        }

        // Spin speed slows down as progress increases (ease-out)
        const speed = 5 * (1 - progress); // Decrease from 5 to 0
        currentSpeedRef.current = speed;
        setAngle((prev) => prev + speed);

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
          {/* <UserHistory /> */}
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
