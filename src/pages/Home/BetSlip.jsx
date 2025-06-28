const BetSlip = () => {
  return (
    <div className="game-betslip">
      <div className="input-text__wrapper">
        <div data-track="bet_1.min" className="input-button _sm">
          <div className="input-button__text">min</div>
        </div>
        <div data-track="bet_1.minus_1" className="input-button _sm">
          <div className="input-button__text">-</div>
        </div>
        <div data-track="bet_1.plus_1" className="input-button _sm">
          <div className="input-button__text">+</div>
        </div>
        <div data-track="bet_1.max" className="input-button _sm">
          <div className="input-button__text">max</div>
        </div>
        <div className="games-input__wrapper">
          <label htmlFor="2eeea433-a968-41cb-89d3-3babf786557d">
            Bet Amount
            <span className="tooltip-box">
              i<span className="tooltip-hint">Max Profit $10000</span>
            </span>
          </label>
          <input
            type="text"
            inputMode="decimal"
            id="2eeea433-a968-41cb-89d3-3babf786557d"
            autoComplete="off"
            spellCheck="false"
            tabIndex={-1}
            className="games-input__number"
          />
        </div>
      </div>
      <div className="game-betslip__buttons">
        <div data-track="bet_1.place" className="btn-new _green">
          <div className="btn-bg _bg1" />
          <div className="btn-bg _bg11" />
          <div className="btn-new__border">
            <div className="btn-bg _bg2" />
            <div className="btn-bg _bg22" />
            <div className="btn-new__inner">
              <div className="btn-bg _bg1" />
              <div className="btn-bg _bg11" />
              <div className="btn-new__text">
                <div className="text">Roll</div>
                <div className="_small">
                  Under <span className="_roboto">50</span>
                </div>
                <div className="indicator _green" />
              </div>
            </div>
          </div>
        </div>
        <div className="btn-new _purple">
          <div className="btn-bg _bg1" />
          <div className="btn-bg _bg11" />
          <div className="btn-new__border">
            <div className="btn-bg _bg2" />
            <div className="btn-bg _bg22" />
            <div className="btn-new__inner">
              <div className="btn-bg _bg1" />
              <div className="btn-bg _bg11" />
              <div className="btn-new__text">
                <div className="text">Roll</div>
                <div className="_small">
                  Over <span className="_roboto">50</span>
                </div>
                <div className="indicator _purple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
