import { useEffect, useRef, useState } from "react";
import { useSound } from "../../context/ApiProvider";
import { playSelectSound, playStakeSound } from "../../utils/sound";

const Control = ({
  color,
  betAmount,
  setBetAmount,
  setColor,
  loading,
  setLoading,
  handlePlaceBet,
}) => {
  const { sound } = useSound();
  const [width, setWidth] = useState(0);
  const requestRef = useRef();
  const startTimeRef = useRef();

  const handleToggleColor = (inputColor) => {
    if (sound) {
      playSelectSound();
    }
    if (color === inputColor) {
      setColor("");
    } else {
      setColor(inputColor);
    }
  };

  const handleChangeBetAmount = (type) => {
    selectStakeSound();
    if (type === "minus") {
      if (betAmount > 0 && betAmount <= 100) {
        setBetAmount((prev) => Math.max(prev - 10, 0));
      } else if (betAmount > 100 && betAmount <= 1000) {
        setBetAmount((prev) => Math.max(prev - 100, 0));
      } else if (betAmount > 1000) {
        setBetAmount((prev) => Math.max(prev - 500, 0));
      }
    }
    if (type === "plus") {
      if (betAmount >= 0 && betAmount < 100) {
        setBetAmount((prev) => prev + 10);
      } else if (betAmount >= 100 && betAmount < 1000) {
        setBetAmount((prev) => prev + 100);
      } else if (betAmount >= 1000) {
        setBetAmount((prev) => prev + 500);
      }
    }
  };

  const selectStakeSound = () => {
    if (sound) {
      playStakeSound();
    }
  };

  useEffect(() => {
    if (!loading) {
      startTimeRef.current = null;
      requestRef.current = null;

      const duration = 10000; // 10 seconds

      const animate = (timestamp) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;

        // Linear progress from 0 to 1
        const progress = Math.min(elapsed / duration, 1);

        // No easing or wobble — pure linear motion
        const currentWidth = progress * 100;
        setWidth(currentWidth);

        if (progress < 1) {
          requestRef.current = requestAnimationFrame(animate);
        }
      };

      requestRef.current = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(requestRef.current);
    } else {
      setColor("");
    }
  }, [loading, setColor]);

  useEffect(() => {
    setInterval(() => {
      setWidth(0);
      setLoading((prev) => !prev);
    }, 10000);
  }, []);

  return (
    <div className="control lg:!pt-[0px]">
      {/* Bet amount section start */}
      <div className={`amount-portrait ${loading ? "_disabled" : ""}`}>
        <div className="amount-portrait__inner">
          <div className="amount-portrait__title">
            Bet Amount
            <div className="icon-alert _ml5">
              <div className="icon-alert__content">
                <div className="tooltip">
                  <div className="tooltip__inner">
                    <div className="tooltip__icon">
                      <i className="fm-iconFont fm-iconFont-info-sm" />
                    </div>
                    <div className="tooltip__content">Max Profit $10000</div>
                  </div>
                </div>
              </div>
              <div className="icon-alert__icon">
                <i className="fm-iconFont fm-iconFont-info-sm" />
              </div>
            </div>
          </div>
          <label
            htmlFor="90de5522-109a-42fb-9bf4-6ea01d226106"
            className="amount-portrait__label"
          />
          <div className={`amount-btns ${loading ? "_disabled" : ""}`}>
            <div className="amount-btns__inner">
              <div
                className="amount-btns__left"
                onClick={() => {
                  setBetAmount(10);
                  selectStakeSound();
                }}
              >
                min
              </div>
              <div
                onClick={() => handleChangeBetAmount("minus")}
                className="amount-btns__right _font20 _pr1 _pb1"
              >
                -
              </div>
            </div>
          </div>
          <div className="amount-portrait__input">
            <input
              onChange={(e) => setBetAmount(e.target.value)}
              type="text"
              inputMode="decimal"
              autoComplete="off"
              spellCheck="false"
              value={betAmount}
            />
          </div>
          <div className={`amount-btns _right ${loading ? "_disabled" : ""}`}>
            <div className="amount-btns__inner">
              <div
                onClick={() => handleChangeBetAmount("plus")}
                className="amount-btns__left _font20 _pl1"
              >
                +
              </div>
              <div
                className="amount-btns__right"
                onClick={() => {
                  setBetAmount(10000);
                  selectStakeSound();
                }}
              >
                max
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bet amount section end */}

      <div className="buttons">
        <div className="buttons__inner">
          <div
            onClick={() => handleToggleColor("blue")}
            className={`buttons__item ${loading ? "_disabled" : ""}  ${
              color === "blue" ? " _cancel _blue" : "_blue"
            }`}
          >
            <div className="buttons__led" />
            <div className="buttons__sum">$0</div>
            <div className="buttons__btn _font12">
              <span>X2</span>
            </div>
          </div>
          <div
            onClick={() => handleToggleColor("orange")}
            className={`buttons__item ${loading ? "_disabled" : ""}  ${
              color === "orange" ? " _cancel _orange" : "_orange"
            }`}
          >
            <div className="buttons__led" />
            <div className="buttons__sum">$0</div>
            <div className="buttons__btn _font12">
              <span>X14</span>
            </div>
          </div>
          <div
            onClick={() => handleToggleColor("green")}
            className={`buttons__item ${loading ? "_disabled" : ""} ${
              color === "green" ? " _cancel _green" : "_green"
            }`}
          >
            <div className="buttons__led" />
            <div className="buttons__sum">$0</div>
            <div className="buttons__btn _font12">
              <span>X2</span>
            </div>
          </div>
        </div>
      </div>
      <div className="button__wrap ">
        <div className={`button__await ${loading ? "" : "_show"}`}>
          <div className="button__await-inner" style={{ width: `${width}%` }} />
        </div>
        {loading ? (
          <div className="button _loading _disabled">
            <div className="button__pulse" />
            <div className="button__loading">
              <span />
            </div>
          </div>
        ) : (
          <>
            {color ? (
              <div onClick={handlePlaceBet} className={`button _${color}`}>
                <div className="button__pulse"></div>
                <div className="button__inner">
                  <span>Place bet</span>
                </div>
              </div>
            ) : (
              <div className="button _disabled">
                <div className="button__inner">
                  <span style={{ fontSize: "10.8333px" }}>Choose color</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Control;
