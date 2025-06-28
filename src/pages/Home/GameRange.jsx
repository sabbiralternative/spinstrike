import { useState } from "react";

const GameRange = ({ greenWinChance, translateX, handleChangeRange }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="games-range__wrapper">
      <div data-track="range.right" className="games-range__arrow _left" />
      <div data-track="range.left" className="games-range__arrow _right" />
      <div className={`games-range ${active ? "active" : ""}`}>
        <div id="range" className="games-range__input">
          <div className="games-range__input-inner">
            <div
              className="games-range__input-track"
              style={{ transform: `translateX(${greenWinChance}%)` }}
            />
          </div>
          <div
            className="games-range__input-slider"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            <div className="games-range__input-slider-inner" />

            <div className="games-range__input-value">
              {greenWinChance + 100}.00
            </div>
          </div>
          <input
            onTouchEnd={() => setActive(false)}
            onChange={(e) => {
              handleChangeRange(e);
              setActive(true);
            }}
            type="range"
            max={97}
            min={3}
            step={1}
            value={greenWinChance}
            className="games-range__input-hidden"
          />
        </div>
        <div className="range__grade">
          <div className="range__grade-item _0">
            <div className="range__grade-item-text">0</div>
          </div>
          <div className="range__grade-item _10" />
          <div className="range__grade-item _20" />
          <div className="range__grade-item _30" />
          <div className="range__grade-item _40" />
          <div className="range__grade-item _50">
            <div className="range__grade-item-text">50</div>
          </div>
          <div className="range__grade-item _60" />
          <div className="range__grade-item _70" />
          <div className="range__grade-item _80" />
          <div className="range__grade-item _90" />
          <div className="range__grade-item _100">
            <div className="range__grade-item-text">100</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameRange;
